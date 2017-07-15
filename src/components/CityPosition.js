import React ,{Component} from 'react';
// import Header from './Header';
// import Footer from './Footer';
import './CityPosition.css';

class CityPosition extends Component {
    constructor(props){
        super(props);
        this.getPosition = this.getPosition.bind(this);
    }
    render(){
        return(
                <div id="fulldialog-conid-1" className="fdialog-content" onClick = {this.getPosition}>
                    <div className="fdialog-rcon">
                        <div className="cities-header">热门城市</div>
                        <table className="cities-list">
                            <thead>
                                <tr><th></th><th></th><th></th></tr>
                            </thead>
                            <tbody>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="北京">北京</td>
                                    <td className="activeable cities-item" data-item="上海">上海</td>
                                    <td className="activeable cities-item" data-item="广州">广州</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="深圳">深圳</td>
                                    <td className="activeable cities-item" data-item="成都">成都</td>
                                    <td className="activeable cities-item" data-item="杭州">杭州</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cities-header">ABCDEF</div>
                        <table className="cities-list">
                            <thead>
                                <tr><th></th><th></th><th></th></tr>
                            </thead>
                            <tbody>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="保定">保定</td>
                                    <td className="activeable cities-item" data-item="北京">北京</td>
                                    <td className="activeable cities-item" data-item="包头">包头</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="长春">长春</td>
                                    <td className="activeable cities-item" data-item="成都">成都</td>
                                    <td className="activeable cities-item" data-item="常德">常德</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="重庆">重庆</td>
                                    <td className="activeable cities-item" data-item="长沙">长沙</td>
                                    <td className="activeable cities-item" data-item="常州">常州</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="郴州">郴州</td>
                                    <td className="activeable cities-item" data-item="东莞">东莞</td>
                                    <td className="activeable cities-item" data-item="大连">大连</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="佛山">佛山</td>
                                    <td className="activeable cities-item" data-item="阜阳">阜阳</td>
                                    <td className="activeable cities-item" data-item="福州">福州</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cities-header">GHIJ</div>
                        <table className="cities-list">
                            <thead>
                                <tr><th></th><th></th><th></th></tr>
                            </thead>
                            <tbody>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="桂林">桂林</td>
                                    <td className="activeable cities-item" data-item="贵阳">贵阳</td>
                                    <td className="activeable cities-item" data-item="广州">广州</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="赣州">赣州</td>
                                    <td className="activeable cities-item" data-item="邯郸">邯郸</td>
                                    <td className="activeable cities-item" data-item="哈尔滨">哈尔滨</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="合肥">合肥</td>
                                    <td className="activeable cities-item" data-item="呼和浩特">呼和浩特</td>
                                    <td className="activeable cities-item" data-item="海口">海口</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="杭州">杭州</td>
                                    <td className="activeable cities-item" data-item="惠州">惠州</td>
                                    <td className="activeable cities-item" data-item="湖州">湖州</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="金华">金华</td>
                                    <td className="activeable cities-item" data-item="吉林">吉林</td>
                                    <td className="activeable cities-item" data-item="江门">江门</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="济南">济南</td>
                                    <td className="activeable cities-item" data-item="济宁">济宁</td>
                                    <td className="activeable cities-item" data-item="嘉兴">嘉兴</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cities-header">KLMN</div>
                        <table className="cities-list">
                            <thead>
                                <tr><th></th><th></th><th></th></tr>
                            </thead>
                            <tbody>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="开封">开封</td>
                                    <td className="activeable cities-item" data-item="昆明">昆明</td>
                                    <td className="activeable cities-item" data-item="廊坊">廊坊</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="拉萨">拉萨</td>
                                    <td className="activeable cities-item" data-item="洛阳">洛阳</td>
                                    <td className="activeable cities-item" data-item="临沂">临沂</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="兰州">兰州</td>
                                    <td className="activeable cities-item" data-item="柳州">柳州</td>
                                    <td className="activeable cities-item" data-item="茂名">茂名</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="绵阳">绵阳</td>
                                    <td className="activeable cities-item" data-item="梅州">梅州</td>
                                    <td className="activeable cities-item" data-item="宁波">宁波</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="南昌">南昌</td>
                                    <td className="activeable cities-item" data-item="南京">南京</td>
                                    <td className="activeable cities-item" data-item="南宁">南宁</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="南通">南通</td>
                                    <td className="activeable cities-item" data-item="南阳">南阳</td>
                                    <td className="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cities-header">OPQR</div>
                        <table className="cities-list">
                            <thead>
                                <tr><th></th><th></th><th></th></tr>
                            </thead>
                            <tbody>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="莆田">莆田</td>
                                    <td className="activeable cities-item" data-item="青岛">青岛</td>
                                    <td className="activeable cities-item" data-item="秦皇岛">秦皇岛</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="清远">清远</td>
                                    <td className="activeable cities-item" data-item="泉州">泉州</td>
                                    <td className="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cities-header">STUV</div>
                        <table className="cities-list">
                            <thead>
                                <tr><th></th><th></th><th></th></tr>
                            </thead>
                            <tbody>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="韶关">韶关</td>
                                    <td className="activeable cities-item" data-item="上海">上海</td>
                                    <td className="activeable cities-item" data-item="石家庄">石家庄</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="宿迁">宿迁</td>
                                    <td className="activeable cities-item" data-item="汕头">汕头</td>
                                    <td className="activeable cities-item" data-item="绍兴">绍兴</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="沈阳">沈阳</td>
                                    <td className="activeable cities-item" data-item="三亚">三亚</td>
                                    <td className="activeable cities-item" data-item="深圳">深圳</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="苏州">苏州</td>
                                    <td className="activeable cities-item" data-item="天津">天津</td>
                                    <td className="activeable cities-item" data-item="唐山">唐山</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="太原">太原</td>
                                    <td className="activeable cities-item" data-item="台州">台州</td>
                                    <td className="activeable cities-item" data-item="泰州">泰州</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cities-header">WXYZ</div>
                        <table className="cities-list">
                            <thead>
                                <tr><th></th><th></th><th></th></tr>
                            </thead>
                            <tbody>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="潍坊">潍坊</td>
                                    <td className="activeable cities-item" data-item="武汉">武汉</td>
                                    <td className="activeable cities-item" data-item="芜湖">芜湖</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="威海">威海</td>
                                    <td className="activeable cities-item" data-item="乌鲁木齐">乌鲁木齐</td>
                                    <td className="activeable cities-item" data-item="无锡">无锡</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="温州">温州</td>
                                    <td className="activeable cities-item" data-item="西安">西安</td>
                                    <td className="activeable cities-item" data-item="许昌">许昌</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="香港特别行政区">香港特别行政区</td>
                                    <td className="activeable cities-item" data-item="厦门">厦门</td>
                                    <td className="activeable cities-item" data-item="西宁">西宁</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="徐州">徐州</td>
                                    <td className="activeable cities-item" data-item="盐城">盐城</td>
                                    <td className="activeable cities-item" data-item="银川">银川</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="宜昌">宜昌</td>
                                    <td className="activeable cities-item" data-item="烟台">烟台</td>
                                    <td className="activeable cities-item" data-item="岳阳">岳阳</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="扬州">扬州</td>
                                    <td className="activeable cities-item" data-item="淄博">淄博</td>
                                    <td className="activeable cities-item" data-item="珠海">珠海</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="湛江">湛江</td>
                                    <td className="activeable cities-item" data-item="镇江">镇江</td>
                                    <td className="activeable cities-item" data-item="肇庆">肇庆</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="中山">中山</td>
                                    <td className="activeable cities-item" data-item="舟山">舟山</td>
                                    <td className="activeable cities-item" data-item="郑州">郑州</td>
                                </tr>
                                <tr className="cities-list-item">
                                    <td className="activeable cities-item" data-item="株洲">株洲</td>
                                    <td className="activeable cities-item" data-item="漳州">漳州</td>
                                    <td className="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
    getPosition(e){
        // console.log(e.target.getAttribute("data-item"));
        var city = e.target.getAttribute("data-item");
        if(city !== null)
            this.props.positionCity(city,e);
    }
}

export default CityPosition