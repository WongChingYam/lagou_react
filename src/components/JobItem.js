import React ,{Component} from 'react';
import { browserHistory } from 'react-router';
import './JobItem.css';

class JobItem extends Component {
    constructor(){
        super();
        this.linkJob = this.linkJob.bind(this);
    }

    render(){
        var link = "//www.lgstatic.com/" + this.props.content.companyLogo
        return(
            <li className="activeable list-item" data-positionid={this.props.content.positionId} data-companyid={this.props.content.companyId} onClick={this.linkJob}>
                <img src={link} className="item-logo" alt="" />
                <div className="item-desc">
                    <h2 className="item-title">{this.props.content.companyName}</h2>
                    <p className="item-info">
                        <span className="item-pos">
                            {this.props.content.positionName}[ {this.props.content.city} ]
                        </span>
                        <span className="item-salary">{this.props.content.salary}</span>
                    </p>
                    <p className="item-time">{this.props.content.createTime}</p>
                </div>
            </li>
        )
    }
    linkJob(e){
        // console.log(e.currentTarget)
        browserHistory.push('/job/:'+this.props.content.positionId);
    }
}

export default JobItem