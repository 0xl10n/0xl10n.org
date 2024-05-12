import LogoBrand from "./LogoBrand";

export default function LandingHeader() {
  return (
    <header>
      <nav className="dark:shadow-md fixed z-20 w-full  overflow-hidden rounded-b-lg  backdrop-blur-2xl">
        <div className="m-auto max-w-6xl px-6 2xl:px-0">
          <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <LogoBrand />
              <div className="flex lg:hidden">
                <button
                  aria-label="humburger"
                  id="menu"
                  className="relative size-9 rounded-full border transition duration-300 active:scale-95"
                >
                  <div
                    aria-hidden="true"
                    id="line1"
                    className="dark:bg-gray-300 m-auto h-[1.5px] w-4 rounded transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="dark:bg-gray-300 m-auto mt-1.5 h-[1.5px] w-4 rounded transition duration-300"
                  ></div>
                </button>
              </div>
            </div>
            <div className="h-0 w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:flex lg:h-fit lg:w-fit lg:space-y-0">
              <div className="mt-6 md:-ml-4 lg:mt-0 lg:pr-4">
                <ul className="space-y-6 text-base tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                  {/* <li>
                    <a
                      href="#how-it-works"
                      className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <span>Product</span>
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="#subscribe-form"
                      className="dark:hover:text-primary-400 block transition hover:text-primary-600 md:px-4"
                    >
                      <span>Follow us</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/portal/translate"
                      className="dark:hover:text-primary-400 block transition hover:text-primary-600 md:px-4"
                    >
                      <span>Portal</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
