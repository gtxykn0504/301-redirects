"use client"


export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-5">
      {/* ASCII Art Container */}
      <div className="bg-gray-100 rounded-lg p-4 mb-8 max-w-full overflow-x-auto shadow-sm">
        <pre className="font-mono text-xs leading-tight text-gray-800">
          {`.___                              __                               __   
|   | _____    _____   _____    _/  |_  ____ _____  ______   _____/  |_ 
|   | \\__  \\  /     \\  \\__  \\   \\   __\\/ __ \\\\__  \\ \\____ \\ /  _ \\   __\\
|   |  / __ \\|  Y Y  \\  / __ \\_  |  | \\  ___/ / __ \\|  |_> >  <_> )  |  
|___| (____  /__|_|  / (____  /  |__|  \\___  >____  /   __/ \\____/|__|  
           \\/      \\/       \\/             \\/     \\/|__|`}
        </pre>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-black mb-4">418 - I'm a teapot</h1>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-8 max-w-md">你请求了冲泡咖啡，但我只是一只茶壶，无法完成这个请求。</p>
      
    </div>
  )
}
