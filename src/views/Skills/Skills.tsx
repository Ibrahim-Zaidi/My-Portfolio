import SkillGrid from "./SkillGrid";
import TechGrid from "./TechGrid";

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center min-h-full bg-gray-900 text-white p-5 md:p-20">
      <div className="max-w-4xl w-full space-y-16">
        <div className="animate-[fadeIn_1s_ease-out]">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-10 text-center md:text-left">
            Skills
          </h1>
          <SkillGrid />
        </div>
        <div className="animate-[slideInFromBottom_1s_ease-out_0.5s_both]">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-8 text-center md:text-left">
            Technologies I Work With
          </h2>
          <TechGrid />
        </div>
      </div>
    </div>
  );
}

export default Skills;
