import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gray-900 h-full">
      <div className="relative isolate overflow-hidden min-h-full">
        <div className="mx-auto py-31 sm:py-48 lg:py-56  max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hi, I'm <span className="text-indigo-400">Ibrahim Zaidi</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A fullstack web deveoper, figuring out robust solutions to
            sophisticated problems.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/path-to-your-cv.pdf"
              download
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Download CV
            </a>
            <Link
              to="/contact"
              className="text-sm font-semibold leading-6 text-white"
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
