//EX 5
'use Strict';
import React,{Component} from 'react';
import Users from './Users';
import AddUsers from "./AddUsers";

export default class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [{
                id: Date.now(),
                name : 'John'
            }]
        }

    }

    addUser(user){
        this.setState(state =>({
            users : state.users.concat({id : Date.now(), name:user.name})
        }))
    }

    render() {
        return <div>

            <h2>Users App</h2>
            <AddUsers addUser={user => this.addUser(user)}/>
            <Users users == {this.state.users}/>

        </div>;
    }
}