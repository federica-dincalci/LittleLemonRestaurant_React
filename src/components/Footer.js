import footerLogo from '../img/logo1.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer col-12">
                <div className="row">
                    <div className="col-4 d-flex align-items-center">
                        <img src={footerLogo} alt="Footer logo" width="30px"></img>
                        <p><small>© 2025 - Federica d'Incalci</small></p>
                    </div>
                    <div className="col-8 d-flex justify-content-end align-items-center">
                        <nav className="navbar">
                            <ul >
                                <li>
                                    <a href="/">HOME</a>
                                </li>
                                <li>
                                    <a href="/about">ABOUT</a>
                                </li>
                                <li>
                                    <a href="/menu">MENU</a>
                                </li>
                                <li>
                                    <a href="/reservations">RESERVATIONS</a>
                                </li>
                                <li>
                                    <a href="/orderonline">ORDER ONLINE</a>
                                </li>
                                <li>
                                    <a href="/login">LOGIN</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;