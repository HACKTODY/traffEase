import React from "react";
import { View, Text, Image, ScrollView, Linking, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/logo/Logo";
import NavLayout from "../layouts/NavLayout";
import ispm from "./../../assets/images/ISPM.jpg";
import AboutComponent from "../components/AboutComponent/AboutComponent";
import traff from "./../../assets/images/logo.png";
import AutoLayouts from "../layouts/AutoLayouts";
const AboutScreen = () => {
  return (
    <View className="flex flex-col justify-center items-center w-[100%] h-[100%]">
      <ScrollView>
        <AboutComponent
          title="ISPM"
          img={ispm}
          text="L'Institut Supérieur Polytechnique de Madagascar ou ISPM, premier
              institut polytechnique privé à Madagascar a vu le jour en janvier
              1993 à Antananarivo sur l'initiative du Professeur RABOANARY
              Julien Amédée. A sa création en 1993, il était connu sous le nom
              Ecole Supérieure de Sciences et Techniques de l'information à
              Madagascar ou ESSTIM n'ayant qu'une seule filière Informatique de
              Gestion, Génie logiciel et Intelligence Artificielle (IGGLIA).
              D'autres filières ont été mises en place successivement : En 1994
              : la filière Eléctronique, Système Informatique et Intelligence
              Artificielle (ESIIA) ; En 1995 : la filière Commerce et
              Administration des Affaires (CAA) ; En 1996 : la filière
              Biotechnologie (la filière Industries Agro-Alimentaire (IAA) et la
              filière Pharmacologie et Industries Pharmaceutiques (PIP)) En 1997
              : la filière Tourisme Et Environnement (TEE) ; En 1998 : la
              filière Electromécanique et Informatique Industrielle (EMII) ; En
              1999 : la filière Génie Civil et Architecture (GCA) ; En 2004 : -
              la filière Informatique Multimédia et Technologie de l'Information
              et de la Communication (IMTIC) ; - la filière Finances et
              Comptabilité (FIC) ; - la filière Agriculture Et Elevage (AEE) En
              2009 : - la filière Economie et Management de Projet (EMP) ; - la
              filière Droit et Techniques Juridiques des Affaires (DTJA) ; - la
              filière Tourisme et Hotellerie (TEH) - la filière Industries
              Chimiques, Minières et Pétrolères (ICMP) En 2010 : La filière
              Informatique, Statistiques Appliquées et Intelligence Artificielle
              (ISAIA)"
        />
        <AboutComponent
          title="TRAFFEASE"
          img={traff}
          text="L'application TRAFFEASE que tu développes pourrait être conçue pour guider les utilisateurs du point de départ (leur emplacement actuel) à une destination en utilisant des services de géolocalisation et des API de calcul d'itinéraire.
              Voici une vue d'ensemble détaillée de la façon dont TRAFFEASE pourrait fonctionner :
              1. Fonctionnalités principales
              Localisation actuelle : L'application utilise les services de localisation pour déterminer la position actuelle de l'utilisateur (latitude et longitude).
              Saisie de destination : L'utilisateur saisit manuellement sa destination dans un champ d'entrée (par exemple, une ville ou un lieu).
              Calcul d'itinéraire : L'application envoie une requête à une API d'itinéraire (comme OSRM ou Google Maps API) pour obtenir les directions entre le point de départ et la destination.
              Affichage de l'itinéraire : Les directions sont affichées sous forme de carte, avec les points du trajet connectés, et un guide étape par étape est proposé à l'utilisateur.
              Navigation en temps réel : L'utilisateur peut suivre la progression sur une carte avec des mises à jour en temps réel basées sur ses mouvements.
              2. Technologies utilisées
              React Native : Pour le développement mobile multiplateforme (iOS et Android).
              API de géolocalisation : Utilisation de la bibliothèque react-native-geolocation-service pour obtenir la localisation de l'utilisateur.
              OSRM API (Open Source Routing Machine) : Pour calculer l'itinéraire entre le point de départ et la destination en fonction de la distance et du type de route (ex: en voiture, à pied, etc.).
              MapView : Utiliser react-native-maps pour afficher la carte avec l'itinéraire tracé dessus.
              Fetch API : Pour récupérer les données d'itinéraire depuis le serveur.
              3. Détail du fonctionnement
              a. Localisation actuelle
              Lors de l'ouverture de l'application, TRAFFEASE demande l'autorisation d'accéder à la localisation de l'utilisateur.
              Elle récupère ensuite les coordonnées de l'utilisateur (latitude, longitude) via les services de localisation.
              "
        />
      </ScrollView>
    </View>
  );
};

export default AboutScreen;
