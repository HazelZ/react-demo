import React, {Component} from 'react';

class LikeButton extends Component{
  static defaultProps ={
    likeText:'取消',
    unlikeText:'点赞'
  }
  constructor(props){
    super(props)
    this.state={ isLiked:false }
  }
  handleClick=()=>{
    this.setState(
      { isLiked: !this.state.isLiked}
    )
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isLiked ? this.props.likeText:this.props.unlikeText}👍
      </button>
    )
  }
}

class Index extends Component{
  render(){
    return(
      <div>
        <LikeButton likeText='已赞' unlikeText='赞' />
      </div>
    )
  }
}

export default Index;