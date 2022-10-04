import React, { useContext} from 'react'
import { AppSettings } from '../../context/AppSettingsContext'

const SelectStylingLibrary = () => {
    const { stylingLibrary, setStylingLibrary, avaiableLibraries } = useContext(AppSettings)
    
  return (
    <>
     
      <label className="text-base font-medium text-gray-900">Styling</label>
      <p className="text-sm leading-5 text-gray-500">Which styling library you prefer?</p>
      <fieldset className="mt-4" >
        
        <div className="space-y-4">
          {avaiableLibraries.map((library, index) => (
            

            <div key={index} className="flex items-center">
              <input
                id={index}
                name="notification-method"
                type="radio"
                defaultChecked={library.name === 'None'}
                className="h-4 w-4 border-gray-300 text-orange-400 focus:ring-orange-400"
                onClick={()=>{setStylingLibrary(avaiableLibraries[index])}}
              />
              <label htmlFor={index} className="ml-3 block text-sm font-medium text-gray-700">
                {library.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    
    </>
  )
}

export default SelectStylingLibrary