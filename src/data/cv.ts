export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  location: string;
}

export interface CVData {
  personal: PersonalInfo;
}

export const cvData: CVData = {
  personal: {
    fullName: "Yerko Andrés Barrera Pantoja",
    professionalTitle:
      "Desarrollador Full Stack | Ingeniería en Computación e Informática",
    location: "Valparaíso, Chile",
  },
};