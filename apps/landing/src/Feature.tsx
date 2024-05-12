import feature from "./feature.png";
import chrome from "./chrome.png";

export default function Feature() {
  return (
    <section>
      <section>
        <div className="py-16">
          <div className="mx-auto max-w-6xl px-6 text-gray-500">
            <div className="relative">
              <div className="relative z-10 grid grid-cols-6 gap-3">
                <div className="dark:border-gray-800 dark:bg-gray-900 relative col-span-full flex overflow-hidden rounded-xl border border-gray-200 bg-white p-8 lg:col-span-2">
                  <div className="relative m-auto flex size-fit flex-col items-center">
                    <div className="relative flex h-24 w-56 items-center">
                      <svg
                        className="dark:text-gray-600 absolute inset-0 size-full text-gray-400"
                        viewBox="0 0 254 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      ></svg>
                      <span className="dark:from-blue-400 dark:to-pink-400 mx-auto block w-fit bg-gradient-to-br from-blue-300 to-pink-600 bg-clip-text text-5xl font-semibold text-transparent">
                        AI
                      </span>
                    </div>
                    <h2 className="dark:text-white mt-6 text-center text-3xl font-semibold text-gray-950">
                      powered workflows
                    </h2>
                  </div>
                </div>

                <div className="dark:border-gray-800 dark:bg-gray-900 relative col-span-full flex flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-8 sm:col-span-3 lg:col-span-2">
                  <div className="">
                    <div className="dark:bg-white/5 dark:border-white/10 dark:before:border-white/5 dark:before:bg-white/5 relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                      <svg
                        className="m-auto h-fit w-24"
                        viewBox="0 0 212 143"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="dark:text-gray-600 text-gray-400"
                          d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z"
                          fill="currentColor"
                        ></path>
                        <g clipPath="url(#clip0_0_1)">
                          <path
                            d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z"
                            fill="url(#paint0_linear_0_1)"
                          ></path>
                        </g>
                        <path
                          className="dark:text-blue-500 text-blue-600"
                          d="M3 72H209"
                          stroke="currentColor"
                          strokeWidth="6"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="relative z-10 mt-6 space-y-2 text-center">
                      <h2 className="dark:text-white text-lg font-medium transition group-hover:text-purple-950">
                        Attested by human
                      </h2>
                      <p className="dark:text-gray-300 ">
                        Community members provide attestations on translations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dark:border-gray-800 dark:bg-gray-900 relative col-span-full overflow-hidden rounded-xl border border-gray-200 bg-white p-8 sm:col-span-3 lg:col-span-2">
                  <div>
                    <div className="pt-6 lg:px-6">
                      <div className="relative mt-6 overflow-hidden">
                        <img src={chrome} alt={"chrome"}></img>
                      </div>
                    </div>
                    <div className="relative z-10 m-2 space-y-2 text-center">
                      <h2 className="dark:text-white text-lg font-medium text-gray-800 transition group-hover:text-purple-950">
                        Chrome extension
                      </h2>
                      <p className="dark:text-gray-300 text-gray-700">
                        Support youtube video translation via chrome extension
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dark:border-gray-800 dark:bg-gray-900 relative col-span-full overflow-hidden rounded-xl border border-gray-200 bg-white p-8 lg:col-span-3">
                  <div className="grid sm:grid-cols-2">
                    <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                      <div className="dark:bg-white/5 dark:border-white/10 dark:before:border-white/5 dark:before:bg-white/5 relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                        <svg
                          className="m-auto size-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            d="M5.5 7c2 0 6.5-3 6.5-3s4.5 3 6.5 3v4.5C18.5 18 12 20 12 20s-6.5-2-6.5-8.5z"
                          ></path>
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h2 className="dark:text-white text-lg font-medium text-gray-800 transition group-hover:text-purple-950">
                          Crowdfund your localization work
                        </h2>
                        <p className="dark:text-gray-300 text-gray-700">
                          Create campaign to call for contributions on your
                          translation project
                        </p>
                      </div>
                    </div>
                    <div className="dark:bg-white/5 dark:border-white/10 relative -mb-[34px] -mr-[34px] mt-6 h-fit overflow-hidden rounded-tl-lg border p-6 py-6 sm:ml-6 sm:mt-auto">
                      <div className="absolute left-3 top-2 flex gap-1">
                        <span className="dark:border-white/10 dark:bg-white/10 block size-2 rounded-full border"></span>
                        <span className="dark:border-white/10 dark:bg-white/10 block size-2 rounded-full border"></span>
                        <span className="dark:border-white/10 dark:bg-white/10 block size-2 rounded-full border"></span>
                      </div>
                      <img src={feature} alt={"feature"}></img>
                    </div>
                  </div>
                </div>
                <div className="dark:border-gray-800 dark:bg-gray-900 relative col-span-full overflow-hidden rounded-xl border border-gray-200 bg-white p-8 lg:col-span-3">
                  <div className="grid h-full sm:grid-cols-2">
                    <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                      <div className="dark:bg-white/5 dark:border-white/10 dark:before:border-white/5 dark:before:bg-white/5 relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                        <svg
                          className="m-auto size-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path
                              stroke="currentColor"
                              d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"
                            ></path>
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h2 className="dark:text-white text-lg font-medium text-gray-800 transition group-hover:text-purple-950">
                          Social reputations
                        </h2>
                        <p className="dark:text-gray-300 text-gray-700">
                          Contributions are tracked with profile by Gitcoin
                          Passport. Reputation can be derived from attested
                          translations graph
                        </p>
                      </div>
                    </div>
                    <div className="dark:before:bg-gray-800 relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px before:bg-gray-200 sm:-my-8 sm:-mr-[--card-padding]">
                      <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                          <span className="dark:bg-gray-800 dark:border-white/5 dark:text-white block h-fit rounded-md border px-2 py-1 text-xs shadow-sm">
                            Ryan
                          </span>
                          <div className="dark:ring-[--card-dark-bg] size-7 ring-4 ring-white">
                            <img
                              className="dark:border-white/5  size-full rounded-full border border-gray-950/5"
                              src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                          <div className="dark:ring-[--card-dark-bg] size-8 ring-4 ring-white">
                            <img
                              className="dark:border-white/5  size-full rounded-full border border-gray-950/5"
                              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg"
                              alt=""
                            />
                          </div>
                          <span className="dark:bg-gray-800 dark:border-white/5 dark:text-white block h-fit rounded-md border px-2 py-1 text-xs shadow-sm">
                            Masada
                          </span>
                        </div>
                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                          <span className="dark:bg-gray-800 dark:border-white/5 dark:text-white block h-fit rounded-md border px-2 py-1 text-xs shadow-sm">
                            B. Chen
                          </span>
                          <div className="dark:ring-[--card-dark-bg] size-7 ring-4 ring-white">
                            <img
                              className="dark:border-white/5  size-full rounded-full border border-gray-950/5"
                              src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
