import {Routes,Route} from 'react-router-dom'
import ProtectedRoutes from '../components/ProtectedRoutes'
import Dashboard from '../pages/DashBoard'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'



function RouterMain(){
    return(
        <Routes>
            <Route path='/' element={<LoginPage/>}></Route>
            <Route path='/register' element={<RegisterPage/>}></Route>
            <Route element={<ProtectedRoutes/>}>
                <Route path='/dashboard'  element={<Dashboard/>}></Route>
            </Route>
        </Routes>
    )
}


export default RouterMain