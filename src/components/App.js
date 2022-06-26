import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route , Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
        <CssBaseline />

        <main>
            <Routes>
                <Route path="/" element={ <h1>Home</h1>} />                   
                <Route path="/movies" element={ <h1>Movies</h1>} />
                <Route path="/movie/:id" element={ <h1>Movie Infromation</h1>} />
                <Route path="/actors/:id" element={ <h1>Actorrs</h1>} />
                <Route path="/profile/:id" element={ <h1>Profile</h1>} />
            </Routes>
        </main>
        <h1>Hello Fimpllor</h1>
    </div>
  )
}

export default App