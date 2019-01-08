import React , {Component} from 'react';
import './NavMenuItem.css'


class NavMenuItem extends Component{

    render(){

        return(

            <div className="NavMenuItem" id={this.props.name}>{this.props.name}</div>
        );

    };


}

export default NavMenuItem;