import React, { useContext, useEffect } from 'react'
import { AppSettings } from '../context/AppSettingsContext'
import {FaInfoCircle } from 'react-icons/fa'
const Output = () => {

    const { appName, createFolders, reactRouter, stylingLibrary, comment, setComment } = useContext(AppSettings)

    const displaySelectedLibrary = () => {
        const {name} = stylingLibrary;
        if (name === 'None'){
            return null
        }if(name === 'Tailwind CSS'){
           
            return (
                ' && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p'
            )
        }if(name === 'React Bootstrap'){
           
            return (
                ' && npm install react-bootstrap bootstrap'
            )
        }if(name === 'Material UI'){
           
            return (
                ' && npm install @mui/material @emotion/react @emotion/styled'
            )
        }
        
    }

    const updateComment= ()=>{
        const {name} = stylingLibrary;
        if(name === 'Tailwind CSS'){
           setComment({status: true, message:'Please follow steps 3 and 4 from official website to finish setup', link: 'https://tailwindcss.com/docs/guides/create-react-app'})
        }
        if(name === 'React Bootstrap'){
            setComment({status: true, message:'Please add bootstrap css import to your project import ', link: 'https://react-bootstrap.github.io/getting-started/introduction/#css'})
         }
         if(name === 'Material UI'){
            setComment('')
         }if (name === 'None'){
            setComment({...comment, status: false})
         }
    }


    useEffect(() => {
        displaySelectedLibrary()
        updateComment()
    }, [stylingLibrary])


    if (!appName) {
        return (
            'Please name your app first'
        )
    }
    return (
        <>

            <div className='bg-gray-200'>

                npx create-react-app {appName} && cd {appName}
                
                {createFolders ? ' && mkdir src/components src/pages src/hooks src/utils src/assets src/context' : null }
                {reactRouter ? ' && npm install react-router-dom@6' : null}
                {displaySelectedLibrary()}
                {` `}&& code . && npm run start

            </div>
           {comment.status && 

           <div className="rounded-md bg-yellow-50 p-4 mt-16">
           <div className="flex">
             <div className="flex-shrink-0">
               <FaInfoCircle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
             </div>
             <div className="ml-3">
               <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
               <div className="mt-2 text-sm text-yellow-700">
                 <p>
                   {comment.message}
                 </p>
                 <a href={comment.link} target="_blank" className='text-blue-700 text-lg'>{stylingLibrary.name} Documentation</a>
               </div>
             </div>
           </div>
         </div>
           
           }
        </>

    )
}

export default Output