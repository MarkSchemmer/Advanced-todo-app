import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css-scss/Header.css";


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link className="link" to="/"> Sign In</Link>
                <Link className="link" to="/main">Main Page</Link>
                <Link className="link" to="/boards">Boards</Link>
                <Link className="link" to="/create-profile">Create Profile</Link>
            </div>
        );
    }
}

export default Header;