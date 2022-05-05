import React from 'react';
import "../App.css"

const Navigation = ({navigation, isActive, onHandleActiveLink}) => {

    return (
        <li className='navigation-item' data-active={isActive === navigation.navigationName} onClick={() => onHandleActiveLink(navigation.navigationName)}>
            {navigation.navigationName}
        </li>
    );
};

export default Navigation;