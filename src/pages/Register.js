import React ,{Component} from 'react';
import {Link} from 'react-router';
import './Register.css';

class Register extends Component {

    render(){
        return(
                <div id="all">
                    <div className="new_wrapper">
                        <form id="registerForm" data-view="phoneRegister">
                            <div className="new_register">
                                <input type="hidden" id="otype" value="" />
                                <div data-propertyname="phone" data-controltype="Phone" >
                                    <input type="text" placeholder="手机号" className="border_btm r_phone top btm" />
                                </div>
                                <div id="vcodeWrap" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode">
                                    <input type="text" id="vcode" name="vcode" className="top btm" placeholder="请证明你不是机器人" />
                                    <img className="yzm" src="https://passport.lagou.com/vcode/create?from=register&amp;refresh=1497948797170" alt="" />

                                    <a>看不清楚，<em>换一张</em></a>
                                </div>
                                <div data-propertyname="phoneVerificationCode" data-controltype="PhoneVerificationCode">
                                    <input type="text" className="top btm" id="vcode" placeholder="短信验证码" />
                                    <input type="button" className="btn_active r_getVcode btn_disabled" value="获取" />
                                </div>
                            </div>

                            <div className="reg_pwd" data-propertyname="password" data-controltype="Password">
                                <div>
                                    <input type="password" className="r_psw" placeholder="设置6-16位密码"/>
                                    <i className="eye"></i>
                                </div>
                            </div>

                            <div data-propertyname="submit" data-controltype="Botton" >
                                <input type="button" className="btn_green" id="register" value="注册" />
                            </div>
                        </form>
                        <div className="register_text">已有帐号？</div>
                        <Link to="/login" className="btn_green_border">登录</Link>
                        <div className="register_text">点击注册，即代表您同意<a href="http://www.lagou.com/privacy.html">《拉勾用户协议》</a></div>

                    </div>
                </div>
        )
    }
}

export default Register