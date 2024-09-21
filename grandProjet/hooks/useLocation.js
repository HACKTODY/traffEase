import { useState } from "react";

const useLocation = () => {
  const [Location, setLocation] = useState({
    locat: "",
    dest: "",
  });
  const changeLocation = (key, value) => {
    setLocation({
      ...Location, // Copier les autres valeurs existantes
      [key]: value, // Mettre à jour la valeur de la clé en fonction de l'input
    });
  };
  return({Location,changeLocation})
};
export default useLocation;
