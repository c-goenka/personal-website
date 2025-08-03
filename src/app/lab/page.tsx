export default function LabPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Header - Minimal, Sharp Typography */}
        <div className="pt-24 pb-32">
          <div className="mb-12">
            <h1 className="text-8xl font-light text-black dark:text-white leading-none tracking-tight">
              lab
            </h1>
            <div className="w-16 h-1 bg-orange-500 mt-4"></div>
          </div>
          
          <div className="space-y-4 text-lg text-black dark:text-white">
            <p>creative experiments</p>
            <p>data visualizations</p>
            <p>interactive projects</p>
          </div>
        </div>

        {/* Content Grid - Ultra Minimal */}
        <div className="pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-12">
            
            {/* Project 01 - Research Networks */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-light text-black dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    research networks
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    interactive citation mapping and academic collaboration flows
                  </p>
                </div>
                <div className="text-gray-400 text-xs font-mono group-hover:text-orange-500 transition-colors duration-300">
                  01
                </div>
              </div>
              
              <div className="w-full aspect-[2/1] bg-gray-100 dark:bg-gray-900 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Project 02 - Digital Empathy */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-light text-black dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    digital empathy meter
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    exploring emotional computing through interactive interfaces
                  </p>
                </div>
                <div className="text-gray-400 text-xs font-mono group-hover:text-orange-500 transition-colors duration-300">
                  02
                </div>
              </div>
              
              <div className="w-full aspect-[2/1] bg-gray-100 dark:bg-gray-900 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Project 03 - Color Emotion Mapping */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-light text-black dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    color emotion mapping
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    interactive palettes that respond to psychological states
                  </p>
                </div>
                <div className="text-gray-400 text-xs font-mono group-hover:text-orange-500 transition-colors duration-300">
                  03
                </div>
              </div>
              
              <div className="w-full aspect-[2/1] bg-gray-100 dark:bg-gray-900 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Project 04 - Strava Activity Visualization */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-light text-black dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    movement landscapes
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    transforming strava data into generative terrain visualizations
                  </p>
                </div>
                <div className="text-gray-400 text-xs font-mono group-hover:text-orange-500 transition-colors duration-300">
                  04
                </div>
              </div>
              
              <div className="w-full aspect-[2/1] bg-gray-100 dark:bg-gray-900 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Project 05 - Dream Bedroom */}
            <div className="group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-light text-black dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                    dream bedroom navigator
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    3d interactive space filled with objects i love and dream about
                  </p>
                </div>
                <div className="text-gray-400 text-xs font-mono group-hover:text-orange-500 transition-colors duration-300">
                  05
                </div>
              </div>
              
              <div className="w-full aspect-[2/1] bg-gray-100 dark:bg-gray-900 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer - Minimal Status */}
        <div className="pb-24">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span>more experiments loading</span>
            </div>
            <div className="font-mono">2024</div>
          </div>
        </div>

      </div>
    </div>
  );
}