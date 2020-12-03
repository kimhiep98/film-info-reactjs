import React from 'react'
import Movies from './Movies'
import Search from './SearchForm'
import './Home.css'

function Home() {
    return (
        <main>
            <h1>Film Info API</h1>
            <Search />
            <Movies/>
        </main>
    )
}

export default Home
