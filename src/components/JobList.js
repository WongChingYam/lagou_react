import React ,{Component} from 'react';
import {ajax} from '../Ajax';
import JobItem from './JobItem';
import './JobList.css';

class JobList extends Component {
    constructor(){
        super();
        this.state = {
            jobList:[],
            pageNo:1
        };
        this.getMoreJob = this.getMoreJob.bind(this);
    }
    componentDidMount() {
        var _this = this;
        ajax({
            url:"https://m.lagou.com/listmore.json",
            type:"post",
            dataType:"json",
            data:{
                pageNo:_this.state.pageNo,
                pageSize:15
            },
            success:function(data){
                // console.log(data.content.data.page.result);
                // localStorage.setItem("jobList",JSON.stringify({
                //     newList:data.content.data.page.result
                // }));

                _this.setState({
                    jobList:_this.state.jobList.concat(data.content.data.page.result)
                })
            }
        })
    }

    getMoreJob(){
        var _this = this;
        this.state.pageNo +=  1;
        ajax({
            url:"https://m.lagou.com/listmore.json",
            type:"post",
            dataType:"json",
            data:{
                pageNo:_this.state.pageNo,
                pageSize:15
            },
            success:function(data){
                // console.log(data.content.data.page.result);

                localStorage.setItem("jobList",JSON.stringify({
                    newList:_this.state.jobList.concat(data.content.data.page.result)
                }));
                _this.setState({
                    jobList:_this.state.jobList.concat(data.content.data.page.result)
                })
            }
        })
    }

    render(){
        var list = this.state.jobList.map((cur,idx)=>{
            return <JobItem key={idx} content = {cur} />
        })
        return(
           <ul className="list">
                {list}
                <li className="activeable list-more" onClick = {this.getMoreJob}>加载更多</li>
           </ul>
        )
    }

}

export default JobList