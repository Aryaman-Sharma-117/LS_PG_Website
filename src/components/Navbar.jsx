import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    const {countCart}=props;
    return (
        
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Umbrella PG</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to='/' className="nav-link active" onClick={
                            props.mode==='Cart'? (props.toggle) : ('')
                        }
                        >Home</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Contact us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Room Availibility</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sports Inventory
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Football</a></li>
                        <li><a className="dropdown-item" href="/">Table Tennis</a></li>
                        <li><a className="dropdown-item" href="/">Badminton</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Music Inventory
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Guitar</a></li>
                        <li><a className="dropdown-item" href="/">KeyBoard</a></li>
                        <li><a className="dropdown-item" href="/">Flute</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tech Inventory
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Stationary</a></li>
                        <li><a className="dropdown-item" href="/">TV Room</a></li>
                        <li><a className="dropdown-item" href="/">Daily Accessories</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <button className="btn btn-outline-success" onClick={() => {
                        let Input=prompt("Input box\nFeel free to write down your opinion and/or input");
                        alert("Thank You!");
                        }
                    }> Write your inputs</button>
                    </li>
                    <li className="nav-item">&nbsp;&nbsp;</li>
                    <li className="nav-item">
                        {
                            props.mode==='Display' ? (<Link to='/cart' className="btn btn-outline-success" onClick={props.toggle}>Cart</Link>) : 
                            (' ')
                        }
                        
                    </li>
                    <li className="nav-item">&nbsp;&nbsp;</li>
                    <li className="nav-item">
                        {
                        countCart ? (
                            <span class="badge text-bg-success">{countCart}</span>
                        ) : (' ')
                        }
                       
                    </li>
                    <li className="nav-item">&nbsp;&nbsp;</li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}