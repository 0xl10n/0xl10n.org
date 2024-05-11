export default function Footer() {
  return (

    <footer className="rounded-xl border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
      <div className="max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8 border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
          <a href="/" aria-label="logo">
            © 2024 Ethereum Localization Service
          </a>
          <div className="flex gap-3">
            <a
              href="https://twitter.com/0xl10n"
              target="blank"
              aria-label="twitter"
              className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
            >
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                ></path>
              </svg>
            </a>
            <a
              href="https://t.me/+jh97fLVbCSkwMTE1"
              target="blank"
              aria-label="medium"
              className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
            >
              <svg
                className="size-5"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                    fill="currentColor"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


// <footer className="footer p-10 bg-neutral text-neutral-content">
//   <nav>
//       <h6 className="footer-title">Company</h6>
//       <a className="link link-hover">About us</a>
//       <a className="link link-hover">Contact</a>
//       {/* <a className="link link-hover">Jobs</a> */}
//       <a className="link link-hover">Press kit</a>
//   </nav>
//   <nav>
//       <h6 className="footer-title">Legal</h6>
//       <a className="link link-hover">Terms of use</a>
//       <a className="link link-hover">Privacy policy</a>
//       {/* <a className="link link-hover">Cookie policy</a> */}
//   </nav>
// </footer>