import React ,{Component} from 'react';
import { browserHistory } from 'react-router';

import Header from '../components/Header';
// import Footer from '../components/Footer';
import './WantJob.css';

class WantJob extends Component {

    render(){

        return(
           <div>
                <Header name="设置定制信息" exit = "true" exitPage = {this.linkHome} />
                <div id="contents">
                    <div className="infos">
                        <span className="text">
                            <em className="left"></em>
                                想找什么职位？
                            <em className="right"></em>
                        </span>
                    </div>
                    <div id="rinputer">
                        <div className="rinputer">
                            <input className="inputer" placeholder="输入你想定制的职位" />
                            <span className="button">OK</span>
                        </div>
                        <ul className="predata">
                            <li className="item" data-word="产品经理" data-index="0">产品经理</li>
                            <li className="item" data-word="Java" data-index="1">Java</li>
                            <li className="item" data-word="运营" data-index="2">运营</li>
                            <li className="item" data-word="Android" data-index="3">Android</li>
                            <li className="item" data-word="PHP" data-index="4">PHP</li>
                            <li className="item" data-word="UI" data-index="5">UI</li>
                            <li className="item" data-word="IOS" data-index="6">IOS</li>
                            <li className="item" data-word="编辑" data-index="7">编辑</li>
                            <li className="item" data-word="BD" data-index="8">BD</li>
                        </ul>
                        <ul className="suggester"></ul>
                    </div>
                </div>
           </div>
        )
    }
    linkHome(){
        browserHistory.push('/');
    }

}

export default WantJob