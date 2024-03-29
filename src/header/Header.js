import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './header.css'
import logo from '../img/logo.png'


function Header() {
    return (
        <div className="Container">
            <Row>
                <Col>
                    <a href="#"><span style={{ fontSize: "20px", color: "black" }}><FaBars /></span></a>
                </Col>

                <Col xs lg="10">
                    <img src={logo} width="120px" height="30px"></img>
                </Col>
                <Col>
                    <a href="#"><span style={{ fontSize: "20px", color: "black" }}><HiOutlineShoppingCart /></span></a>
                </Col>
            </Row>

            <div class="input-icons">
                <i class="fa fa-search icon"></i>
                <input class="input-field" placeholder="Search product" type="text"></input>
            </div>
        </div>
    );
}

export default Header;