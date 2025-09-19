import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const stylingButton = "text-amber-50 hover:text-blue-200";

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col gap-1">
      <header className="absolute inset-x-0 top-0 z-1 border-b border-gray-900">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <img className="h-8 w-auto" src="/IZ_Logo.svg" alt="logo" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            <button className={stylingButton} onClick={() => navigate("/")}>
              Home
            </button>
            <button
              className={stylingButton}
              onClick={() => navigate("/about")}
            >
              About
            </button>
            <button
              className={stylingButton}
              onClick={() => navigate("/skills")}
            >
              Skills
            </button>
            <button
              className={stylingButton}
              onClick={() => navigate("/projects")}
            >
              Projects
            </button>
            <button
              className={stylingButton}
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="text-sm font-semibold leading-6 text-white">
              <img
                src="/sun-color-icon.svg"
                alt="Light Mode"
                className="inline-block h-5 w-5"
              />
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <img className="h-8 w-auto" src="/IZ_Logo.svg" alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-4 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6 flex flex-col gap-8">
                    <button className={stylingButton}>Home</button>
                    <button className={stylingButton}>About</button>
                    <button className={stylingButton}>Skills</button>
                    <button className={stylingButton}>Projects</button>
                    <button className={stylingButton}>Contact</button>
                  </div>
                  <div className="py-6">
                    <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                      <img
                        src="/sun-color-icon.svg"
                        alt="Logo"
                        className="inline-block h-5 w-5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
