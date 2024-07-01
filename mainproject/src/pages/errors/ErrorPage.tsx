import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);

    const showError = error.statusText || error.message

    return (
        <div className="container min-vh-100 d-grid text-center" style={{ placeItems: "center" }}>
            <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{showError}</i>
                </p>
            </div>
        </div>
    )
}
