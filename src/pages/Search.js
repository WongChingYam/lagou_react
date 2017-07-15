import React ,{Component} from 'react';
// import { browserHistory } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';
import JobItem from '../components/JobItem';
import SearchHistory from '../components/SearchHistory';
import CityPosition from '../components/CityPosition';
import {ajax} from '../Ajax';
import './Search.css';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobList:[],
            // historyList:[],
            pageNo:1,
            hideInfo: {display: "none"},
            hideHistory: {display: "block"},
            showMore: {display: "none"},
            isEmpty:{display: "none"},
            exit:"false",
            isSearch:true
        };
        this.getJobs = this.getJobs.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleJobList = this.handleJobList.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
        this.getPositionCity = this.getPositionCity.bind(this);
        this.goBackSearch = this.goBackSearch.bind(this);
    }
    render(){
        var list = this.state.jobList.map((cur,idx)=>{
            return <JobItem key={idx} content = {cur} />
        });

        var historyList = [],hide = {display:"none"},show = {display:"block"};
        if(JSON.parse(localStorage.getItem("searchHistory")) !== null)
            historyList = JSON.parse(localStorage.getItem("searchHistory")).historyList ;

        var h_list = historyList.map((cur,idx)=>{
            return <SearchHistory key={idx} history = {cur} onDelete = {this.handleDelete} searchJobList = {this.handleJobList}/>
        });

        return(
           <div>
                <Header name="拉勾网" exit = "false" one = {this.state.exit} exitPage = {this.goBackSearch}/>
                <div style={this.state.isSearch?hide:show}><CityPosition positionCity = {this.getPositionCity}/></div>
                <div id="content" style={this.state.isSearch?show:hide}>
                    <div className="linputer">
                        <div className="lbutton" onClick = {this.handlePosition}>
                            <span className="city">全国</span>
                            <span className="cityicon"></span>
                        </div>
                        <div className="rinput">
                            <input className="inputer" type="text" placeholder="搜索职位或公司" onKeyPress = {this.getJobs} />
                            <span className="search" onClick = {this.getJobs}><em className="searchicon"></em></span>
                        </div>
                    </div>
                    <div className="listcon">
                        <ul className="history" style={this.state.hideHistory}>
                            {h_list}
                        </ul>
                        <div className="custominfo" style={this.state.hideInfo}>
                            将搜索地区和关键词设为定制条件
                        </div>
                        <ul className="list">
                            {list}
                            <li className="list-empty" style={this.state.isEmpty}><span className="icon"></span><span className="text">拉勾上暂时没有这样的职位</span>
                            </li>
                            <li className="activeable list-more" style={this.state.showMore} onClick = {this.getJobs}>加载更多</li>
                        </ul>
                    </div>
                </div>
                <Footer />
           </div>
        )
    }
    getJobs(e){
        // console.log(e.currentTarget.className)
        var city = document.getElementsByClassName('city')[0].innerText,
            jobName = document.getElementsByClassName('inputer')[0].value;

        // console.log(city,jobName);
        var _this = this,target = e.currentTarget;
        //将搜索记录存入localStorage
        // var historyList = JSON.parse(localStorage.getItem("searchHistory")).historyList || [];
        if(jobName === ""){
            return;
        }
        var historyList = [];
        if(JSON.parse(localStorage.getItem("searchHistory")) !== null)
            historyList = JSON.parse(localStorage.getItem("searchHistory")).historyList ;
        // if(historyList.indexOf(jobName) == -1){
        if(target.className.indexOf("search") !== -1 || target.className.indexOf("fdialog-content") !== -1 || e.which === 13){
            var h_list = {
                jobName:jobName,
                city:city,
                time:new Date().getTime()
            }
            // var historyList = this.state.historyList;
            historyList.push(h_list);
            this.setState({
                // historyList:historyList
                hideHistory:{display: "none"}
            })
        // }

        // console.log(this.state.historyList);
            localStorage.setItem("searchHistory",JSON.stringify({
                historyList:historyList
            }))
        }

        if(target.className.indexOf("list-more") !== -1){//加载更多
            this.state.pageNo +=  1;
            // this.setState({
            //     pageNo:this.state.pageNo+1
            // })
        }
        ajax({
            url:"https://m.lagou.com/search.json",
            data:{
                city:city,
                positionName:jobName,
                pageNo: _this.state.pageNo,
                pageSize:15
            },
            dataType:"json",
            success:function(data){
                data = data.content.data.page.result;
                // console.log(data);
                if(data.length !== 0){
                    // console.log(data.length)
                    if(data.length < 15){
                        _this.setState({
                            showMore:{display: "none"},
                        });
                    }else{
                        _this.setState({
                            showMore:{display: "block"}
                        });
                    }
                    if(target.className.indexOf("list-more") !== -1){
                        _this.setState({
                            jobList:_this.state.jobList.concat(data)
                        });
                    }else{
                        _this.setState({
                            jobList:data
                        });
                    }
                    _this.setState({
                        hideInfo:{display: "block"},
                        isEmpty:{display: "none"}
                    });
                }

                if(data.length === 0 ){
                    _this.setState({
                        jobList:[],
                        isEmpty:{display: "block"},
                        hideInfo:{display: "none"},
                    });
                }
            }
        });

    }
    handleDelete(item){//删除搜索记录
        // console.log(item);
        var historyList = JSON.parse(localStorage.getItem("searchHistory")).historyList;
        var index;
        historyList.forEach((cur,idx)=>{
            if(cur.time.toString() === item.time && cur.jobName === item.jobName && cur.city === item.city)
                index = idx;

        })
        // console.log(historyList);
        // console.log(index);
        historyList.splice(index,1);
        // console.log(historyList);
        localStorage.setItem("searchHistory",JSON.stringify({
            historyList:historyList
        }))
        this.setState({
            // historyList:historyList
        })
    }
    handleJobList(item){//历史搜索
        // console.log(item);
        var _this = this;
        ajax({
            url:"https://m.lagou.com/search.json",
            data:{
                city:item.city,
                positionName:item.jobName,
                pageNo: 1,
                pageSize:15
            },
            dataType:"json",
            success:function(data){
                data = data.content.data.page.result;
                document.getElementsByClassName('inputer')[0].value = item.jobName;
                if(data.length !== 0){
                    if(data.length < 15){
                        _this.setState({
                            showMore:{display: "none"},
                        });
                    }else{
                        _this.setState({
                            showMore:{display: "block"}
                        });
                    }
                    _this.setState({
                        jobList:data,
                        hideInfo:{display: "block"},
                        isEmpty:{display: "none"},
                        hideHistory:{display: "none"}
                    });
                }

                if(data.length === 0 ){
                    _this.setState({
                        jobList:[],
                        isEmpty:{display: "block"},
                        hideInfo:{display: "none"}
                    });
                }
            }
        });
    }
    handlePosition(){//到选择城市页面
        this.setState({
            exit:"true",
            isSearch:false
        })
    }
    getPositionCity(city,e){
        // console.log(city);
        this.setState({
            isSearch:true
        })
        document.getElementsByClassName('city')[0].innerText = city;
        this.getJobs(e);
    }
    goBackSearch(){
        this.setState({
            isSearch:true
        })
    }

}

export default Search