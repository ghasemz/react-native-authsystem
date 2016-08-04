import React from 'react';
import ReactDOM from 'react-dom';
import About from "trader/about";
import App from "trader/app";
import {TraderStockChart} from "trader/chart";
import {InstrumentTable} from "trader/instrument";

import {Button, ButtonToolbar, Grid, Col, Row, Tab, Tabs, Table, ButtonGroup} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');
import Settings from 'trader/settings';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router'
import {Login} from 'trader/user/auth'


class Home extends React.Component {
    setFilter(test) {
        alert("ss")
    }

    render() {
        return (
            <div id="home" className="page js-page ">
                <div className="header header-over large">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-5">
                                <a href="index.html" className="logo-image logo-animated">
                                    <img src={require("./less/img/logos/logo.png")} alt="logo"/>
                                </a>
                                <div className="languages  js-languages languages-light">
							<span className="language-active js-language-active ">English
								<i className="fa fa-caret-down"></i>
							</span>
                                    <ul className="languages-list js-languages-list">
                                        <li>
                                            <a href="#">English</a>
                                        </li>
                                        <li>
                                            <a href="#">فارسی</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-6 col-xs-7">
                                <nav className="right helper">
                                    <ul className="menu sf-menu js-menu menu-light">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <Link to={`/${this.props.lang}/i/175`}>Market Watch
                                                <span className="menu-label">v0.1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="index.html">Sign in</a>
                                            <ul>
                                                <li>
                                                    <Link to={`/${this.props.lang}/register`}>Register</Link>
                                                </li>
                                                <li>
                                                    <Link to={`/${this.props.lang}/login`}>Login</Link>
                                                </li>
                                                <li>
                                                    <a href="#" onClick={this.props.logout()}>Log out</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contacts.html">Prices</a>
                                        </li>

                                        <li>
                                            <a href="changelog.html">Changelog</a>
                                        </li>
                                        <li>
                                            <a href="contacts.html">Contacts</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-back header-back-bg-3 header-back-large header-back-full-page js-full-page">
                    <div className="header-back-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-info helper center">
                                        <h1 className="page-title">VSDocs</h1>
                                        <h2 className="page-description">Bring your documentation to the next
                                            level.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content">
                    <div className="container">
                        < div
                            className="row">
                            < div
                                className="col-md-12">
                                < div
                                    className="promo-title-wrapper helper pt60">
                                    <h3 className="promo-title">
                                        Features
                                    </h3>
                                    <p
                                        className="promo-description"> Amet
                                        quis
                                        suscipit
                                        modi
                                        animi
                                        quia
                                        veniam
                                        id, sed
                                        nihil ?
                                        Necessitatibus expedita, velit, itaque
                                        tenetur
                                        quisquam
                                        impedit
                                        cumque
                                        eum.Dolorum,
                                        natus
                                        earum.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="box box-small-icon-alt">
                                            <i className="pe-7s-plugin box-icon"></i>
                                            <h4 className="box-title">Components</h4>
                                            <p className="box-description">Dolores, dolore! Iusto veritatis nesciunt
                                                quaerat
                                                officia eveniet sunt eligendi. Nulla ducimus expedita, voluptas beatae,
                                                ipsum itaque.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="box box-small-icon-alt">
                                            <i className="pe-7s-eyedropper box-icon"></i>
                                            <h4 className="box-title">Colors</h4>
                                            <p className="box-description">Architecto tempora id, reprehenderit, aliquam
                                                corporis illum in eius vero rem qui reiciendis, dolorem nam iure
                                                totam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="box box-small-icon-alt">
                                            <i className="pe-7s-tools box-icon"></i>
                                            <h4 className="box-title">Customization</h4>
                                            <p className="box-description">Nemo, aliquid, alias! A quod doloremque
                                                minima porro
                                                sequi, facilis velit dolorum iusto assumenda, sed, nemo provident?</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="box box-small-icon-alt">
                                            <i className="pe-7s-cup box-icon"></i>
                                            <h4 className="box-title">Premium</h4>
                                            <p className="box-description">Voluptates, rerum, iusto sit, temporibus iure
                                                autem
                                                vel esse sapiente dolorum nostrum qui dignissimos officiis ea!
                                                Possimus.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8 col-sm-12">
                                    </div>
                                </div>
                                <div className="promo-title-wrapper ">
                                    <h3 className="promo-title"> Our Plans </h3>
                                    <p className="promo-description"> Ipsam numquam, voluptatem ullam, aspernatur quam
                                        molestias
                                        in? Quae quam, laudantium fugiat! Placeat odio, tempora eum repellendus mollitia
                                        laudantium minima iste a! </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="price-list">
                                            <h3 className="price-list-title">Free</h3>
                                            <p className="price-list-price">$0
                                                <span className="price-list-price-units">/mo</span>
                                            </p>
                                            <ul className="price-list-features">
                                                <li className="price-list-feature-item "> Nobis animi maxim.</li>
                                                <li className="price-list-feature-item "> Excepturi corrupti veritati.
                                                </li>
                                                <li className="price-list-feature-item "> Vitae eligendi fug.</li>
                                                <li className="price-list-feature-item "> Voluptas, numqua.</li>
                                                <li className="price-list-feature-item feature-is-disabled"></li>
                                                <li className="price-list-feature-item feature-is-disabled"></li>
                                                <li className="price-list-feature-item feature-is-disabled"></li>
                                                <li className="price-list-feature-item feature-is-disabled"></li>
                                            </ul>
                                            <a href="#" className="price-list-button">Select Plan</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="price-list">
                                            <h3 className="price-list-title">Standard</h3>
                                            <p className="price-list-price">$10
                                                <span className="price-list-price-units">/mo</span>
                                            </p>
                                            <ul className="price-list-features">
                                                <li className="price-list-feature-item "> Nobis animi maxim.</li>
                                                <li className="price-list-feature-item "> Excepturi corrupti veritati.
                                                </li>
                                                <li className="price-list-feature-item "> Vitae eligendi fug.</li>
                                                <li className="price-list-feature-item "> Voluptas, numqua.</li>
                                                <li className="price-list-feature-item "> Nemo enim.</li>
                                                <li className="price-list-feature-item feature-is-disabled"></li>
                                                <li className="price-list-feature-item feature-is-disabled"></li>
                                                <li className="price-list-feature-item feature-is-disabled"></li>
                                            </ul>
                                            <a href="#" className="price-list-button">Select Plan</a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0">
                                        <div className="price-list">
                                            <h3 className="price-list-title">Pro</h3>
                                            <p className="price-list-price">$29
                                                <span className="price-list-price-units">/mo</span>
                                            </p>
                                            <ul className="price-list-features">
                                                <li className="price-list-feature-item "> Nobis animi maxim.</li>
                                                <li className="price-list-feature-item "> Excepturi corrupti veritati.
                                                </li>
                                                <li className="price-list-feature-item "> Vitae eligendi fug.</li>
                                                <li className="price-list-feature-item "> Voluptas, numqua.</li>
                                                <li className="price-list-feature-item "> Nemo enim.</li>
                                                <li className="price-list-feature-item "> Dolore optio expedit.</li>
                                                <li className="price-list-feature-item "> Odit tenetur.</li>
                                                <li className="price-list-feature-item "> Vitae omnis eni.</li>
                                            </ul>
                                            <a href="#" className="price-list-button">Select Plan</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="promo-title-wrapper ">
                                    <h3 className="promo-title"> Brands using VSDocs </h3>
                                    <p className="promo-description"> Asperiores beatae, sequi consequatur a nobis
                                        expedita quis
                                        nulla quaerat nostrum aperiam corrupti eum voluptatibus quae aut neque error
                                        iusto,
                                        repellat dolor. </p>
                                </div>
                                <ul className="brands ">
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                    <li className="brand-item">
                                        <a href="#" className="brand-item-link">
                                            <img src={require("./less/img/300x100.png")} className="brand-item-image"
                                                 alt="brand logo"/> </a>
                                    </li>
                                </ul>
                                <div className="promo-title-wrapper ">
                                    <h3 className="promo-title"> Testimonials </h3>
                                    <p className="promo-description"> Reiciendis quasi ipsum, expedita soluta hic,
                                        minima
                                        voluptates deserunt odio temporibus obcaecati amet, culpa vel. Beatae,
                                        quisquam! </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="testimonial">
                                            <div className="testimonial-photo-wrapper">
                                                <img src={require("./less/img/128x128.png")}
                                                     className="testimonial-photo"
                                                     alt="Person&#39;s Photo"/></div>
                                            <h4 className="testimonial-name">Andrew Desmith</h4>
                                            <p className="testimonial-text">Facere dolores a ex ratione ut ipsa pariatur
                                                dicta
                                                dolorum distinctio deleniti aspernatur eius, sint, quia
                                                reprehenderit.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="testimonial">
                                            <div className="testimonial-photo-wrapper">
                                                <img src={require("./less/img/128x128.png")}
                                                     className="testimonial-photo"
                                                     alt="Person&#39;s Photo"/></div>
                                            <h4 className="testimonial-name">Amado Winning</h4>
                                            <p className="testimonial-text">Temporibus enim qui optio quod facere,
                                                voluptatem
                                                id, itaque tempore necessitatibus aut voluptas iste numquam mollitia!
                                                Ipsa,
                                                velit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="testimonial">
                                            <div className="testimonial-photo-wrapper">
                                                <img src={require("./less/img/128x128.png")}
                                                     className="testimonial-photo"
                                                     alt="Person&#39;s Photo"/></div>
                                            <h4 className="testimonial-name">Myles Graziosi</h4>
                                            <p className="testimonial-text">Veniam impedit pariatur veritatis libero ex,
                                                nostrum
                                                unde quia, qui voluptate et aliquam expedita porro esse ullam!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="testimonial">
                                            <div className="testimonial-photo-wrapper">
                                                <img src={require("./less/img/128x128.png")}
                                                     className="testimonial-photo"
                                                     alt="Person&#39;s Photo"/></div>
                                            <h4 className="testimonial-name">Matt Waack</h4>
                                            <p className="testimonial-text">Id quasi beatae sequi sint necessitatibus?
                                                Sapiente
                                                repudiandae, maiores. Deserunt tempore alias fugit molestias, dicta qui
                                                perspiciatis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="call-to-action helper mt60">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="call-to-action-title"> Got a minute? Join us, it's free! </h3>
                                    <p className="call-to-action-description"> Dolorem sint neque dolores, soluta et
                                        vitae
                                        dignissimos harum ut adipisci obcaecati. </p>
                                    <div className="call-to-action-buttons">
                                        <a href="#" className="call-to-action-button">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="promo-title-wrapper promo-title-no-icon">
                                    <h3 className="promo-title"> FAQ </h3>
                                    <p className="promo-description"> Error perferendis, harum optio at sequi odit
                                        voluptate
                                        repudiandae. Natus placeat ipsam, veniam, maiores facere odio alias nisi
                                        repellat!
                                        Debitis, animi assumenda? </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="faq-grid">
                                            <h4 className="faq-grid-question">Where do I get an overview?</h4>
                                            <p className="faq-grid-answer">Ex amet velit autem eius at necessitatibus
                                                alias
                                                nulla expedita quas quibusdam. Iusto sed dolores ut, fugiat omnis minus,
                                                ab!
                                                Nihil odit, saepe tempore illo nisi voluptas tenetur quae inventore unde
                                                nesciunt.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="faq-grid">
                                            <h4 className="faq-grid-question">How do I request a feature?</h4>
                                            <p className="faq-grid-answer">Dicta quisquam totam est error deserunt
                                                mollitia,
                                                saepe natus cum temporibus a aliquam magnam consectetur, impedit
                                                eligendi?
                                                Dolore laborum, culpa, esse, optio ut dicta unde veniam ab a quisquam
                                                provident nisi! Nostrum.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="faq-grid">
                                            <h4 className="faq-grid-question">How do I update?</h4>
                                            <p className="faq-grid-answer">Consectetur quae eveniet ab ipsa velit,
                                                veniam
                                                aliquam dolor quos dolore. Maxime vitae recusandae, quam tempore
                                                perspiciatis magni odit asperiores cumque incidunt, blanditiis
                                                architecto,
                                                facere iure dolores nesciunt illo laborum quaerat!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="helper center">
                                            <a href="#" className="faq-grid-show-more">View all
                                                <FontAwesome name='angle-right'/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="js-footer-is-fixed">
                    <div className="footer-extended">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="footer-extended-container">
                                        <div className="row">
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">About</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="#">Our Vision</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Technologies</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Newsletter</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Blog</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Contact Us</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">Downloads</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="#">All releases</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Source code</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Platforms</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">License</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Terms of Use</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">Documentation</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="#">Docs</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Beginner's Guide</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">FAQ</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Non-English Docs</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="clearfix visible-xs-block"></div>
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">Community</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="#">Diversity</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Mailing Lists</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Wiki</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Merchandise</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">Help</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="#">Job Opportunities</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Press Info</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Investors</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Legal</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Events</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-4">
                                                <div className="footer-extended-menu">
                                                    <h5 className="footer-extended-menu-title">Values</h5>
                                                    <ul className="footer-extended-menu-list">
                                                        <li>
                                                            <a href="#">Environment</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Accessibility</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Privacy</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Education</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Site Map</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <div className="footer-logo-wrapper">
                                        <a href="index.html" className="logo-image ">
                                            <img src={require("./less/img/logos/logo.png")} alt="logo"/>
                                        </a>
                                        <p className="slogan"> Learn.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-9 col-xs-12">
                                    <div className="footer-wrapper">
								<span className="scroll-top js-scroll-top">
									<FontAwesome name='angle-up'/>
                                    </span>
                                        <div className="docs-version js-docs-version">
                                            <span className="docs-current-version js-docs-current-version">v3.5</span>
                                            <ul className="js-docs-version-list">
                                                <li>
                                                    <a href="#">1.0</a>
                                                </li>
                                                <li>
                                                    <a href="#">1.5</a>
                                                </li>
                                                <li>
                                                    <a href="#">2.5</a>
                                                </li>
                                                <li>
                                                    <a href="#">3.0</a>
                                                </li>
                                                <li>
                                                    <a href="#">3.1</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="footer-menu helper right">
                                            <li>
                                                <a href="#"> About us </a>
                                            </li>
                                            <li>
                                                <a href="#"> Privacy Policy </a>
                                            </li>
                                            <li>
                                                <a href="#"> Terms & Condotions </a>
                                            </li>
                                            <li>
                                                <a href="#"> My account </a>
                                            </li>
                                            <li>
                                                <a href="#"> Support service </a>
                                            </li>
                                        </ul>
                                        <p className="copyright helper right">
                                            <a href="http://vsart.me">VSArt</a>, all rights reserved. 2015 &copy; </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        )
    }

    static mapStateToProps = (state) => {
        return {
            lang: state.settings.lang,
            registered: state.auth.registered,
            menu: state.app.menu
        }
    };

    static  mapDispatchToProps = (dispatch) => {
        return {
            goToPath: bindActionCreators(App.GO_TO_PATH_ACTION, dispatch),
            changeMenuState: bindActionCreators(App.CHANGE_MENU_STATE_ACTION, dispatch),
            changeLang: bindActionCreators(Settings.CHANGE_LANG_ACTION, dispatch),
            logout: bindActionCreators(Login.LOGOUT_REQUEST_SUBMITTED_ACTION, dispatch)
        }
    };
}

export default connect(Home.mapStateToProps,
    Home.mapDispatchToProps)(Home);

/*<Grid fluid={true}>
 <h1></h1>
 <Row>

 <Col xs={12}><InstrumentTable market="tse"/></Col>
 </Row>
 </Grid>*/