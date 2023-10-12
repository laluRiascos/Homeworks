import {Link, Navigate, Route, Routes} from 'react-router-dom'
import AboutPage from './AboutPage.jsx'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import {NotFoundPage} from './NotFoundPage'

const MainApp = () => {
    return (
        <>
            <h1> MainApp </h1>
            <hr/>

            <NavLink className={(args) => `${args.isActive? 'active': ''}`} to="/">Home</NavLink>
            
            <Link to="/"> Home </Link>
            <Link to="about"> About </Link>
            <Link to="login"> Login </Link>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="login" element={<LoginPage/>} />
                <Route path="about" element={<AboutPage/>} />
                <Route path="/*" element={<Navigate to="/about"/>} />
            </Routes>
        </>
    )
}

export default MainApp;