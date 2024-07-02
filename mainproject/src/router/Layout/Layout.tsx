
import { Outlet } from 'react-router-dom'

import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='container min-vh-100 min-vw-100 text-center p-4'>
                <Outlet />
            </div>
            <Sidebar />
        </>
    )
}
