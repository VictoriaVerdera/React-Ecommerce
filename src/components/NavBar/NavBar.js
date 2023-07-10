import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>A Granel</h3>
            <div>
                <button>Harinas</button>
                <button>Semillas</button>
                <button>Frutos secos</button>
                <button>Postres</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar