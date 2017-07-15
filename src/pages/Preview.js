import React ,{Component} from 'react';

import './Preview.css';

class Preview extends Component {

    componentDidMount(){
        var store_name = JSON.parse(localStorage.getItem("loginInfo"));
        if(store_name !== null){
            if(store_name.name !== ""){
                document.getElementsByClassName('onlyname')[0].innerText = JSON.parse(localStorage.getItem("loginInfo")).name;
            }
        }
    }

    render(){

        return(
            <div id="wrapper">
                <div className="resume_header">
                    <div className="resume_head"></div>
                    <div className="none-work">
                        <span></span>
                        <img src="https://www.lagou.com/images/myresume/default_headpic.png" width="65" height="65" alt="" />
                    </div>
                </div>
            <section className="box_wrapper wrapper-border">
                <div className="onlyname">姓名</div>
                <div className="resume_text"></div>
                <h2><i></i>基本信息</h2>
                <div className="resumeDetails">
                    <div><span className="c8">最高学历：</span>本科</div>
                    <div><span className="c8">工作年限：</span>应届毕业生</div>
                    <div><span className="c8">所在城市：</span>深圳</div>
                    <div>
                        <span className="c8" id="telephone_show">联系电话：</span>
                        <span>13983834363</span>
                    </div>
                    <div className="link_email" id="email_show">
                        <span className="c8">联系邮箱：</span>
                        <span>1587900296@qq.com</span>
                    </div>
                </div>
                <h2><i></i>教育经历</h2>
                <div className="resume_section">
                    <ul className="status_details">
                        <li>
                            <div className="status_time c8">
                                <i className="top"></i>
                                <span>2017年毕业</span>
                            </div>
                            <div className="status_text">
                                <span>重庆科技学院</span>
                                <span className="c8">本科 · 计算机科学与技术</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="footer"> 我是应届毕业生</div>
            </section>
        </div>
        )
    }

}

export default Preview