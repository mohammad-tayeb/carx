import AnimateOnScrollSSR from "../../../components/AnimateOnScrollSSR";

// app/about/page.jsx
export default function AboutPage() {
  return (
    <div>
      <AnimateOnScrollSSR>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(/team.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Meet Our Team</h1>
              <p className="mb-5">
                Our dedicated professionals are passionate about delivering top-notch car repair services. Get to know the experts who keep you moving.
              </p>
              <button className="btn bg-[#41bce8] text-white border-none hover:bg-[#41bbe8e8]">View Team Members</button>
            </div>
          </div>
        </div>
      </AnimateOnScrollSSR>

      <AnimateOnScrollSSR>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Our Team
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern id="dots" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#dots)" width="52" height="24" />
                </svg>
                <span className="relative">Meet</span>
              </span>{' '}
              our expert car rental and sales team
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Providing the best car buying and rental experience with a dedicated and
              passionate team ready to assist you at every turn.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">James Carter</p>
                <p className="mb-4 text-xs text-gray-100">Fleet Manager</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Oversees our entire rental fleet ensuring vehicle quality and safety.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">Linda Reynolds</p>
                <p className="mb-4 text-xs text-gray-100">Sales Lead</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Expert in helping customers find the perfect car to purchase.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">Michael Zhou</p>
                <p className="mb-4 text-xs text-gray-100">Customer Support</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Ensures customers are satisfied and queries are resolved quickly.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">Angela Brooks</p>
                <p className="mb-4 text-xs text-gray-100">Mechanic & Maintenance</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Keeps all vehicles in top condition for rentals and test drives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScrollSSR>

      <AnimateOnScrollSSR>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Our Expert Mechanics
            </p>
            <p className="text-base text-gray-700 md:text-lg">
              Meet the professionals who keep your vehicle running smoothly with expert repairs and diagnostics.
            </p>
          </div>
          <div className="grid gap-10 mx-auto grid-cols-3 md:grid-cols-4 px-5">
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                src="/1.jpg"
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Jack Thompson</p>
                <p className="text-sm text-gray-800">Lead Mechanic</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                src="/8.jpeg"
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Marin Lopez</p>
                <p className="text-sm text-gray-800">Engine Specialist</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                src="/2.jpeg"
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Steve Ramirez</p>
                <p className="text-sm text-gray-800">Electrical Technician</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                src="/3.jpg"
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Liz Morgan</p>
                <p className="text-sm text-gray-800">Customer Advisor</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                src="/4.jpg"
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Chris Walker</p>
                <p className="text-sm text-gray-800">Brake Specialist</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                src="/5.jpg"
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Daniel Reed</p>
                <p className="text-sm text-gray-800">Transmission Expert</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                src="/6.jpeg"
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Samantha Ray</p>
                <p className="text-sm text-gray-800">Bodywork Specialist</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow"
                src="/7.jpeg"
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold">Ben Carter</p>
                <p className="text-sm text-gray-800">Diagnostics Technician</p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScrollSSR>
    </div>
  )
}
