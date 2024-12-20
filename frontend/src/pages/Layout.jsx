import { Outlet, NavLink, Navigate } from 'react-router'
import { useGlobalContext } from '../GlobalContext/GlobalContext';


export default function Layout() {

    const { setLogged } = useGlobalContext()

    const handleLogout = () => {
        // Rimuovi il token dal localStorage
        localStorage.removeItem('token');
        setLogged('false')

    };


    return (
        <>
            <header className='bg-dark text-light d-flex justify-content-between py-2'>
                <h1>Films</h1>
                <NavLink to='/home' className=''>Home</NavLink>
                <NavLink to='/login' className=''>Login</NavLink>
                <NavLink to='/signin' className=''>Signin</NavLink>

                <button onClick={handleLogout} className='btn btn-primary'> Logout</button>
            </header>

            <main>
                <Outlet />
            </main>
            <footer className='bg-dark text-light d-flex justify-content-center py-2'>
                <p>Footer</p>
            </footer>

        </>

    )
}