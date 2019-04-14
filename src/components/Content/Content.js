import React from 'react';
import './Content.scss';
// import {connect} from 'react-redux';
// import {acGetData, acSetPersonInfo} from "../../actions/actions";
import { FaBook, FaUser, FaSearch} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Navbar,Form, FormControl, Button} from 'react-bootstrap';
import { FaDollarSign} from 'react-icons/fa';

class Content extends React.Component{


    render() {
        return(
            <div className="container w">
                <div className="row_product">
                    <div className="wrapper offset-xs-4 col-xs-8 offset-sm-3 col-sm-8 offset-md-1 col-md-11 offset-lg-0 col-lg-12">
                        <h1 className="custom_heading">Top seller</h1>
                    </div>
                    <div
                        className="ovens product flex-wrap offset-xs-4 col-xs-8 offset-sm-3 col-sm-8 offset-md-1 col-md-11 offset-lg-0 col-lg-12  justify-content-between">
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_one.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Nike Air Force Sport</p>
                            <span className="ofer-price">120,00<FaDollarSign/></span>
                        </div>
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_two.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Adidas Originals LXCON</p>
                            <span className="ofer-price">140,00<FaDollarSign/></span>
                        </div>
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_three.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Reebok Classic Nylon</p>
                            <span className="ofer-price">80,00<FaDollarSign/></span>
                        </div>
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_four.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Reebok Classic Leather</p>
                            <span className="ofer-price">90,00<FaDollarSign/></span>
                        </div>
                    </div>
                    <div className="wrapper offset-xs-4 col-xs-8 offset-sm-3 col-sm-8 offset-md-1 col-md-11 offset-lg-0 col-lg-12">
                        <h1 className="custom_heading">New arrivals</h1>
                    </div>
                    <div
                        className="ovens product flex-wrap offset-xs-4 col-xs-8 offset-sm-3 col-sm-8 offset-md-1 col-md-11 offset-lg-0 col-lg-12  justify-content-between">
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_one_new.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Adidas Originals LXCON</p>
                            <span className="ofer-price">140,00<FaDollarSign/></span>
                        </div>
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_two_new.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Adidas Originals 91/18</p>
                            <span className="ofer-price">125,00<FaDollarSign/></span>
                        </div>
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_three_new.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Adidas Originals Mid ADV</p>
                            <span className="ofer-price">125,00<FaDollarSign/></span>
                        </div>
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_four_new.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Adidas Originals LXCON</p>
                            <span className="ofer-price">145,00<FaDollarSign/></span>
                        </div>
                    </div>
                    <div className="wrapper offset-xs-4 col-xs-8 offset-sm-3 col-sm-8 offset-md-1 col-md-11 offset-lg-0 col-lg-12">
                        <h1 className="custom_heading">Products at a discount</h1>
                    </div>
                    <div
                        className="ovens product flex-wrap offset-xs-4 col-xs-8 offset-sm-3 col-sm-8 offset-md-1 col-md-11 offset-lg-0 col-lg-12  justify-content-between">
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_one_discount.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Adidas Originals Primeknit</p>
                            <span className="ofer-price"><strike>165,00<FaDollarSign/></strike>145,00<FaDollarSign/></span>
                        </div>
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_two_discount.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Reebok Classic Montana</p>
                            <span className="ofer-price"><strike>118,00<FaDollarSign/></strike>110,00<FaDollarSign/></span>
                        </div>
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_three_discount.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Adidas Galaxy 4 W</p>
                            <span className="ofer-price"><strike>89,00<FaDollarSign/></strike>58,00<FaDollarSign/></span>
                        </div>
                        <div className="equipment oven p-2 r"><a href="#"><img src="/images/sneakers/sneaker_four_discount.png" alt="avatar" width='250' height='150'/></a>
                            <p className="product_mini_name">Puma Suede x NATUREL</p>
                            <span className="ofer-price"><strike>117,00<FaDollarSign/></strike>100,00<FaDollarSign/></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;