import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 sm:text-7xl">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-8 sm:text-2xl">
            Choose your preferred viewing experience
          </p>
        </div>

        {/* Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 3D Version Card */}
          <Link
            to="/home-3d"
            className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-center">
              {/* 3D Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">
                3D Experience
              </h2>
              <p className="text-gray-300 mb-6">
                Interactive 3D model that rotates as you scroll. 
                Immersive and engaging experience.
              </p>
              
              <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span className="mr-2">Explore 3D</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>

          {/* Normal Version Card */}
          <Link
            to="/home"
            className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-center">
              {/* Normal Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">
                Classic View
              </h2>
              <p className="text-gray-300 mb-6">
                Traditional portfolio layout with projects, 
                about section, and contact information.
              </p>
              
              <div className="inline-flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                <span className="mr-2">View Portfolio</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="text-center text-gray-400">
          <p className="text-sm">
            Built with React, Three.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
};

export default Landing;
