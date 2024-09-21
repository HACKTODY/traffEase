import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps"; // Ajout de Marker
import InputCommon from "../../common/input/InputCommon";
import Locations from "./../../../assets/images/Document.png";
import droit from "./../../../assets/images/fleche-droite1.png";
import MapButton from "./MapButton";

export default function Map() {
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [initialRegion, setInitialRegion] = useState(null);
  let routes;

  const handleClick = () => {
    console.log("====================================");
    console.log(location.dest);
    console.log("====================================");
    console.log("====================================");
    console.log(location.locat);
    console.log("====================================");

    if (location.dest == "" || location.locat == "") {
      alert("Please Entry your Location and Destination");
    } else {
      const routes = `http://192.168.43.45:5000/route?start_city=${location.locat}&end_city=${location.dest}`;
      const backendUrl = routes;

      fetch(backendUrl)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 1) {
            // Transformer les données en format {latitude, longitude}
            const formattedData = data.map(([latitude, longitude]) => ({
              latitude,
              longitude,
            }));

            // Fonction pour effectuer une requête OSRM entre deux coordonnées
            const fetchRouteSegment = (startCoord, endCoord) => {
              const osrmUrl = `http://router.project-osrm.org/route/v1/driving/${startCoord.longitude},${startCoord.latitude};${endCoord.longitude},${endCoord.latitude}?overview=full&geometries=geojson`;
              return fetch(osrmUrl)
                .then((response) => response.json())
                .then((osrmData) => {
                  if (
                    osrmData &&
                    osrmData.routes &&
                    osrmData.routes.length > 0
                  ) {
                    // Retourner les coordonnées du segment
                    return osrmData.routes[0].geometry.coordinates.map(
                      ([longitude, latitude]) => ({
                        latitude,
                        longitude,
                      })
                    );
                  } else {
                    console.error("Aucun itinéraire trouvé pour ce segment.");

                    return [];
                  }
                })
                .catch((error) => {
                  console.error(
                    "Erreur lors de la récupération du segment:",
                    error
                  );
                  return [];
                });
            };

            // Fonction asynchrone pour traiter chaque segment
            const fetchAllSegments = async () => {
              let completeRoute = [];
              for (let i = 0; i < formattedData.length - 1; i++) {
                const startCoord = formattedData[i];
                const endCoord = formattedData[i + 1];
                const segment = await fetchRouteSegment(startCoord, endCoord);
                completeRoute = [...completeRoute, ...segment];
              }

              if (completeRoute.length > 0) {
                setRouteCoordinates(completeRoute);

                // Calcul de la région initiale pour centrer la carte
                const latitudes = completeRoute.map((coord) => coord.latitude);
                const longitudes = completeRoute.map(
                  (coord) => coord.longitude
                );

                const latMin = Math.min(...latitudes);
                const latMax = Math.max(...latitudes);
                const lonMin = Math.min(...longitudes);
                const lonMax = Math.max(...longitudes);

                setInitialRegion({
                  latitude: (latMin + latMax) / 2,
                  longitude: (lonMin + lonMax) / 2,
                  latitudeDelta: latMax - latMin + 0.05,
                  longitudeDelta: lonMax - lonMin + 0.05,
                });
              } else {
                console.error("Aucune route valide trouvée.");
              }
            };

            // Lancer la récupération de tous les segments
            fetchAllSegments();
          } else {
            console.error("Format de données inattendu:", data);
          }
        })
        .catch((error) => {
          alert(
            "Sorry ! the Destination and the Location isn't exist here. Please try others!"
          );
        });
    }
  };

  const [location, setLocation] = useState({
    locat: "",
    dest: "",
  });

  const changeLocation = (key, value) => {
    setLocation({
      ...location,
      [key]: value,
    });
  };

  return (
    <View className="w-screen h-screen">
      <View style={styles.container}>
        <MapView style={StyleSheet.absoluteFill} initialRegion={initialRegion}>
          {routeCoordinates.length > 0 && (
            <>
              <Polyline
                coordinates={routeCoordinates}
                strokeColor="#24D26D"
                strokeWidth={4}
              />
              {/* Marker for Start City (Red) */}
              <Marker
                coordinate={routeCoordinates[0]}
                pinColor="red"
                title="Start Location"
              />
              {/* Marker for End City (Green) */}
              <Marker
                coordinate={routeCoordinates[routeCoordinates.length - 1]}
                pinColor="green"
                title="Destination"
              />
            </>
          )}
        </MapView>
        <StatusBar style="auto" />
      </View>
      <View className="absolute w-screen h-[45%] flex justify-end items-end mt-[50vh]">
        <View className="w-screen h-80 bg-slate-500 rounded-[100px] flex flex-col justify-center items-center gap-2">
          <InputCommon
            placeholder="My Location"
            source={Locations}
            value={location.locat}
            onChangeText={(e) => changeLocation("locat", e)}
          />
          <InputCommon
            placeholder="My Destination"
            source={droit}
            value={location.dest}
            onChangeText={(e) => changeLocation("dest", e)}
          />
          <MapButton onPress={handleClick} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
