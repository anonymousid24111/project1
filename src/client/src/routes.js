import React from 'react';

import Column2 from './components/Column2';
import NotFoundPage from './components/NotFoundPage';
import Guide from './components/Guide';
import Pay from './components/Pay';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';


const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Column2 />
    },
    {
        path : '/pay',
        exact : false,
        main : () => <Pay />
    },
    {
        path : '/guide',
        exact : false,
        main :() => <Guide />
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/Login',
        exact : false,
        main : () => <Login />
    },
    {
        path : '/Signup',
        exact : false,
        main : () => <Signup />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage/>
    }
];

export default routes;