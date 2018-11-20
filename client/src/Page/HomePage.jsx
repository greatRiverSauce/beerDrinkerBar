import React, {Component} from "react";
import Select from 'react-select';
import {Navbar, Nav, NavItem, Jumbotron, Button} from "react-bootstrap";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Bar Beer Drinkers</h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>
                        Our application is designed for searching, editing, verifying a database via sql. Moreover, results from valid sql queries will be presented back to the user in a very clear and visual manner through the use of graphics.
                    </p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Jumbotron>;
            </div>
        )
    }
}

export default HomePage;