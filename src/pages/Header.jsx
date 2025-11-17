const Header = () => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Love to Blog</title>
            <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            {/* Core theme CSS (includes Bootstrap)*/}
            <link href="/css/styles.css" rel="stylesheet" />
            <link href="/css/custom.css" rel="stylesheet" />
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="mainbar">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="index.html">
                        Blog L<span style={{ fontSize: 15 }}>❤️</span>vers
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-lg-0">
                            <li className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4" href="login.html">
                                    Login
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link px-lg-3 py-3 py-lg-4 dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Hi Charles
                                </a>
                                <ul className="dropdown-menu px-4">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header