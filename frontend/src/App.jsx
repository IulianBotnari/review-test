

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './pages/Layout'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'
import { GlobalContext } from './GlobalContext/GlobalContext'


function App() {


  return (
    <>
      <GlobalContext>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signin" element={<RegistrationPage />} />


            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext>

    </>
  )
}

export default App
