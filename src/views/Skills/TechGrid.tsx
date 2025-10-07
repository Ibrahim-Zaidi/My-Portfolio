import technologies from "../../Utils/TechProvider";

function TechGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-8">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out_forwards]"
        >
          <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700 w-20 h-20 flex items-center justify-center shadow-md hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
          </div>
          <span className="mt-2 text-sm text-gray-300">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TechGrid;
