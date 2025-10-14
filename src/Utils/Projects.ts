type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "ConvoNet",
    description:
      "a real-time chat application with private messaging, multimedia sharing, and a modern, responsive design.",
    image: "2.png",
    techStack: [
      "React",
      "Socket.IO",
      "PostgreSQL",
      "TailwindCSS",
      "daisyUI",
      "Express",
      "TypeScript",
      "Prisma",
      "Node.js",
    ],
    // liveUrl: "",
    githubUrl: "https://github.com/Ibrahim-Zaidi/ConvoNet",
  },
  {
    id: 2,
    title: "Bookify Website",
    description:
      "A full-featured booking system where users can search for rooms, book them, and manage their reservations.",
    image: "4.png",
    techStack: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "CSS",
      "Node.js",
    ],
    // liveUrl: "",
    githubUrl: "https://github.com/Ibrahim-Zaidi/Bookify",
  },
];

export default projects;
