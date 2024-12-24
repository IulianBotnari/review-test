
import { Outlet, NavLink, Navigate } from 'react-router'
import { useGlobalContext } from '../../GlobalContext/GlobalContext.jsx';
import Style from '../Header/Header.module.css'


export default function Header() {

    const { setLogged } = useGlobalContext()

    const handleLogout = () => {
        // Rimuovi il token dal localStorage
        localStorage.removeItem('token');
        setLogged('false')

    };


    return (
        <>
            <header className={Style.header}>
                <navigator className={Style.navigation}>

                    <ul className={Style.ul}>
                        <li className={Style.li} >
                            <NavLink to='/home' className=''>
                                <span className={Style.icon}>
                                    <i className='bi-house'></i>
                                </span>
                                <span className='text'>Home</span></NavLink>


                        </li>

                        <li className='active'>
                            <NavLink to='/login' className=''>
                                <span className={Style.icon}>
                                    <i className='bi-door-open'></i>
                                </span>
                                <span className='text'>Login</span>
                            </NavLink>
                        </li>


                        <li className={Style.li} >

                            <NavLink to='/signin' className=''>
                                <span className={Style.icon}>
                                    <i className='bi-box-arrow-in-right'></i>
                                </span>
                                <span className='text'>Signin</span>
                            </NavLink>

                        </li>

                        <div className='indicator'></div>


                    </ul>


                </navigator>


                {/* <button onClick={handleLogout} className='btn btn-primary'> Logout</button> */}
            </header >


        </>

    )
}