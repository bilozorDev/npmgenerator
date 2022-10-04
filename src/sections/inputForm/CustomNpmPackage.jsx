import { useEffect, useState } from 'react'
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import axios from 'axios'


const people = [
  { name: 'Leslie Alexander', username: '@lesliealexander' },
  // More users...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CustomNpmPackage() {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState()
  const [filteredPackages, setFilteredPackages] = useState([])


  const getData=()=>{
    axios.get('https://api.npms.io/v2/search', {
    params: {
      q: query,
      size: '5'
    }
  })
  .then(function (response) {
    setFilteredPackages(response.data.results);
    console.log(filteredPackages)
    filteredPackages.map((pckg)=>{
    
        (console.log(pckg.package.name))
       })
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
   
  });  
  }

  useEffect(()=>{
    getData()
  },[query])

  

  return (
    <>
   
   <div>
      <label htmlFor="text" className="sr-only">
        Email
      </label>
      <input
        type="text"
        name="text"
        id="text"
        value={query}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="you@example.com"
        onChange={(e)=>setQuery(e.target.value)}
      />
    </div>
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {filteredPackages.map((pckg) => (
          <li >
           {pckg.package.name}
          </li>
        ))}
      </ul>
    </div>
        </>
  )
}
