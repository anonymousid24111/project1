import React, {Component} from 'react';
import axios from 'axios';

class Signup extends Component{
	constructor(props) {
    super(props);
    this.state = {
      	email : "",
      	username : "",
      	password : ""
    };
  	}
  	handleChange = e => {
		var target = e.target;
	  	var name = target.name;
	  	var value = target.value;
	    this.setState({
	      	[name] : value
	    })
	}
  	handleSubmit(e){
  		e.preventDefault();
  		var {email, username, password}= this.state;
	    axios.post(`/signup`, {email, username, password})
	      .then(res=>{
	      	if (res.status===201) {
	      		 alert("Signup Successfully!")
	      	}
	      	else{
	      		alert("Signup Fail!");

	      	}
	      }
	      )
  	}
	render(){
		return(
			<div>
				<form onSubmit={e=>this.handleSubmit(e)}>
					email:<input name="email" type="text" onChange={this.handleChange}/><br/>
					username:<input name="username" type="text" onChange={this.handleChange}/><br/>
					password:<input name="password" type="password" onChange={this.handleChange}/>
					<input type="submit" value="Submit"/>
				</form>	
			</div>
			)
	}
}

export default Signup;