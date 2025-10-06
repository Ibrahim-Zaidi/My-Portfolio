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
  // {
  //   id: 1,
  //   title: "E-commerce Platform",
  //   description:
  //     "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.",
  //   image:
  //     "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  //   techStack: ["React", "Node.js", "MongoDB", "Express"],
  //   liveUrl: "https://project1.com",
  //   githubUrl: "https://github.com/yourusername/project1",
  // },
  {
    id: 2,
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with private messaging, group chats, and multimedia sharing.",
    image:
      "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["React", "Socket.IO", "Node.js", "MongoDB"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills, projects, and professional journey.",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["React", "TypeScript", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];

export default projects;
