import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gray-900 h-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-gray-900/50 to-purple-500/0"></div>

      <div className="relative isolate min-h-full flex items-center justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center py-24 sm:py-40 lg:py-50">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl animate-[fadeIn_1s_ease-out]">
            Hi, I'm
            <span className=" ml-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Ibrahim Zaidi
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl animate-[fadeIn_1.2s_ease-out_0.3s_both]">
            Third Year Computer Systems Student and a fullstack web developer,
            figuring out robust solutions to sophisticated problems.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-[slideInFromBottom_1.2s_ease-out_0.5s_both]">
            <a
              href="/ibrahimzaidicv.pdf"
              download
              className="group relative rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/0"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0  transition-opacity duration-200 blur"></div>
            </a>

            <Link
              to="/contact"
              className="rounded-lg border-2 border-indigo-500/50 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
