import { Outlet, NavLink, Navigate } from 'react-router'
import { useGlobalContext } from '../GlobalContext/GlobalContext';
import Header from '../Components/Header/Header.jsx';


export default function Layout() {

    const { setLogged } = useGlobalContext()



    return (
        <>

            <Header />


            <main className='mt-0'>
                <Outlet />
            </main>
            <footer className='text-light d-flex justify-content-center py-2'>
                <p>Footer</p>
            </footer>

        </>

    )
}