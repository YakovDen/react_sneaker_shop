import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Authorization.scss';

class Authorization extends React.Component{

    validateForm=()=>{

    };
    // getInitialState=()=> {
    //     return {
    //         visible: false,
    //         cancel_title: this.props.cancel_title ? this.props.cancel_title : 'Отмена',
    //         action_title: this.props.action_title ? this.props.action_title : 'ОК',
    //         title: '',
    //         text: ''
    //     };
    // };
    // Обработчик закрытия модального окна, вызовет обработчик отказа
    // close =()=>{
    //     this.setState({
    //         visible: false
    //     }, function () {
    //         return this.promise.reject();
    //     });
    // };
    // Обработчик действия модального окна, вызовет обработчик действия
    // action = ()=> {
    //     this.setState({
    //         visible: false
    //     }, function () {
    //         return this.promise.resolve();
    //     });
    // };
    // Обработчик открытия модального окна. Возвращает promise
    // ( при желании, можно передавать также названия кнопок )
    // open=(text, title = '') => {
    //     this.setState({
    //         visible: true,
    //         title: title,
    //         text: text
    //     });

        // promise необходимо обновлять при каждом новом запуске окна
        // this.promise = new $.Deferred();
        // return this.promise;
    //};

    render() {
       // var modalClass = this.state.visible ? "modal fade in" : "modal fade";
        //var modalStyles = this.state.visible ? {display: "block"} : {};
        // let backdrop = this.state.visibility ? (
        //     <div className="modal-backdrop fade in" onClick={this.close} />
        // ) : null;

        // var title = this.state.title ? (
        //     <div className="modal-header">
        //         <h4 className="modal-title">{this.state.title}</h4>
        //     </div>
        // ) : null;
        return(
            <div className="lean_overlay">
                <div className="loginmodal">
                    <div className="logintitle">Authorization</div>
                    <form onSubmit={this.validateForm}>
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
        );
    }
}


export default Authorization;