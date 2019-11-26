import React, { Component } from 'react'


export default class loginOrRegister extends Component {
    state={ 
        login: true,
        register: false
    }
    render() {
        return (
            <div>

                {this.state.login ? <login></login>: ''}
                 


                register
            </div>
        )
    }
}
