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
        /* <fieldset id="letter-form" class="hide"> */
        var field = document.createElement("fieldset");
        field.setAttribute("class","lean_overlay");
        field.setAttribute("id","letter-form");
        field.innerHTML;
        //create element form
        var f = document.createElement("form");
        f.setAttribute("class","formLogin");
        f.setAttribute('onSubmit',"return validateForm(this)");
        //create element div
        var divlogin =document.createElement( "div");
        var divpassword =document.createElement( "div");
        var divconfirm_password =document.createElement( "div");
        //create a label for element input
        var l_login = document.createElement("label");
        //create a input login element
        var p = document.createElement("p");
        p.setAttribute("class","authorization");
        p.innerHTML = "Authorization";
        l_login.htmlFor = "login";
        var span_login = document.createElement ("span");
        span_login.innerHTML=l_login.innerHTML="Login";
        var input_login = document.createElement("input");
        input_login.type = "text";
        input_login.name = "login";
        input_login.id = "login";
        input_login.placeholder = "Login";
        input_login.value = "";
        //create a label for element input
        var l_password = document.createElement("label");
        //create a input password element
        l_password.htmlFor = "password";
        var span_password = document.createElement ("span");
        span_password.innerHTML=l_password.innerHTML="Password";
        var input_password = document.createElement("input");
        input_password.type = "password";
        input_password.name = "password";
        input_password.id = "password";
        input_password.placeholder = "Password";
        input_password.value = "";
        //create a label for element input
        var l_confirm_password = document.createElement("label");
        //create a input confirm_password element
        l_confirm_password.htmlFor = "confirm_password";
        var span_confirm_password = document.createElement ("span");
        span_confirm_password.innerHTML=l_confirm_password.innerHTML="Confirm password";
        var input_confirm_password = document.createElement("input");
        input_confirm_password.type = "password";
        input_confirm_password.name = "confirm_password";
        input_confirm_password.id = "confirm_password";
        input_confirm_password.placeholder = "Confirm password";
        input_confirm_password.value = "";
        //create submit
        var p_submit = document.createElement("p");
        p_submit.setAttribute("class","bt_input");
        var btn = document.createElement("input");
        btn.type = "submit";
        btn.name = "submit";
        btn.value = "Registration";
        // add login's element to the divlogin
        divlogin.appendChild(l_login);
        divlogin.appendChild(span_login);
        divlogin.appendChild(input_login);
        // add password's element to the divpassword
        divpassword.appendChild(l_password);
        divpassword.appendChild(span_password);
        divpassword.appendChild(input_password);
        // add confirm_password's element to the divconfirm_password
        divconfirm_password.appendChild(l_confirm_password);
        divconfirm_password.appendChild(span_confirm_password);
        divconfirm_password.appendChild(input_confirm_password);
        // add all elements to the form
        field.appendChild(f);
        f.appendChild(p);
        f.appendChild(divlogin);
        f.appendChild(divpassword);
        f.appendChild(divconfirm_password);
        f.appendChild(p_submit);
        f.appendChild(btn);
        // add the form inside the body
        document.getElementsByTagName('body')[0].appendChild(field); //pure javascript

    };
    validateForm = (form) => {
        debugger;
        var doc = document;
        // Заранее объявим необходимые переменные
        var el, // Сам элемент
            elName, // Имя элемента формы
            value, // Значение
            elId,//id
            type; // Атрибут type для input-ов
        // Массив списка ошибок, по дефолту пустой
        var errorList = [];

        // Хэш с текстом ошибок (ключ - ID ошибки)
        var errorText = {
            1 : "Не заполнено поле 'login'",
            2 : "Не заполнено поле 'password'",
            3 : "Не заполнено поле 'confirm_password'",
            4 : "Не совпадение паролей"
        };
        // Получаем семейство всех элементов формы
        // Проходимся по ним в цикле
        valuePassword=0;
        valuePassword_Confirm=0;
        for (var i = 0; i < form.elements.length - 1; i++) {
            el = form.elements[i];
            elName = el.nodeName.toLowerCase();
            elId = el.id;
            value = el.value;
            if (elName == "input") { // INPUT
                // Определяем тип input-а
                type = el.type.toLowerCase();

                // Разбираем все инпуты по типам и обрабатываем содержимое
                switch (elId) {
                    case "login" :
                        if (el.name == "login" && value == "") {
                            errorList.push(1);
                        }
                        break;
                    case "password" :
                        valuePassword = el.value;
                        if (el.name == "password" && value == "")	{
                            errorList.push(2);
                        }

                        break;
                    case "confirm_password" :
                        valuePassword_Confirm = el.value;
                        if (el.name == "confirm_password" && value == ""){
                            errorList.push(3);
                            break;
                        }
                        if(valuePassword_Confirm != valuePassword){
                            errorList.push(4);
                            break;
                        }
                        else {
                            alert("Вы успешно зарегистрированы");
                            window.location.href = 'index.html';
                            return false;
                        }
                        break;
                    default :
                        // Сюда попадают input-ы, которые не требуют обработки
                        // type = hidden, submit, button, image
                        break;
                }
            } else {

            }
        }
        // Финальная стадия
        // Если массив ошибок пуст - возвращаем true
        if (!errorList.length) return true;
        // Если есть ошибки - формируем сообщение, выводим alert
        // и возвращаем false
        var errorMsg = "При заполнении формы допущены следующие ошибки:\n";
        for (i = 0; i < errorList.length; i++) {
            errorMsg += errorText[errorList[i]] + "\n";

            if(errorList[i]==1){
                field = doc.getElementsByTagName('input')[0];
                button = doc.getElementsByTagName('input')[3];
                field.classList.add('doAnimF');
                button.classList.add('doAnimBut');
            }
            else if(errorList[i]==2){
                field = doc.getElementsByTagName('input')[1];
                button = doc.getElementsByTagName('input')[3];
                field.classList.add('doAnimF');
                button.classList.add('doAnimBut');
            }
            else if(errorList[i]==3){
                field_confirm = doc.getElementsByTagName('input')[2];
                button = doc.getElementsByTagName('input')[3];
                field_confirm.classList.add('doAnimF');
                button.classList.add('doAnimBut');
            }
            else if(errorList[i]==4) {
                field = doc.getElementsByTagName('input')[1];
                field_confirm = doc.getElementsByTagName('input')[2];
                button = doc.getElementsByTagName('input')[3];
                field.classList.add('doAnimF');
                field_confirm.classList.add('doAnimF');
                button.classList.add('doAnimBut');
            }
        }
        alert(errorMsg);
        return false;
    };


    render() {
        // console.log('const a',this.props);
        // return(
        //     <React.Fragment>
        //         <h2 onClick={this.test}>Hello <span><i>ttt</i>test</span></h2>
        //         <button onClick={this.addPersonInfo}>add person info</button>
        //     </React.Fragment>       //
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





