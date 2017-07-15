import React ,{Component} from 'react';
import Header from '../components/Header';
import {ajax} from '../Ajax';
import './Job.css';

class Job extends Component {
    // constructor(props){
    //     super(props);
    // }
    componentDidMount(){
        var positionId = this.props.params.positionId.slice(1);
        // console.log(positionId)
        ajax({
            url:"https://m.lagou.com/jobs/" + positionId + ".html",
            success:function(data){
                // console.log(data);
                var div = document.createElement("div");
                div.innerHTML = data;
                // console.log(div);
                // console.log(div.getElementsByClassName("postitle")[0]);
                var content1 = div.getElementsByClassName("postitle")[0],
                    content2 = div.getElementsByClassName("detail")[0],
                    content3 = div.getElementsByClassName("company")[0],
                    content4 = div.getElementsByClassName("positiondesc")[0];
                var content = document.getElementById("content"),
                    last = document.getElementsByClassName("positioneval")[0];
                content.insertBefore(content1,last);
                content.insertBefore(content2,last);
                content.insertBefore(content3,last);
                content.insertBefore(content4,last);
            }
        });
    }
    render(){
        var jobList = JSON.parse(localStorage.getItem("jobList")).newList;
        {/*console.log(jobList);*/}
        return(
           <div>
                <Header name="职位详情" exit = "true" />
                <div id="content">
                   {/* <div className="postitle">
                        <h2 className="title">Unreal4客户端主程序</h2>
                        <div className="collicon activeable">
                            <span className="icon notcoll"></span>
                            <span className="text"> 未收藏</span>
                        </div>
                    </div>

                    <div className="detail">
                        <div className="items">
                            <span className="item salary">
                                <em className="icon"></em>
                                <span className="text">25k-50k</span>
                            </span>
                            <span className="item workaddress">
                                <em className="icon"></em>
                                <span className="text">北京</span>
                            </span>
                            <span className="item jobnature">
                                <em className="icon"></em>
                                <span className="text">全职</span>
                            </span>
                            <span className="item workyear">
                                <em className="icon"></em>
                                <span className="text">5-10年</span>
                            </span>
                            <span className="item education">
                                <em className="icon"></em>
                                <span className="text">大专及以上</span>
                            </span>
                        </div>
                        <div className="temptation">
                            职位诱惑：环境高大上，健身房教练，土豪福利
                        </div>
                    </div>

                    <div className="company activeable">
                        <img src="//www.lgstatic.com/image2/M00/03/0F/CgpzWlXtI2KANowdAAAvdtLPVb4516.jpg" alt="" className="logo" />
                        <div className="desc">
                            <div className="dleft">
                                <h2 className="title"> 畅游</h2>
                                <p className="info">移动互联网,游戏/ 上市公司 / 2000人以上</p>
                            </div>
                            <span className="dright"></span>
                        </div>
                    </div>

                    <div className="positiondesc">
                        <header className="header">职位描述 </header>
                        <div className="content">
                            <p>
                                <span className="">工作职责</span><br className=""/>
                                <span className="">1. 使用虚幻4引擎进行游戏客户端核心模块开发，负责游戏客户端框架的搭建和后续功能开发。</span><br className=""/>
                                <span className="">2. 撰写虚幻4技术研究文档、并与策划、美工沟通、合作将3D美术资源导入到引擎。</span><br className=""/>
                                <span className="">3. 负责客户端方向开发人员的工作分配、工作质量把控、评估、培训及团队技术提升工作。</span><br className=""/>
                                <span className="">4. 熟练运用虚幻4中的语言撰写客户端代码，熟练运用虚幻4中插件技术。</span><br className=""/>
                                <span className="">5. 负责客户端UI多分辨率适配框架的搭建，配合TA/TD美术编写游戏内shader，可指导美术进行特效，动画调优。</span><br className=""/>
                                <span className="">6. 了解虚幻4渲染管线基本原理，并可以进行优化客户端效率问题。</span><br className=""/>
                                <span className="">7. 对RPG、ARPG、MOBA类游戏玩法有深刻见解。</span><br className=""/>
                                <span className="">8. 有虚幻4游戏客户端底层架构经验者优先（网络层，数据层，逻辑层，UI架构）</span><br className=""/><br className=""/>
                                <span className="">任职资格</span><br className=""/><span className="">1. 5年以上游戏行业(端游、重度手游）程序开发经验，3年以上重度3D手游经验</span><br className=""/>
                                <span className="">2. 精通C++、 C# 等任意一门开发语言</span><br className=""/>
                                <span className="">3. 熟练使用虚幻4开发引擎</span><br className=""/>
                                <span className="">4. 有完整虚幻项目主程经验优先，有完整动作PK、国战类游戏 核心开发经验优先</span><br className=""/>
                                <span className="">5. 有虚幻4游戏插件开发Shader开发,经验优先考虑&nbsp;</span>
                            </p>
                        </div>
                    </div>*/}

                    <div className="positioneval">
                        <div className="eval-title">面试评价<span id="total">(<span>0</span>)</span>
                        </div>
                        <ul className="list">
                            <li className="list-item-empty list-item">暂无面试评价</li>
                        </ul>
                    </div>

                    <div className="deliver" id="deliver_resume">投个简历</div>
                </div>

           </div>
        )
    }
}

export default Job