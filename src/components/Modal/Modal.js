import React from 'react';

export default class Modal extends React.Component {

    validateForm=(form)=> {
        let doc = document;
        form = doc.querySelector("form");
        // Заранее объявим необходимые переменные
        let el, // Сам элемент
            elName, // Имя элемента формы
            value, // Значение
            elId,//id
            type; // Атрибут type для input-ов
        // Массив списка ошибок, по дефолту пустой
        let errorList = [];
        // Хэш с текстом ошибок (ключ - ID ошибки)
        let errorText = {
            1 : "Не заполнено поле 'login'",
            2 : "Не заполнено поле 'password'",
            3 : "Не заполнено поле 'confirm_password'",
            4 : "Не совпадение паролей"
        };
        // Получаем семейство всех элементов формы
        // Проходимся по ним в цикле
        let valuePassword=0;
        let valuePassword_Confirm=0;
        debugger;
        for (let i = 0; i < form.elements.length - 1; i++) {
            el = form.elements[i];
            elName = el.nodeName.toLowerCase();
            elId = el.id;
            value = el.value;
            if (elName === "input") { // INPUT
                // Определяем тип input-а
                type = el.type.toLowerCase();
                // Разбираем все инпуты по типам и обрабатываем содержимое
                switch (elId) {
                    case "login" :
                        if (el.name === "login" && value === "") {
                            errorList.push(1);
                        }
                    break;
                    case "password" :
                        valuePassword = el.value;
                        if (el.name === "password" && value === "")	{
                            errorList.push(2);
                        }
                    break;
                    case "confirm_password" :
                        valuePassword_Confirm = el.value;
                        if (el.name === "confirm_password" && value === ""){
                            errorList.push(3);
                        }
                        if(valuePassword_Confirm !== valuePassword){
                            errorList.push(4);
                        }
                    break;
                    default :
                        // Сюда попадают input-ы, которые не требуют обработки
                        // type = hidden, submit, button, image
                    break;
                }
            }

        }
        // Финальная стадия
        // Если массив ошибок пуст - возвращаем true
        if (!errorList.length) {
            alert("Вы успешно зарегистрированы");
            //window.location.href = 'index.html';
            window.location = 'index.html';
            return false;
        }
        //return true;
        // Если есть ошибки - формируем сообщение, выводим alert
        // и возвращаем false
        let errorMsg = "При заполнении формы допущены следующие ошибки:\n";
        for (let i = 0; i < errorList.length; i++) {
            errorMsg += errorText[errorList[i]] + "\n";

            if(errorList[i]===1){
                let field = doc.getElementsByTagName('input')[0];
                let button = doc.getElementsByTagName('input')[3];
                field.classList.add('doAnimF');
                button.classList.add('doAnimBut');
            }
            else if(errorList[i]===2){
                let field = doc.getElementsByTagName('input')[1];
                let button = doc.getElementsByTagName('input')[3];
                field.classList.add('doAnimF');
                button.classList.add('doAnimBut');
            }
            else if(errorList[i]===3){
                let field_confirm = doc.getElementsByTagName('input')[2];
                let button = doc.getElementsByTagName('input')[3];
                field_confirm.classList.add('doAnimF');
                button.classList.add('doAnimBut');
            }
            else if(errorList[i]===4) {
                let field = doc.getElementsByTagName('input')[1];
                let field_confirm = doc.getElementsByTagName('input')[2];
                let button = doc.getElementsByTagName('input')[3];
                field.classList.add('doAnimF');
                field_confirm.classList.add('doAnimF');
                button.classList.add('doAnimBut');
            }

        }
        /*  doc.getElementsByTagName('input')[3].disabled= '0'; */
        alert(errorMsg);
        return false;

    };

    render() {
        if(!this.props.show){
            return null;
        }
        return(
            <div>
                {this.props.children}
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
            </div>
        )
    }
}