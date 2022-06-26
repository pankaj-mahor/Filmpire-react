import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route , Routes } from 'react-router-dom'
import { Actors , Movies , MovieInformation , Navbar , Profile } from './indexShared'
const App = () => {
  return (
    <div>
        <CssBaseline />
        <Navbar />
        <main>
            <Routes>
                {/* <Route path="/" element={ <h1>Home</h1>} />                    */}
                <Route path="/movies" element={ <Movies />} />
                <Route path="/movie/:id" element={ <MovieInformation />} />
                <Route path="/actors/:id" element={<Actors />} />
                <Route path="/profile/:id" element={ <Profile />} />
            </Routes>
        </main>
        <h1>Hello Fimpllor</h1>
    </div>
  )
}

export default App