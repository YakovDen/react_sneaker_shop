import React, { Component } from "react";

import '../styles/App.scss';
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Authorization from "./Authorization/Authorization";
//
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faCircle, faBook} from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);
library.add(faCircle);
library.add(faBook);

class App extends Component {

    state = {
        getA: 0
    };

    getValue = (val) => {
        console.log('app val',val);
        this.setState({
            getA: val
        })
    };


    render() {
        return (
            <div>
                <Header rrr={this.state.getA}/>
                <Content/>
                <Footer/>
                {/*<Authorization/>*/}
                {/*<Footer cbTest={this.getValue}/>*/}
            </div>
        );
    }
}

export default App;