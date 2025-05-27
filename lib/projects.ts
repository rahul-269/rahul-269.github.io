export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Pokedex Web App",
    description:
      "Pokedex Web App using React JS and Framer Motion with options to view stats, abilities, moves, and shiny versions.",
    image: "/project5.png",
    link: "https://pokedex-react-app-one.vercel.app/",
  },
  {
    title: "Real-time Chat App",
    description:
      "Live chat app using React, SASS, and Firebase with user authentication, real-time messaging, and image support.",
    image: "/project3.png",
    link: "https://chat-realtime-react.vercel.app/login",
  },
  {
    title: "Movie Finding App",
    description:
      "React App using OMDB API to fetch movie data, allowing users to search and view movie details.",
    image: "/project1.png",
    link: "https://react-movie-finder-app-eta.vercel.app/",
  },
  {
    title: "User Management Software",
    description:
      "React App using a fake API to generate random user data, with functions to add, delete, and update users.",
    image: "/project2.jpg",
    link: "https://user-management-faker.vercel.app/",
  },
];
