import React, { useContext, useEffect, useRef, useState } from 'react'
import { DiReact } from 'react-icons/di'
import { AppSettings } from '../../context/AppSettingsContext'
import { XCircleIcon } from '@heroicons/react/solid'



const AppName = () => {
    const { appName, setAppName } = useContext(AppSettings)
    const [error, setError] = useState({
        active: false,
        style: '',
        message: ''
    })

    // useRef to test if it's the first render
    const firstRender = useRef(true)


    const appNameValidation = () => {
        const regExExpr = /^[a-zA-Z 0-9\.\-\_]*$/

        if (appName.includes(' ') || !regExExpr.test(appName)) {
            console.log('error')
            setError({ active: true, style: 'error', message: 'Remove invalid characters (no space, or special characters allowed) ' })

        }

        else {
            setError({ active: false, style: '', message: '' })
        }


    }

    const fixIssues = () => {
        setAppName(appName.replace(/[&\/\\#,+()$~%'":*?<>{}" "]/g, '-'));

    }
    useEffect(() => {

        // check if it first render, dont run validation
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        appNameValidation()


    }, [appName])
    return (
        <>

            <label htmlFor="email" className="block text-sm font-medium  ">
                App name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DiReact className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    name="name"
                    id="text"
                    autoFocus 
                    className="focus:ring-orange-500 focus:border-orange-400 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Your app name"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value.toLowerCase())}
                />
            </div>
            {error.active &&
                <div className="rounded-md bg-red-50 p-4 mt-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Please fix some errors</h3>
                            <div className="mt-2 text-sm text-red-700">
                                <ul  className="list-disc pl-5 space-y-3">
                                    <li>{error.message}</li>
                                    <li>or <button
                                type="button"
                                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                onClick={fixIssues}
                            >
                                Fix for me
                            </button></li>

                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AppName