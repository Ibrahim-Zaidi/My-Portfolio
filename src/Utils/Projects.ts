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
      "a real-time chat application with private messaging, and multimedia sharing.",
    image:
      "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M1wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: [
      "React",
      "Socket.IO",
      "PostgreSQL",
      "TailwindCSS",
      "daisyUI",
      "Express",
      "TypeScript",
      "Prisma",
    ],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/Ibrahim-Zaidi/ConvoNet",
  },
  {
    id: 2,
    title: "Bookify Website",
    description:
      "A full-featured booking system where users can search for wanted rooms at reasonable prices.",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Ibrahim-Zaidi/Bookify",
  },
];

export default projects;
