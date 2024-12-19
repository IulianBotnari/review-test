import { Outlet } from 'react-router'


export default function Layout() {


    return (
        <>
            <header>
                <h1>Header</h1>
            </header>

            <main>
                <Outlet />
            </main>
            <footer>
                <p>Footer</p>
            </footer>

        </>

    )
}