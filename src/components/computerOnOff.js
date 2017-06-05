import React, {Component} from 'react';
class Computer extends Component {
  constructor(){
    super();
    this.state ={
    	status:'off',
    	showContent:'显示器关了'
    }
  }
  handleClick = ()=>{
  	let sta;
  	let content;
  	if(this.state.status == 'on'){
  		sta = 'off';
  		content = '显示器关了';
  	}else{
  		sta = 'on';
  		content = '显示器亮了';
  	}
    this.setState({
    	status:sta,
    	showContent:content
    })
	}
  render () {
    return (
      <div>
        <Screen showContent={this.state.showContent} />
        <button onClick={this.handleClick}>开关</button>
      </div>
    )
  }
}
class Screen extends Component {
	static defaultProps ={
		showContent:'无内容'
  }
  render () {
  	const showContent = this.props.showContent;
    return (
      <div className='screen'>
        { showContent }
      </div>
    )
  }
}
export default Computer;