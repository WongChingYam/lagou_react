import React ,{Component} from 'react';
import { browserHistory } from 'react-router';
import './Header.css';

class Footer extends Component {
    constructor(props){
        super(props);

        this.goSearch = this.goSearch.bind(this);
    }
    render(){
        var hide = {display: "none"},hide1 = {display: "none"};

        if(this.props.exit === "true"){
            hide = {display: "block"}
        }
        if(this.props.one === "true")
            hide1 = {display: "block"}
        return(
                <header id="header">{this.props.name}
                        <div className="left" style={hide1} onClick = {this.goSearch}><span className="corner"></span></div>
                        <div className="left" style={hide} onClick = {this.prevPage}><span className="corner"></span></div>
                        <div className="right" style={hide} onClick = {this.linkHome}> <span className="corner"></span></div>
                </header>
        )
    }
    prevPage(){
        window.history.back();
    }
    linkHome(){
        browserHistory.push('/');
    }
    goSearch(){
        this.props.exitPage();
    }
}

export default Footer