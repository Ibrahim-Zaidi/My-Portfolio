function About() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-full bg-gray-900 text-white p-5 md:p-20 gap-17 ">
      <div
        className="flex flex-col gap-10                       transform transition-all duration-1000 ease-in-out
                      translate-y-0 opacity-100
                      animate-[slideInFromBottom_1s_ease-out]"
      >
        <h1 className="animate-[fadeIn_1.5s_ease-out_0.5s_both]  ">
          A dim ... about me
        </h1>
        <p className="animate-[slideInFromLeft_1s_ease-out_0.8s_both]">
          I go by Zaidi Ibrahim Younes, a third year computer science student at
          the university of Algiers. I am a fullstack web developer with a keen
          interest in building web applications that are not only functional but
          also user-friendly and visually appealing.
        </p>
      </div>
      <div className="animate-[slideInFromRight_1s_ease-out_1.2s_both]">
        <h1>My experience</h1>
        <div>
          2022 - present: Computer Science Student at the University of Algiers
        </div>
        <div>2023 - present: Freelance Fullstack Web Developer</div>
      </div>
    </div>
  );
}

export default About;
