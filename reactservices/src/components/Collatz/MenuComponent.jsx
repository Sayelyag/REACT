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
                        <Link to="/collatz">
                           Collatz
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}