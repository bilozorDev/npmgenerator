import { Switch } from '@headlessui/react'
import React, { useContext } from 'react'
import { AppSettings } from '../../context/AppSettingsContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const RouterSelection = () => {

    const {  reactRouter, setReactRouter } = useContext(AppSettings)

  return (
   <>
   <Switch.Group as="div" className="flex items-center justify-between">
                <span className="flex-grow flex flex-col">
                    <Switch.Label as="span" className="text-sm font-medium " passive>
                        Include React Router
                    </Switch.Label>

                </span>
                <Switch
                    checked={reactRouter}
                    onChange={setReactRouter}
                    className={classNames(
                        reactRouter ? 'bg-orange-400' : 'bg-gray-500',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                    )}
                >
                    <span
                        aria-hidden="true"
                        className={classNames(
                            reactRouter ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </Switch.Group>
   </>
  )
}

export default RouterSelection