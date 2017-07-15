import React ,{Component} from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Mine.css'

class Mine extends Component {
    constructor(props){
        super(props);
        this.state = {
            hide : {display:"none"},
            hideNo : {display:"block"},
            name:""
        }
        this.linkLogin = this.linkLogin.bind(this);
        this.exitLogin = this.exitLogin.bind(this);
    }
    componentDidMount(){
        var store_name = JSON.parse(localStorage.getItem("loginInfo"));
        if(store_name !== null){
            // name = JSON.parse(localStorage.getItem("loginInfo")).name;
            // hide = {display:"block"};
            // hideNo = {display:"none"}
            if(store_name.name !== ""){
                this.setState({
                    name:JSON.parse(localStorage.getItem("loginInfo")).name,
                    hide : {display:"block"},
                    hideNo : {display:"none"}
                })
            }
        }
    }
    render(){
        return(
           <div>
                <Header name="拉勾网" exit = "false" />
                <div id="content1">
                    <div className="logininfo">
                        <div className="nologin center" style={this.state.hideNo}>
                            {/*<Link to="/login" className="loginbut" target="_self">登录 / 注册</Link>*/}
                            <a className="loginbut" target="_self" onClick = {this.linkLogin}>登录 / 注册</a>
                        </div>
                        <div className="haslogin center" style={this.state.hide}>
                            <Link to="/preview" className="button" target="_self"> 简历&gt; </Link>
                            <div className="headcon">
                                <img className="headpic" src="//www.lgstatic.com/images/myresume/default_headpic.png" alt="" />
                            </div>
                            <div className="name">{this.state.name}</div>
                        </div>
                    </div>

                    <div className="buttons">
                        <a className="button deliver" >
                            <span>投递</span>
                        </a>
                        <a className="button interview" >面试</a>
                        <a className="button invitation" >
                            <span>邀约</span>
                        </a>
                        <a className="button collect" >收藏</a>
                    </div>
                    <a className="logout" style={this.state.hide} onClick = {this.exitLogin}>退出登录</a>
                </div>
                <Footer />
           </div>
        )
    }
    linkLogin(){
        browserHistory.push('/login');
    }
    exitLogin(){//退出登录
        browserHistory.push('/mine');
        localStorage.setItem("loginInfo",JSON.stringify({
            name:""
        }))
        this.setState({
            hide : {display:"none"},
            hideNo : {display:"block"}
        })
    }
}

export default Mine