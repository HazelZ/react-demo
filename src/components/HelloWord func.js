import React, {Component} from 'react';
//函数式组件 0.14 无法写state的写法
const HelloWorld = (props) => {
  const sayHi = (event) => alert('Hello World')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}
class Index extends Component{
	render(){
		return(
			<div>
			<HelloWorld />
			</div>
		)
	}
}
export default Index;