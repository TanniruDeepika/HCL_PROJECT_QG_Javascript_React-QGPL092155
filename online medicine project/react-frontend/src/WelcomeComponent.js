import React, { Component } from 'react'
class WelcomeComponent extends Component {
    Logout() {
      this.props.history.push('/Logout');      
    }
   
   
    render() {
        
        const{username}=this.props.match.params;
        console.log(username);
        
        return(
            <div>
                <h3>Welcome to online medicine app</h3>
            <img src="https://thumbs.dreamstime.com/b/various-different-medicines-1852803.jpg" width="1500" height="1000px"></img>
            </div>
        );
    }
}

export default  WelcomeComponent