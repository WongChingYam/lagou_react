import React ,{Component} from 'react';
import {Link} from 'react-router';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
                <footer id="footer">
                    <Link to="/" activeClassName = "selected">
                    <div data-name="职位" data-index="0" data-type="custom" className="footer-tab-custom" onClick = {this.goToHome}>
                        <span className="icon"></span>
                        <span className="text">职位</span>
                    </div>
                    </Link>

                    <Link to="/search" activeClassName = "selected">
                    <div data-name="搜索" data-index="1" data-type="search" className="footer-tab-search" onClick = {this.goToSearch}>
                        <span className="icon"></span>
                        <span className="text">搜索</span>
                    </div>
                    </Link>

                    <Link to="/mine" activeClassName = "selected">
                    <div data-name="我的" data-index="2" data-type="mine" className="footer-tab-mine" onClick = {this.goToMine}>
                        <span className="icon"></span>
                        <span className="text">我的</span>
                    </div>
                    </Link>
                </footer>
        )
    }
}

export default Footer