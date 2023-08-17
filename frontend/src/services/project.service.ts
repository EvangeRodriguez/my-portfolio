import axios from "axios";

export interface Project {
    _id: string;
    title: string;
    summary: string;
    techonology: string;
    github: string;
    url: string;
  }

  //traer peryectos 

export const profileService = {
    getProfile: async (): Promise<Project[]> => {
      try {
        const response = await axios.get<Project[]>(
          "http://localhost:3000/project",
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

