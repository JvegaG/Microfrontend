import { Link, useLocation } from 'react-router-dom'

export const Sidebar = () => {
    const location = useLocation()
    const { pathname } = location

    const activeLink = (url: string) => {
        return pathname === url ? 'bg-success-subtle text-success-emphasis' : ''
    }

    return (
        <div
            id="offcanvasScrolling"
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="true"
            tabIndex={-1}
            aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header bg-success-subtle">
                <h6 className="offcanvas-title" id="offcanvasScrollingLabel">Tecnology</h6>
                <button type="button" className="btn btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body m-0 p-0">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        {/* <a className={`nav-link ${pathname === '/withReact' ? 'active' : ''}`} aria-current="page" href="/withReact">React</a> */}
                        <Link className={`nav-link text-body ${activeLink('/withReact')}`} to="/withReact">React</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className={`nav-link ${pathname === '/withVue' ? 'active' : ''}`} href="/withVue">Vue</a> */}
                        <Link className={`nav-link text-body ${activeLink('/withVue')}`} to="/withVue">Vue</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className={`nav-link ${pathname === '/withVue' ? 'active' : ''}`} href="/withVue">Vue</a> */}
                        <Link className={`nav-link text-body ${activeLink('/withSvelte')}`} to="/withSvelte">Svelte</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className={`nav-link ${pathname === '/withAngular' ? 'active' : ''}`} href="/withAngular">Angular</a>
                        <Link className={`nav-link text-body ${activeLink('/withAngular')}`} to="/withAngular" reloadDocument>Angular</Link>
                    </li> */}
                </ul>
            </div>
            <div className="offcanvas-footer text-center">
                <p className="text-body-secondary">
                    Testing Microfrontend
                </p>
            </div>
        </div>
    )
}
