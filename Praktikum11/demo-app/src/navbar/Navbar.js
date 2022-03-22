import React from "react";
import { Outlet, Link, Nav} from "react-router-dom";
import './Navbar.css'
import Dropdown from '../react-bootstrap/Dropdown'

/*
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#" to="/about">About</Link>
                <Dropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
*/

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="">
        <ul className="confirm navbar-nav me-auto mb-2 mb-lg-0">
          <div>
          <Link className="nav-link px-2 text-dark" to="/">Home</Link>
          </div>
          <div>
          <Link className="nav-link px-2 text-dark" to="/about">About</Link>
          <div>
          <Dropdown/>
          </div>
          </div>
        </ul>
        </div>
      </nav>
      <Outlet />
      <div class="container, contact">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"/>
      </div>
    </>
  );
}

/*
function Navbar() {
  return (
    <>
      <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      </Nav>
      <Outlet />
    </>
  );
}
*/
export default Navbar