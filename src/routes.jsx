import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Error from './pages/Error'

import Header from './templates/Header';

function RouterApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />

                <Route path='*' element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;