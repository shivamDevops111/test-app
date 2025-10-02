import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Toaster } from 'react-hot-toast';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import LandingPage from './pages/landingpage/LandingPage';
import Home from './pages/home/Home';
import LiveRoom from './pages/liveRoom/LiveRoom';
import CreateSession from './pages/createSession/CreateSession';
import JoinSession from './pages/joinSession/JoinSession';
import PersonalAIAssistant from './pages/personalAIAssistent/PersonalAIAssistent';
import Loader from './components/Loader';
import IfLogedIn from './routes/IfLogedIn';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../store/slices/userSlice';
import IfLogedOut from './routes/IfLogedOut';






const App = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      dispatch(setUser(user))
    }
    dispatch(setLoading(false))

  }, [])



  return (
    <>


      <div className=' '>


        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home />}></Route>



            {/* protected routes if loggedin */}
            <Route element={<IfLogedIn />}>
              <Route path='/create-session' element={<CreateSession />}></Route>
              <Route path='/join-session' element={<JoinSession />}></Route>
              <Route path='/personal-assistent' element={<PersonalAIAssistant />}></Route>
              <Route path='/room/:id' element={<LiveRoom />}></Route>
            </Route>

            protected route if loged out


            <Route element={<IfLogedOut />}>
              <Route path='/landing-page' element={<LandingPage />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Route>

          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>

    </>
  )
}

export default App