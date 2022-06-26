import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route , Routes } from 'react-router-dom'
// import useStyles from './styles'
import { RootDiv , Toolbar , Content } from './styles'
import { Actors , Movies , MovieInformation , Navbar , Profile } from './indexShared'
const App = () => {
    // const classes = useStyles()
  return (
    <RootDiv>
        <CssBaseline />
        <Navbar />
        <Content>
            <Toolbar>
            <Routes>
                <Route path="/" element={ <h1>Home</h1>} />                   
                <Route path="/movies" element={ <Movies />} />
                <Route path="/movie/:id" element={ <MovieInformation />} />
                <Route path="/actors/:id" element={<Actors />} />
                <Route path="/profile/:id" element={ <Profile />} />
            </Routes>
            </Toolbar>
        </Content>
    </RootDiv>
  )
}

export default App