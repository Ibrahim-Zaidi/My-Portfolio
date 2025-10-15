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

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <span className="text-indigo-300 font-medium md:w-32">
                2022 - present
              </span>
              <span className="text-gray-300">
                Computer Science Student at the University of Algiers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
