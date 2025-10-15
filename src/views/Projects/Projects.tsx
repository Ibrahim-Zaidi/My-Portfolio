import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center min-h-full bg-gray-900 text-white p-5 md:p-20 mb-15">
      <div className="max-w-7xl w-full flex flex-col ">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-12 text-center md:text-left animate-[fadeIn_1.2s_ease-out]">
          Selected Projects I Worked On
        </h1>

        <div className="animate-[slideInFromBottom_1.2s_ease-out_0.5s_both] ">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}

export default Projects;
