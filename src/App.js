import React, { Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import Footer from './components/Footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="page"
                component="div"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                <div key={this.props.location.pathname} style={{position:"absolute",width:"100%"}}>
                    {this.props.children}

                </div>
            </ReactCSSTransitionGroup>
        );
    }

}

export default App;
