export default function Skills() {
    return (
      <div className="bg-black w-full py-12 px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-8">Skills</h2>
  
        <div className="mt-8 p-6 bg-gray-900 border-2 border-[var(--color)] rounded-lg flex flex-col gap-6">
          {/* HTML Skill */}
          <div className="space-y-2">
            <div className="text-white font-medium text-lg">HTML</div>
            <div className="h-2 w-full bg-white rounded-lg relative">
              <div
                className="h-full w-[95%] bg-purple-500 rounded-lg transition-all"
                title="95%"
              ></div>
            </div>
          </div>
  
          {/* CSS Skill */}
          <div className="space-y-2">
            <div className="text-white font-medium text-lg">CSS</div>
            <div className="h-2 w-full bg-white rounded-lg relative">
              <div
                className="h-full w-full bg-yellow-500 rounded-lg transition-all"
                title="100%"
              ></div>
            </div>
          </div>
  
          {/* TypeScript Skill */}
          <div className="space-y-2">
            <div className="text-white font-medium text-lg">TypeScript</div>
            <div className="h-2 w-full bg-white rounded-lg relative">
              <div
                className="h-full w-[80%] bg-sky-500 rounded-lg transition-all"
                title="80%"
              ></div>
            </div>
          </div>
  
          {/* Next.js Skill */}
          <div className="space-y-2">
            <div className="text-white font-medium text-lg">Next.js</div>
            <div className="h-2 w-full bg-white rounded-lg relative">
              <div
                className="h-full w-[50%] bg-blue-800 rounded-lg transition-all"
                title="50%"
              ></div>
            </div>
          </div>
  
          {/* MySQL Skill */}
          <div className="space-y-2">
            <div className="text-white font-medium text-lg">MySQL</div>
            <div className="h-2 w-full bg-white rounded-lg relative">
              <div
                className="h-full w-[70%] bg-red-500 rounded-lg transition-all"
                title="70%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  