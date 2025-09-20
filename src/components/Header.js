import Nav from './Nav'

import logo from '../img/title1.png'

const Header = (props) => {
    return (
        <header>
            <img src={logo} alt="Little Lemon logo" width="200px"></img>
            <Nav />
        </header>
    )
}

export default Header;