import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuComponent extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>

                    <li>
                        <Link to="/tabla/21">
                            Tabla Multiplicar 21
                        </Link>
                    </li>

                    <li>
                        <Link to="/tabla/14">
                            Tabla Multiplicar 14
                        </Link>
                    </li>

                    <li>
                        <Link to="/tabla/7">
                            Tabla Multiplicar 7
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}