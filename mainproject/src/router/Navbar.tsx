import { TbMenu2 } from "react-icons/tb"


export const Navbar = () => {



    return (
        <nav className="navbar navbar-expand-lg bg-success-subtle text-success-emphasis">
            <div className="container-fluid">
                <button
                    type="button"
                    className="btn btn-outline-success"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling"
                    aria-controls="offcanvasScrolling">
                    <TbMenu2 />
                </button>
                <div className="tex-success-emphasis">
                    Microfrontends
                </div>
            </div>
        </nav>
    )
}
