
import { Outlet } from 'react-router-dom'

import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='container mh-vh-100'>
                <Outlet />
            </div>
            <Sidebar />
        </>
    )
}
