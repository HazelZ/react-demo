require('normalize.css/normalize.css');
require('styles/App.css');
import React, {Component} from 'react';

// 获取图片路径
var imgDatas = require('../data/imageDatas.json');

imgDatas = (function genImgURL(imgDataArr) {
	for (var i = 0, j = imgDataArr.length; i < j; i++) {
		var singleImgData = imgDataArr[i];
		singleImgData.imgURL = require('../images/' + singleImgData.fileName);
		imgDataArr[i] = singleImgData;
	}
	return imgDataArr;
})(imgDatas);
//图片组件
class ImgFigureComponent extends Component {
	render() {
		return (
			<figure className="img-figure">
				<img src={this.props.data.imgURL}
					 alt={this.props.data.title}
				/>
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
		);
	}
}

class AppComponent extends Component {
	render() {
		var controllerUnits = [],
			imgFigures = [];
			imgDatas.forEach(function(value,index,obj) {
				imgFigures.push( < ImgFigureComponent data = {value}
														key = {index}
							/ >);
				});
		return (
			<section className="stage">
				<div className="img-sec">
					{imgFigures}
				</div>
				<nav className="controller-nav">
					{controllerUnits}
				</nav>
			</section>
			);
	}
}
AppComponent.defaultProps = {};
export default AppComponent;