import "./App.css";
import Header from "./LandingHeader";
import Feature from "./Feature";
import Footer from "./Footer";

import Workflow from "./Workflow";
import { VideoSection } from "./sections/VideoList";

function App() {
  return (
    <div>
      <Header />
      <main className="overflow-hidden">
        <section className="relative">
          <div className="relative pt-24 lg:pt-28">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                <h1 className="neutral-content mt-8 text-wrap text-4xl font-semibold md:text-5xl">
                  Engage Next billion users of Ethereum <br /> in their
                  languages
                  <p className="dark:text-gray-300 mx-auto mt-8 hidden max-w-2xl text-wrap text-lg text-base-content sm:block">
                    A decentralised translation network with AI &amp; human
                    attestors
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4">
                    <a href="#subscribe-form">
                      <button className="btn btn-primary">
                        {" "}
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                        Get Updates
                      </button>
                    </a>
                    <button className="dark:*:disabled:!text-white dark:hover:bg-gray-500/15 dark:bg-gray-500/10 dark:text-gray-300 dark:active:bg-gray-500/10 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 [&amp;>*:not(.sr-only)]:relative group hidden h-9 items-center justify-center gap-1.5 rounded-[--btn-border-radius] bg-gray-100 px-3 text-base text-base-content *:select-none hover:bg-gray-200/75 active:bg-gray-100 disabled:border disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950 *:disabled:opacity-20">
                      <span className="text-sm">Learn more</span>
                      <svg
                        className="-mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="m19 12l12 12l-12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <Feature />
        <Workflow />
        <VideoSection />
        <section>
          <div className="pt-36">
            <div className="mx-auto max-w-6xl px-6 text-neutral">
              <div className="relative">
                <div className="relative z-10 grid grid-cols-6 gap-3">
                  <div className="dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] relative col-span-full overflow-hidden rounded-[--card-border-radius] border border-[--ui-light-border-color] bg-white p-[--card-padding] sm:col-span-3 lg:col-span-2">
                    <div>
                      <div className="flex content-center justify-center pt-6 lg:px-6">
                        <img
                          className="object-contain"
                          src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20height='100px'%20width='100px'%20version='1.1'%20id='Capa_1'%20viewBox='0%200%20502.648%20502.648'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cg%3e%3ccircle%20style='fill:%23010002;'%20cx='250.399'%20cy='91.549'%20r='58.694'/%3e%3cpath%20style='fill:%23010002;'%20d='M455.861,253.028l-54.703-11.411c-18.637-3.904-37.037,4.638-46.765,19.824%20c-9.448-4.853-19.608-9.038-30.415-12.511v-32.529c0.022-24.612-20.126-44.738-44.651-44.738h-55.933%20c-24.655,0-44.716,20.126-44.716,44.738v32.701c-10.699,3.408-20.751,7.593-30.264,12.468%20c-9.728-15.251-28.15-23.857-46.809-19.953l-54.747,11.411c-24.03,5.026-39.626,28.862-34.6,52.978l13.741,65.64%20c4.983,24.051,28.84,39.647,52.892,34.621l17.321-3.624c8.671,12.813,20.665,24.569,36.023,34.621%20c31.989,20.967,74.247,32.529,119.092,32.529c68.617,0,127.721-27.589,154.943-67.215l17.602,3.689%20c24.03,5.004,47.887-10.57,52.87-34.621l13.762-65.64C495.508,281.89,479.912,258.054,455.861,253.028z%20M251.305,447.381%20c-40.51,0-78.475-10.203-106.797-28.862c-9.707-6.342-17.753-13.395-24.202-20.945l13.266-2.783%20c24.073-5.004,39.669-28.84,34.643-52.913l-12.317-59.018c7.183-3.861,14.733-7.248,22.757-10.138v10.764%20c0,24.569,20.104,44.695,44.716,44.695h55.933c24.548,0,44.652-20.147,44.652-44.695v-11.325%20c8.175,2.912,15.854,6.256,22.973,10.052L334.439,341.9c-4.983,24.073,10.591,47.909,34.664,52.913l13.395,2.804%20C357.52,427.191,308.101,447.381,251.305,447.381z'/%3e%3ccircle%20style='fill:%23010002;'%20cx='443.954'%20cy='168.708'%20r='58.694'/%3e%3cpath%20style='fill:%23010002;'%20d='M70.736,226.172c31.752-6.644,52.029-37.77,45.471-69.501%20c-6.687-31.709-37.749-52.072-69.523-45.428c-31.709,6.622-52.072,37.727-45.428,69.458%20C7.879,212.453,38.984,232.795,70.736,226.172z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                          alt=""
                        />
                      </div>
                      <div className="relative z-10 mt-14 space-y-2 text-center">
                        <h2 className="dark:text-white text-lg font-medium transition group-hover:text-secondary-950">
                          Engage your community
                        </h2>
                        <p className="dark:text-gray-300">
                          Incentive contributions by social recognitions and
                          retroactive funding
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] relative col-span-full overflow-hidden rounded-[--card-border-radius] border border-[--ui-light-border-color] bg-white p-[--card-padding] sm:col-span-3 lg:col-span-2">
                    <div>
                      <div className="flex content-center justify-center pt-6 lg:px-6">
                        <img
                          className="object-contain"
                          src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100px'%20height='100px'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z'%20stroke='%23292D32'%20strokeWidth='1.5'%20strokeLinecap='round'%20stroke-line-join='round'/%3e%3cpath%20d='M7.99998%203H8.99998C7.04998%208.84%207.04998%2015.16%208.99998%2021H7.99998'%20stroke='%23292D32'%20strokeWidth='1.5'%20strokeLinecap='round'%20stroke-line-join='round'/%3e%3cpath%20d='M15%203C16.95%208.84%2016.95%2015.16%2015%2021'%20stroke='%23292D32'%20strokeWidth='1.5'%20strokeLinecap='round'%20stroke-line-join='round'/%3e%3cpath%20d='M3%2016V15C8.84%2016.95%2015.16%2016.95%2021%2015V16'%20stroke='%23292D32'%20strokeWidth='1.5'%20strokeLinecap='round'%20stroke-line-join='round'/%3e%3cpath%20d='M3%209.0001C8.84%207.0501%2015.16%207.0501%2021%209.0001'%20stroke='%23292D32'%20strokeWidth='1.5'%20strokeLinecap='round'%20stroke-line-join='round'/%3e%3c/svg%3e"
                          alt=""
                        />
                      </div>
                      <div className="relative z-10 mt-14 space-y-2 text-center">
                        <h2 className="t dark:text-white text-lg font-medium transition group-hover:text-secondary-950">
                          Grow internationally
                        </h2>
                        <p className="dark:text-gray-300 ">
                          Time for engaging the non-english speaking world.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] relative col-span-full overflow-hidden rounded-[--card-border-radius] border border-[--ui-light-border-color] bg-white p-[--card-padding] sm:col-span-3 lg:col-span-2">
                    <div>
                      <div className="flex content-center justify-center pt-6 lg:px-6">
                        <img
                          className="object-contain"
                          src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='100px'%20height='100px'%20viewBox='0%20-2.5%2021%2021'%20version='1.1'%3e%3ctitle%3elove%20[%231489]%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20strokeWidth='1'%20fill='none'%20fillRule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-99.000000,%20-362.000000)'%20fill='%23000000'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M55.5929644,215.348992%20C55.0175653,215.814817%2054.2783665,216.071721%2053.5108177,216.071721%20C52.7443189,216.071721%2052.0030201,215.815817%2051.4045211,215.334997%20C47.6308271,212.307129%2045.2284309,210.70073%2045.1034811,207.405962%20C44.9722313,203.919267%2048.9832249,202.644743%2051.442321,205.509672%20C51.9400202,206.088455%2052.687619,206.420331%2053.4940177,206.420331%20C54.3077664,206.420331%2055.0606152,206.084457%2055.5593644,205.498676%20C57.9649106,202.67973%2062.083004,203.880281%2061.8950543,207.507924%20C61.7270546,210.734717%2059.2322586,212.401094%2055.5929644,215.348992%20M53.9066671,204.31012%20C53.8037672,204.431075%2053.6483675,204.492052%2053.4940177,204.492052%20C53.342818,204.492052%2053.1926682,204.433074%2053.0918684,204.316118%20C49.3717243,199.982739%2042.8029348,202.140932%2043.0045345,207.472937%20C43.1651842,211.71635%2046.3235792,213.819564%2050.0426732,216.803448%20C51.0370217,217.601149%2052.2739197,218%2053.5108177,218%20C54.7508657,218%2055.9898637,217.59915%2056.9821122,216.795451%20C60.6602563,213.815565%2063.7787513,211.726346%2063.991901,207.59889%20C64.2754005,202.147929%2057.6173611,199.958748%2053.9066671,204.31012'%20id='love-[%231489]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                          alt=""
                        />
                      </div>
                      <div className="relative z-10 mt-14 space-y-2 text-center">
                        <h2 className="dark:text-white text-lg font-medium transition group-hover:text-secondary-950">
                          Public Goods
                        </h2>
                        <p className="dark:text-gray-300">
                          Translation are done on a credibility netural protocol
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="pb-36 pt-36">
            <div className="mx-auto max-w-6xl px-6 text-gray-500">
              <div className="text-center">
                <h2 className="text-content dark:text-white text-3xl font-semibold">
                  Trusted By the Community
                </h2>
              </div>
              <div className="mx-auto mt-12 flex max-w-lg flex-wrap justify-center gap-3">
                <a
                  href="https://attest.org/"
                  target="_blank"
                  title="Ethereum Attestation Service"
                  rel="noreferrer"
                >
                  <img
                    alt="John Doe"
                    src="https://substack-post-media.s3.amazonaws.com/public/images/dd91647e-568a-4472-8b00-bff1ea5cb20a_1662x704.png"
                    loading="lazy"
                    width="360"
                    height="360"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="subscribe-form">
          <iframe
            src="https://embeds.beehiiv.com/ad663234-5ca1-486c-8b15-6e4137294c18"
            data-test-id="beehiiv-embed"
            width="100%"
            height="320"
            frameBorder="0"
            scrolling="no"
            style={{
              borderRadius: "4px",
              border: "2px solid #e5e7eb",
              margin: 0,
              backgroundColor: "transparent",
            }}
            title="beehiiv-embded"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
