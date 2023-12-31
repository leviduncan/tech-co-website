import { SiAnalogue } from 'react-icons/si';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand"><SiAnalogue /></a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className='nav-item'><a className='nav-link' href="#">Products</a></li>
                            <li className='nav-item'><a className='nav-link' href="#">App</a></li>
                            <li className='nav-item'><a className='nav-link' href="#">About</a></li>
                            <li className='nav-item'><a className='nav-link' href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="right-side">
                    <div className="access">
                        <div className="btn btn-default">Log In</div>
                        <div className="btn btn-default dark">Sign Up</div>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header