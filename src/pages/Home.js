import React ,{Component} from 'react';
import { browserHistory } from 'react-router';

import JobList from '../components/JobList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            isLogin:false
        }
        this.linkLogin = this.linkLogin.bind(this);
    }
    componentDidMount(){
        var store_name = JSON.parse(localStorage.getItem("loginInfo"));
        if(store_name !== null){
            if(store_name.name !== ""){
                document.getElementsByClassName("text")[0].innerText = "编辑";
                this.setState({
                    isLogin:true
                })
            }
        }
    }
    render(){
        var hide = {display: "block"};

        return(
           <div>
                <Header name="拉勾网" exit = "false" />
                <div id="content">
                    <div className="custom-info none" style={hide}>
                        <span className="info">
                            10秒钟定制职位
                        </span>
                        <a className="go" target="_self" onClick={this.linkLogin}>
                            <em className={this.state.isLogin?"icon":""}></em>
                            <em className="text">去登录</em>
                        </a>
                    </div>
                    <JobList />
                    <div id="copyright"><p>©2015 lagou.com, all right reserved </p>
                        <div className="copyright-item">
                            <span className="phone active">移动版&nbsp;·&nbsp;</span>
                            <span className="computer">电脑版&nbsp;·&nbsp;</span>
                            <a href="#header">回顶部</a>
                        </div>
                    </div>
                </div>
                <Footer />
           </div>
        )
    }
    linkLogin(){
        if(!this.state.isLogin)
            browserHistory.push('/login');
        if(this.state.isLogin)
            browserHistory.push('/WantJob');
    }
}

export default Home