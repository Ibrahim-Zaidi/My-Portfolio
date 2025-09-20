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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
        <p className="text-gray-300">
          Well-versed in building scalable and clean web applications, with
          polished & friendly UI implementation.
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Collaborative Work</h3>
        <p className="text-gray-300">
          Skilled in working with others to achieve common goals, using
          effective communication and teamwork.
        </p>
      </div>

      {/* Critical Thinking Card */}
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
