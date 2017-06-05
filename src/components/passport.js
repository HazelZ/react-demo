require('normalize.css/normalize.css');

import React from 'react';
//统一认证管理尝试开发
// Component 已经可以直接使用

class House extends Component {
	render(){
		return (
			<div className='House'>
		      <Room />
		      <Bathroom />
		    </div>
			)
	}
}

class Room extends Component {
  render(){
		return (
			<div className='Room'>
				<Man />    
				<Dog />    
		    </div>
			)
	}
}

class Bathroom extends Component {
   render(){
		return (
			<div className='Bathroom'>  
		    </div>
			)
	}
}

class Man extends Component {
  render(){
		return (
			<div className='Man'>  
		    </div>
			)
	}
}

class Dog extends Component {
	render(){
		return (
			<div className='Dog'>  
		    </div>
			)
	}
}
ReactDOM.render(<House />,document.body)
