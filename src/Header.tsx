export default function Header() {
  return (
    <header>
      <nav className="fixed overflow-hidden z-20 w-full  dark:shadow-md rounded-b-lg  backdrop-blur-2xl">
        <div className="px-6 m-auto max-w-6xl 2xl:px-0">
          <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
            <div className="w-full items-center flex justify-between lg:w-auto">
              <a href="/" aria-label="logo">
                Ethereum Localization Service
              </a>
              <div className="flex lg:hidden">
                <button
                  aria-label="humburger"
                  id="menu"
                  className="relative border size-9 rounded-full transition duration-300 active:scale-95"
                >
                  <div
                    aria-hidden="true"
                    id="line1"
                    className="m-auto h-[1.5px] w-4 rounded transition duration-300 dark:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-1.5 h-[1.5px] w-4 rounded transition duration-300 dark:bg-gray-300"
                  ></div>
                </button>
              </div>
            </div>
            <div className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
              <div className="mt-6 md:-ml-4 lg:pr-4 lg:mt-0">
                <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
                  <li>
                    <a
                      href="#how-it-works"
                      className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <span>Product</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subscribe-form"
                      className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <span>Follow us</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/portal"
                      className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
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
