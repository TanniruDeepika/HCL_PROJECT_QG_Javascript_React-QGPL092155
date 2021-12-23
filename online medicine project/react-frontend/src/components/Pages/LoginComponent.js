
import React, { Component } from 'react'
class LoginComponent extends Component{

constructor() {
  super();
  this.state={
    err:''
  }
}



login(e) {
  e.preventDefault();
  var username=e.target.elements.username.value;
  var password=e.target.elements.password.value;

if(username=='abc' && password=='123')
 {
this.props.history.push('/Welcome/'   + username)
}
else {
  this.setState({
    err:'Invalid'
  })
}



}

  render() {
    let format={
      color:"red"
    };
    return (
      <div>
      <div style={{backgroundImage:"url(https://treatutis.com/wp-content/uploads/2021/01/5157.jpg)",width:'100%',
    height:'700px',}}>
        <h3>Login</h3>
        <span style={format}>{this.state.err!='' ? this.state.err:''}</span>
        <form method="post" onSubmit={this.login.bind(this)}>
          Username <input type="text" name="username" align="center"/>
          <br/>
          password <input type type="password" name="password" align="center"/>
          <br/>
          <input type="submit" value="Login" align="center"/>
        </form>
        </div>
     
      </div>
    );
  }

}
export default LoginComponent;