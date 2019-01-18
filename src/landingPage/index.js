import React from 'react';
import { LinkWithStyles } from '../sharedComponents';
import logo from '../logo.svg';

export default () => 
    <div className="App">
        <header className="App-header">
        <img src='https://siliconangle.com/wp-content/blogs.dir/1/files/2018/03/YtWaNImM_400x400.jpg' />
            <p>Welcome to a proof of concept aimed at diving into AWS features</p>
            {/* <p>If you would like to participate, please click the link below</p>
            <LinkWithStyles to='/participate' linkText="Register Here" />
            <LinkWithStyles to='/login' linkText="Login Here" /> */}
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>    