import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';
import { FaPhone,FaBook,FaVk,FaTwitter} from 'react-icons/fa';
import Header from "../Header/Header";
//import {connect} from 'react-redux';

class Footer extends React.Component{

    // a = 5;
    //
    // setVariables = () => {
    //     console.log('a',this.a);
    //     this.props.cbTest(this.a);
    // };

    render() {
       // console.warn('props', this.props);
        return(
           // <h2>Footer {this.props.footData.rdGetData.test}<button onClick={this.setVariables}>click</button></h2>
            <div className="container f">
                <div className="row_footer centered align-self-start ">
                    <div className="footer d-flex justify-content-around">
                        <div className="data_magazine align-self-center">
                            <h6>© 2011 - 2019</h6>
                            <p>Пн-Вс, 8:00 - 19:00</p>
                        </div>
                        <div className="info_magazine align-self-center">
                            <h6> Адрес магазина, время работы и телефон:</h6>
                            <h6> г. Минск, пр-т. Независимости, 60 </h6>
                            <h6>  с 11:00 до 20:00 без выходных </h6>
                            <h6><a className="phone" href="#"><FaPhone/> +375 29 907-09-07</a> </h6>
                        </div>
                        <div className="info align-self-center">
                            <h6> ИП Деньков Яков Николаевия</h6>
                            <h6> УНП 101207888 </h6>
                            <h6> 220050 г. Минск, а/я 305 </h6>
                            <h6>Сделано с участием Drozd Studio</h6>
                        </div>
                        <div className="reference d-flex  align-items-center ">
                            <div className="align-self-center p-2 r"><a href="https://twitter.com/wylsacom"><FaTwitter/></a></div>
                            <div className="align-self-center p-2 r"><a href="http://www.facebook.com/."><FaBook/></a></div>
                            <div className="align-self-center p-2 r"><a href="https://vk.com/"><FaVk/></a></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         footData: state
//     }
// };
  export default Footer;
//export default connect(mapStateToProps)(Footer);

