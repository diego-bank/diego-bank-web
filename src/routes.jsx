import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Error from './pages/Error'

import Header from './templates/Header';
import Footer from './templates/Footer';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp'

function RouterApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/login' element={ <Login />} />
                <Route path='/signup' element={ <SignUp />} />

                <Route path='*' element={ <Error /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp;