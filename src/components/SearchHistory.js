import React ,{Component} from 'react';
// import {Link} from 'react-router';
import './SearchHistory.css';

class SearchHistory extends Component {
    constructor(props){
        super(props);
        this.onDeleteHistory = this.onDeleteHistory.bind(this);
        this.searchList = this.searchList.bind(this);
    }
    render(){
        return(
            <li className="activeable history-item">
                <span className="text" data-name={this.props.history.jobName} onClick = {this.searchList}>{this.props.history.jobName}</span>
                <div className="delcon" data-time={this.props.history.time} data-name={this.props.history.jobName} data-city={this.props.history.city} onClick = {this.onDeleteHistory}>
                    <span className="delicon"></span>
                </div>
            </li>
        )
    }
    onDeleteHistory(e){//删除搜索记录
        // console.log(e.currentTarget.getAttribute("data-time"));
        var item = e.currentTarget;
        var time = item.getAttribute("data-time"),
            city = item.getAttribute("data-city"),
            jobName = item.getAttribute("data-name");
        this.props.onDelete({jobName:jobName,city:city,time:time});

    }
    searchList(e){
        var item = e.currentTarget.nextSibling;
        var time = item.getAttribute("data-time"),
            city = item.getAttribute("data-city"),
            jobName = item.getAttribute("data-name");
        // console.log(item.lastChild);
        this.props.searchJobList({jobName:jobName,city:city,time:time});
    }
}

export default SearchHistory