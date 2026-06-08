function About() {
  return (
    <div className="flex flex-col  items-center min-h-full bg-gray-900 text-white p-7 md:p-10 lg:p-20">
      <div className="max-w-3xl w-full space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 animate-[slideInFromLeft_1.2s_ease-out]">
          A Shade... of Who I Am
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed animate-[slideInFromLeft_1s_ease-out_0.8s_both]">
          I go by Zaidi Ibrahim Younes, a third year computer science student at
          the university of Algiers. I am a fullstack web developer with a keen
          interest in building web applications that are not only functional but
          also user-friendly and visually appealing.
        </p>

        <div className="pt-8 border-t border-gray-800 animate-[slideInFromLeft_1s_ease-out_1.5s_both]">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            My experience
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-start">
              <span className="text-indigo-300 font-medium md:w-40 shrink-0 md:pt-1 mb-1 md:mb-0">
                Oct 2025 - Jan 2026
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-200">
                  Software Development Intern — Thynk Tech Dz
                </h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-2 text-sm md:text-base">
                  <li>Developed a significant part of the backend infrastructure using Python, FastAPI, and SQLAlchemy.</li>
                  <li>Implemented Role-Based Access Control (RBAC) to manage user permissions and data authorization.</li>
                  <li>Containerized services with Docker to ensure consistency between local development and production environments.</li>
                  <li>Assisted the engineering team with deployment and managing application pipelines on Sevalla.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center">
              <span className="text-indigo-300 font-medium md:w-40 shrink-0">
                2022 - Juin 2026
              </span>
              <span className="text-gray-300">
                Bachelore degree in computer science at the University of Algiers 1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
