import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, Grid, Col, Row, Tab, Tabs, Table, ButtonGroup} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


export default class Footer extends React.Component {
    setFilter(test) {
        alert("ss")
    }

    render() {
        return (
            <footer className=" bg-dark footer" id="footer">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-12 footer-link">
                            <p>Copyright &copy; 2016 Designed by AuThemes. All rights reserved.</p>
                            <ul>
                                <li><a href="about.html">درباره ما </a></li>
                                <li><a href="contact.html">تماس با ما </a></li>
                                <li><a href="#">گزارش بازار</a></li>
                                <li><a href="#">قوانین و مقررات </a></li>
                                <li><a href="#">نقشه سایت</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        );
    }
}