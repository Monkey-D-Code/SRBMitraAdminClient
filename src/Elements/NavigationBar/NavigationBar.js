import React , {Component} from 'react';
import './NavigationBar.css';

import NavMenuItem from '../../components/NavMenuItem/NavMenuItem';

class NavigationBar extends Component{

    

    render(){

        const NavMenuItems = ['Products' , 'Brands' , 'Product Groups' , 'Customers' , 'Orders'];

        return(
            <div className = "NavigationBar">
                <div className = "Brand">SRB Mitra</div>
                <div className = "NavigationMenu">
                    <NavMenuItem name={NavMenuItems[0]}/>
                    <NavMenuItem name={NavMenuItems[1]}/>
                    <NavMenuItem name={NavMenuItems[2]}/>
                    <NavMenuItem name={NavMenuItems[3]}/>
                    <NavMenuItem name={NavMenuItems[4]}/>
                </div>

            </div>
        );

    }


}

export default NavigationBar;