import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const swCharacters = [
    {id: 1, name: "Luke Skywalker", type: "Jedi"},
    {id: 2, name: "Darth Vader", type: "Sith"},
    {id: 3, name: "Emperor Palpatine", type: "Sith"},
    {id: 4, name: "Greg Whitewash", type: "Jedi"},
    {id: 5, name: "Princess Diana", type: "Sith"},
    {id: 6, name: "Hunter Gut", type: "Jedi"}
]

function HomePage(){
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')
    const displayedChar = typeFilter ? swCharacters.filter(cha => cha.type.toLowerCase() === typeFilter) : swCharacters

    const charElement = displayedChar.map(char => (
        <div key={char.id} className='grid gap-3 '>
            <h3 style={{color: char.type.toLowerCase() === "jedi" ? "blue" : "red"}} className='font-bold'>Name: {char.name}</h3>
            <p>Type: {char.type}</p>
            <hr />
        </div>
    ))

    return(
        <main className='h-full w-full overflow-auto text-center grid gap-4 p-6'>
            <h1 className='font-bold text-3xl uppercase'>Home</h1>
            <div className='space-x-8'>
                <button className='bg-orange-700 text-white p-1 px-4 rounded-lg' onClick={()=> setSearchParams({type:'jedi'})}>Jedi</button>
                <button className='bg-orange-700 text-white p-1 px-4 rounded-lg' onClick={()=> setSearchParams({type: 'sith'})}>Sith</button>
                <button className='bg-orange-700 text-white p-1 px-4 rounded-lg' onClick={()=> setSearchParams({})}>Clear</button>
            </div>
            {charElement}
        </main>
    )
}

export default HomePage

// <Link className='bg-orange-700 text-white p-1 px-4 rounded-lg' to='?type=jedi'>Jedi</Link>
//                 <Link className='bg-orange-700 text-white p-1 px-4 rounded-lg' to='?type=sith'>Sith</Link>
//                 <Link className='bg-orange-700 text-white p-1 px-4 rounded-lg' to='.'>Clear</Link>