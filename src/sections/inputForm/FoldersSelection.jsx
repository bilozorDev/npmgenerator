import React, { useContext } from 'react'
import { Switch } from '@headlessui/react'
import { AppSettings } from '../../context/AppSettingsContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const FoldersSelection = () => {
    const { createFolders, setCreateFolders } = useContext(AppSettings)
   

   

    return (
        <>

            <Switch.Group as="div" className="flex items-center justify-between ">
                <span className="flex-grow flex flex-col">
                    <Switch.Label as="span" className="text-sm font-medium " passive>
                        Create Project folders
                    </Switch.Label>
                    <p className='text-sm text-gray-500'>Create components, pages, hooks, utils, context, assests</p>
                </span>

                <Switch
                    checked={createFolders}
                    onChange={() => setCreateFolders(!createFolders)}
                    className={classNames(
                        createFolders ? 'bg-orange-400' : 'bg-gray-500',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                    )}
                >
                    <span
                        aria-hidden="true"
                        className={classNames(
                            createFolders ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        )}
                    />
                </Switch>
            </Switch.Group>


{/* 
            <fieldset className="space-y-5">
                <legend className="sr-only">Folders Selection</legend>
                <div className={status ? 'grid grid-cols-2 gap-2' : 'grid grid-cols-2 gap-2 blur-sm'} >
                    {
                        selectedFolders.map((folder, index) => {
                            
                            return (    
                                <div className="relative flex items-start" key={index}>
                                    <div className="flex items-center h-5">
                                        <input
                                            id={folder}
                                         
                                            name={folder}
                                            type="checkbox"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            disabled={status ? false : true}
                                          
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor={folder} className="font-medium text-gray-700">
                                            {folder} 
                                        </label>

                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                <p className='text-slate-600 text-sm hover:cursor-pointer' onClick={() => setCreateFolders({ ...createFolders, customFolder: true })}>+ add custom folder</p>





            </fieldset>
*/}

        </>

    )
}

export default FoldersSelection