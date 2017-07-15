import React ,{Component} from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            open:false,
            emptyPhone:false,
            emptyPwd:false
        }
        this.loginInto = this.loginInto.bind(this);
        this.handlePwd = this.handlePwd.bind(this);
        this.setPhone = this.setPhone.bind(this);
        this.setPwd = this.setPwd.bind(this);
    }
    render(){
        var hide = {display:"none"},show = {display:"block"};
        return(
            <div id="all">
                <div className="new_wrapper">
                    <form data-view="loginView">
                        <div className="new_register">
                            <div data-propertyname="username" data-controltype="Phone">
                                <input type="text" placeholder="已验证手机/邮箱" className="border_btm r_email top" id="phone" onFocus = {this.setPhone}/>
                                <span id="error1" className="input_tips" style={this.state.emptyPhone?show:hide}>请输入常用帐号</span>
                            </div>
                            <div data-propertyname="password" data-controltype="Password">
                                <div>
                                    <input type={this.state.open?"text":"password"} placeholder="密码" className="r_psw btm" id="pwd" onFocus = {this.setPwd} />
                                    <i className={this.state.open?"open":"eye"} onClick={this.handlePwd}></i>
                                </div>
                                <span id="error2" data-valid-message="" className="input_tips" style={this.state.emptyPwd?show:hide}>请输入密码</span>
                            </div>
                        </div>

                        <div data-propertyname="submit" data-controltype="Botton">
                            <input type="button" className="btn_green" value="登录" onClick = {this.loginInto}/>
                        </div>

                    </form>
                    <div className="register_text">还没帐号？</div>
                    <Link to="/register" className="btn_green_border">注册</Link>
                </div>
            </div>
        )
    }
    setPhone(){
        this.setState({
            emptyPhone:false
        })
    }
    setPwd(){
        this.setState({
            emptyPwd:false
        })
    }
    loginInto(){//登录
        //获取登录信息
        var phone = document.getElementById("phone").value,
            pwd =  document.getElementById("pwd").value;

        //验证信息
        if(phone === ""){
            this.setState({
                emptyPhone:true
            })
        }
        if(pwd === ""){
            this.setState({
                emptyPwd:true
            })
        }
        else{
            if(phone !== "13983834363" && pwd !== "123456"){
                document.getElementById("error1").innerText = "请输入有效帐号"
                document.getElementById("error2").innerText = "6-16位密码"
                this.setState({
                    emptyPhone:true,
                    emptyPwd:true
                })
            }
            if(phone === "13983834363" && pwd === "123456"){
                browserHistory.push('/mine');
                //将登录信息保存
                localStorage.setItem("loginInfo",JSON.stringify({
                    name:"wzx"
                }))
            }
        }
    }
    handlePwd(){
        this.setState({
            open:!this.state.open
        })
    }
}

export default Login