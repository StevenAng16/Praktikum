import React from "react"
import {Link} from "react-router-dom";

function Dropdown () {
    return(
        <>
            <ul className="confirm navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-link px-2 text-dark" to="/about/about-app" href="#">About App</Link>
                <Link className="nav-link px-2 text-dark" to="/about/about-author" href="#">About Author</Link>
            </ul>
            <div class="container, contact">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"/>
            </div>
        </>
    )
}
/*
function Dropdown () {
    return(
        <>
            <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/about/about-app" href="#">About App</Link></li>
                <li><Link class="dropdown-item" to="/about/about-author" href="#">About Author</Link></li>
            </ul>
            </div>
        </>
    )
}
*/
export default Dropdown