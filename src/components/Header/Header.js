import React from 'react';
import './Header.scss';
// import {connect} from 'react-redux';
// import {acGetData, acSetPersonInfo} from "../../actions/actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormControl, Button} from 'react-bootstrap';
import { FaBook, FaUser, FaSearch} from 'react-icons/fa';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    // test = () => {
    //     const newTrack = 'nothing else matters';
    //
    //     this.props.getData(newTrack)
    // };
    // addPersonInfo = () => {
    //
    //     this.props.setInfo();
    // };
    authorizationClick = () => {
       debugger; alert("I was clicked");
       return( <div className="lean_overlay">
            <div className="loginmodal">
                <div className="logintitle">Authorization</div>
                <form>
                    <div>
                        <label htmlFor="login"><span>Login</span></label>
                        <input type="text" name="login" id="login" placeholder="Login"/>
                    </div>
                    <div className="clearfix">
                        <label htmlFor="password"><span>Password</span></label>
                        <input type="password" name="password" id="password"
                               placeholder="Password"/>
                    </div>
                    <div className="clearfix">
                        <label htmlFor="password"><span>Password confirmation</span></label>
                        <input type="password" name="confirm_password" id="confirm_password"
                               placeholder="Password confirmation"/>
                    </div>
                    <p className="clearfix bt_input">
                        <input type="submit" name="submit" value="Registration"/>
                    </p>
                </form>
            </div>
        </div>
       )      
    };
    render() {
        // console.log('const a',this.props);
        // return(
        //     <React.Fragment>
        //         <h2 onClick={this.test}>Hello <span><i>ttt</i>test</span></h2>
        //         <button onClick={this.addPersonInfo}>add person info</button>
        //     </React.Fragment>
        //
        // )

        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-left collapsed' : 'navbar-toggler navbar-toggler-left';

        return (
            <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top scrolling-navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        {/*<img src="http://www.authorsong.com/templates/outdoor_life/images/s5_logo.png" height="30"*/}
                             {/*alt="logo"/>*/}
                        <img src="/images/logo_mod.png" height="55" alt="logo"/>
                    </a>
                    <button  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/*<a className="navbar-brand"  href="#home">PR<FontAwesomeIcon icon="circle" />GER</a>*/}
                    {/*<div className="collapse navbar-collapse" id="basicExampleNav">*/}
                    <div className={`${classOne}`} id="navbarResponsive">
                        <ul className="navbar-nav mr-auto smooth-scroll">
                            <li className="nav-item"><a className="nav-link waves-effect waves-light"  href="#">Catalog</a></li>
                            <li className="nav-item"><a className="nav-link waves-effect waves-light"  href="#">Actions</a></li>
                            <li className="nav-item"><a className="nav-link waves-effect waves-light"  href="#">Certificates</a></li>
                            <li className="nav-item"><a className="nav-link waves-effect waves-light"  href="#">Contacts</a></li>
                            <li className="nav-item"><a className="nav-link waves-effect waves-light" href="#" onClick={this.authorizationClick}><FaUser/>
                            <span className="top-panel">Personal area</span></a></li>
                        </ul>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-info" className='btn_info'><FaSearch/></Button>
                        </Form>
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <li className="nav-item avatar">
                                <a className="nav-link p-0 ee" href="#">
                                    <img src= "images/IMG_2317-13.png" className="rounded-circle z-depth-0"
                                         alt="avatar image" width="40" height="40"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                <div id="intro" className="view">
                    {/*<div className="mask rgba-black-strong">*/}
                        <div className="container-fluid d-flex align-items-center justify-content-center ">
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-md-10">
                                    {/*<hr className="hr-light"/>*/}
                                    <h4 className="white-text my-4">
                                        <button className="btn btn-outline-white waves-effect waves-light but">Sign in<FaBook/></button>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    {/*</div>*/}
                </div>
            </header>
        );
    }
}

// const mapStateToProps = (state) => {
//   return{
//       data: state
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return{
//         getData: (track) => dispatch(acGetData(track)),
//         setInfo: () => {
//             fetch('./src/data/test.json')
//                 .then(function(response) {
//                     return response.json();
//                 })
//                 .then(data => {
//                     dispatch(acSetPersonInfo(data))
//                 })
//                 .catch( alert );
//         }
//     }
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;





