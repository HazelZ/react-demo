import React,{Component} from 'react';
const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class Lesson extends Component{
	handleClick=()=>{
		let {lesson,index} = this.props;
		console.log(index+' - '+lesson.title)
	}
	render(){
		let {lesson} =this.props
		return(
				<div className='userList' onClick={this.handleClick}>
					<h1>{lesson.title}</h1>
					<p>{lesson.description}</p>
				</div>
			)
	}
}

class LessonsList extends Component{
	render(){
		let {lessons} =this.props;
		return(
			<div>
				{lessons.map((lessons,index)=><Lesson lesson={lessons} key={index} index={index} />)}
			</div>
			)
	}
}
class Index extends Component{
	render(){
		return(
			<div>
			<LessonsList lessons={lessons}/>
			</div>
		)
	}
}
export default Index;