import React,{Component} from 'react';
const userList = [
			{name:'Lily',age:20,sex:'fa'},
			{name:'Hazel',age:21,sex:'ma'},
			{name:'Lolita',age:10,sex:'fa'},
			{name:'Tony',age:35,sex:'ma'}
		];
class User extends Component{
	render(){
		let {user} =this.props
		return(
			<div className='userList'>
				<div>姓名：{user.name}</div>
				<div>年龄：{user.age}</div>
				<div>性别：{user.sex}</div>
				<hr />
			</div>
			)
	}
}
class List extends Component{
	render(){
		return(
				<div>
					{userList.map((user,index)=><User user={user} key={index} />)}
				</div>
			)
	}
}

export default List;