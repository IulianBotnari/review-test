import { Outlet } from 'react-router'


export default function Layout() {


    return (
        <>
            <header className='bg-dark text-light d-flex justify-content-center py-2'>
                <h1>Films</h1>
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