import { RadioGroup, Switch } from '@headlessui/react'
import React, { useState } from 'react'
import { useContext } from 'react'

import { AppSettings } from '../context/AppSettingsContext'
import AppName from '../sections/inputForm/AppName'
import FoldersSelection from '../sections/inputForm/FoldersSelection'
import RouterSelection from '../sections/inputForm/RouterSelection'
import SelectStylingLibrary from '../sections/inputForm/SelectStylingLibrary'
import CustomNpmPackage from '../sections/inputForm/CustomNpmPackage'

const InputForm = () => {
    const { appName, setAppName, createFolders, setCreateFolders, reactRouter, setReactRouter, stylingLibrary, setStylingLibrary, avaiableLibraries } = useContext(AppSettings)



   
    return (
        <div className='text-gray-800'>
            {/* Input for App Name */}
            <AppName/>
        <hr className='my-6'/>

            {/* Create Folder Structure */}
            <FoldersSelection/>

            <hr className='my-6'/>

            {/* Select Styiling Library */}
            <RouterSelection/>

            <hr className='my-6'/>

            {/* Select Styiling Library */}
            <SelectStylingLibrary/>

            <hr className='my-6'/>
            {/* Add Custom NPM Packages 
            <CustomNpmPackage/>
            */}
        </div>
    )
}

export default InputForm