import React, { Component } from 'react'
import Ace from './Ace.jpg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class MenuComponents extends Component {

    render() {
        return (
            <nav
                className="navbar navbar-expand-lg"
                style={{ backgroundColor: "#fde3f6" }}
                data-bs-theme="light"
            >
                <div className="container-fluid">
                    <a
                        className="navbar-brand d-flex align-items-center"
                        href="/"
                    >
                        <img
                            src={Ace}
                            alt="Ace"
                            width="45"
                            height="45"
                            className="rounded-circle me-2"
                        />
                        Departamentos
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{
                            backgroundColor: "#e88eaa",
                            color: "#ffffff",
                            fontWeight: "bold",
                            padding: "12px",
                            borderRadius: "10px",
                            border: "none"
                        }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                {/* <a className="nav-link active" href="/">
                                    Home
                                </a> */}
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/link">
                                    Link
                                </a> */}
                                <NavLink className="nav-link" to="/CreateDepartamento">
                                    Crear Departamento
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link" href="/link">
                                    Link
                                </a> */}
                                <NavLink className="nav-link" to="/HospitalesMultiples">
                                    Hospitales Multiples
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link" href="/link">
                                    Link
                                </a> */}
                                <NavLink className="nav-link" to="/link">
                                    Link
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/action">
                                            Action
                                        </a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="/another-action">
                                            Another action
                                        </a>
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a className="dropdown-item" href="/something-else">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <span
                                    className="nav-link disabled"
                                    aria-disabled="true"
                                >
                                    Disabled
                                </span>
                            </li>

                        </ul>

                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />

                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                style={{
                                    backgroundColor: "#e88eaa",
                                    color: "#ffffff",
                                    fontWeight: "bold",
                                    padding: "12px",
                                    borderRadius: "10px",
                                    border: "none"
                                }}
                            >
                                Search
                            </button>
                        </form>

                    </div>
                </div>
            </nav>
        )
    }
}

















                                                                                                 