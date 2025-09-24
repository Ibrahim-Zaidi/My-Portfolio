import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center min-h-full bg-gray-900 text-white p-5 md:p-20">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-12 text-center md:text-left animate-[fadeIn_1.2s_ease-out]">
          Projects I've Built
        </h1>

        <p className="text-lg text-gray-300 max-w-3xl mb-16 animate-[fadeIn_1.2s_ease-out_0.3s_both]">
          Here are some of the projects I've worked on that demonstrate my
          skills and experience in web development. Each project is briefly
          described with the technologies used.
        </p>

        <div className="animate-[slideInFromBottom_1.2s_ease-out_0.5s_both]">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}

export default Projects;
