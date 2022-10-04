import { useContext } from "react"
import { AppSettings } from "../context/AppSettingsContext"

export default function HeroSection() {
    const { openComplain, setOpenComplain } = useContext(AppSettings)
  return (
    <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl md:text-6xl">
              <p className="block  xl:inline">Spending 30 minutes to setup</p><br/>
              <p className="text-orange-600 uppercase xl:inline">basic react app ?</p>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-200 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Try this NPM command generator for <a href="https://create-react-app.dev/" target="_blank" className="text-blue-300">Create-react-app</a>
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent font-bold bg-orange-500 px-4 py-3 text-base font-small text-white hover:bg-orange-600 "
                  onClick={()=>{setOpenComplain(!openComplain)}}
                >
                  Leave feedback
                </button>
              </div>
          </div>
          </div>
        </main>
  )
}
