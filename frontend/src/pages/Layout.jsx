import { Outlet } from 'react-router'


export default function Layout() {

    const handleLogout = () => {
        // Rimuovi il token dal localStorage
        localStorage.removeItem('token');
        alert('Logged out successfully');
    };


    return (
        <>
            <header className='bg-dark text-light d-flex justify-content-center py-2'>
                <h1>Films</h1>
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