import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component{
	constructor(props) {
    super(props);
    this.state = {
      	email : "",
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
  		var {email, password}= this.state;
	    axios.post(`/login`, {email, password})
	      .then(res=>{
	      		if (res.status===200) {
	      			alert("Login Successfully!");
	      		}
	      		else {
	      			alert("Login Failed");
	      		}
	      	}
	      )
  	}
	render(){
		return(
			<div>
				<form onSubmit={e=>this.handleSubmit(e)}>
					email:<input name="email" type="text" onChange={this.handleChange}/><br/>
					password:<input name="password" type="password" onChange={this.handleChange}/>
					<input type="submit" value="Submit"/>
				</form>	
			</div>
			)
	}
}

export default Login;
