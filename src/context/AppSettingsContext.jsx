import { useContext, useState } from "react";
import { createContext } from "react";

export const AppSettings = createContext()

export default function AppSettingsProvider({ children }) {
    const avaiableLibraries = [
        { name: 'Tailwind CSS'},
        { name: 'React Bootstrap'},
        { name: 'Material UI'},
        { name: 'None'},
    ]
    const [selectedFolders, setSelectedFolders] = useState(["component", "pages", "hooks", "utils", "context", "assets"])
    const [appName, setAppName] = useState('')
    const [createFolders, setCreateFolders] = useState(true)
    const [comment, setComment] = useState({status: false, message: '', link: ''})
    const [reactRouter, setReactRouter] = useState(true)
    const [stylingLibrary, setStylingLibrary] = useState(avaiableLibraries[3])
    const [openComplain, setOpenComplain] = useState(false)
    return (
        <AppSettings.Provider value={{ avaiableLibraries, appName, setAppName, createFolders, setCreateFolders, reactRouter, setReactRouter, stylingLibrary, setStylingLibrary, comment, setComment, openComplain, setOpenComplain }}>
            {children}
        </AppSettings.Provider>
    )
}

