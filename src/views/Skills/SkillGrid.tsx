function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1 animate-[slideInFromLeft_0.8s_ease-out_0.2s_both]">
        <div className="mb-4 text-indigo-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Front-End Development</h3>
        <p className="text-gray-300">
          Proficient in building responsive and interactive user interfaces
          using modern frameworks like React, with attention to UI/UX design
          principles.
        </p>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1 animate-[slideInFromLeft_0.8s_ease-out_0.4s_both]">
        <div className="mb-4 text-indigo-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Back-End Development</h3>
        <p className="text-gray-300">
          Experienced in building robust server-side applications, RESTful APIs,
          and database management using Node.js, Express, and both SQL and NoSQL
          databases.
        </p>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1 animate-[slideInFromLeft_0.8s_ease-out_0.6s_both]">
        <div className="mb-4 text-indigo-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Critical Thinking</h3>
        <p className="text-gray-300">
          Skilled in identifying issues, analyzing problems, and finding
          innovative solutions through logical reasoning.
        </p>
      </div>
    </div>
  );
}

export default SkillGrid;
