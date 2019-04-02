'use strict';

import React, {Component} from 'react';


//Q13
import AddUser from './AddUser';
//Q11
import Users from './Users';

export default class AppContainer extends Component{
    constructor(props){
        super(props);
        //Q11
        this.state = {
            users : [{
                id:Date.now(),
                name:'John'
            }]
        }


    }

    //Q13
    addUser(user){
        this.setState(state=>({
            users: state.users.concat({id: Date.now() ,name: user.name})
        }))
    }






    render() {
        return <div>
           // <h2>Hello world</h2>
            <h2>Users App</h2>
            <AddUser addUser={user => this.addUser(user)}/>
            <Users users={this.state.users}/>

        </div>;
    }

}