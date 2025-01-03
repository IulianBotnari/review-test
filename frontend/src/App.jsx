

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './pages/Layout'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'
import ReviewPage from './pages/ReviewPage'
import { GlobalContext } from './GlobalContext/GlobalContext'
import AddReviewPage from './pages/AddReviewPage'


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
              <Route path="/review/:username" element={<ReviewPage />} />
              <Route path="/add/:film_title" element={<AddReviewPage />} />


            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext>

    </>
  )
}

export default App
