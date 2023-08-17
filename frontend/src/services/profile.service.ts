import axios from "axios";

export interface Profile {
    _id: string;
    name: string;
    title: string;
    summary: string;
    contactLinks: Array<string>;
  }

  //traer perfil 

export const profileService = {
    getProfile: async (): Promise<Profile[]> => {
      try {
        const response = await axios.get<Profile[]>(
          "http://localhost:3000/profile",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        return response.data;

      } catch (error) {
        // Aquí puedes manejar los errores de la petición si es necesario
        console.log(error);
        console.error("Error fetching courses:", error);
        throw error;
      }
    },
  };


  