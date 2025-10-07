import technologies from "../../Utils/TechProvider";
import projects from "../../Utils/Projects";

function ProjectsList() {
  function findTechIcon(techName: string): string | undefined {
    const tech = technologies.find((t) => t.name === techName);
    return tech?.icon;
  }

  return (
    <div className="flex justify-center align-center gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700/50 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-2 w-xl "
        >
          {/* Project Image */}
          <div className="h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

            {/* Tech Stack */}
            <div className="mb-4">
              <h4 className="text-sm text-gray-400 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center bg-gray-700/50 px-2 py-1 rounded-md"
                  >
                    <img
                      src={findTechIcon(tech)}
                      alt={tech}
                      className="w-4 h-4 mr-1"
                      onError={(e) => {
                        (
                          e.target as HTMLImageElement
                        ).src = `https://via.placeholder.com/30?text=${tech[0]}`;
                      }}
                    />
                    <span className="text-xs text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-700/50">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-gray-300 flex items-center"
                >
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
