import Link from "next/link";

export type ViewMode = "landscape" | "list";

interface DemoHeaderProps {
  currentView?: ViewMode;
  onViewChange?: (view: ViewMode) => void;
}

export function DemoHeader({
  currentView = "landscape",
  onViewChange,
}: DemoHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Platform Tooling Landscape
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Build your own platform tooling landscape with React and Tailwind
            CSS
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Present tools composing your Internal Developer Platform by
            category, search by functionality, name or description.
          </p>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="https://github.com/Gravitek-io/react-tooling-landscape.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </Link>
            <Link
              href="https://platformengineering.org/platform-tooling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* View Toggle */}
          {onViewChange && (
            <div className="">
              <div className="inline-flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => onViewChange("landscape")}
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentView === "landscape"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V10.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v8.25m-6.75 0V4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v14.25m2.25-14.25h5.25c.621 0 1.125.504 1.125 1.125v4.5m-5.25-4.5h3.75c.621 0 1.125.504 1.125 1.125v2.25m-3.75-2.25h1.5c.621 0 1.125.504 1.125 1.125v1.125M12 18.75h7.5m-7.5 0a1.125 1.125 0 0 1-1.125-1.125m7.5 0a1.125 1.125 0 0 0 1.125-1.125M12 18.75V4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v13.875"
                    />
                  </svg>
                  Landscape
                </button>
                <button
                  onClick={() => onViewChange("list")}
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentView === "list"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  List
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
