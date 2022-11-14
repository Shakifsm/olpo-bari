import React from 'react';
import NavBar from '../NavBar/NavBar';
import Categories from '../Categories/Categories';

const HomeComponent = () => {
    return (
        <div>
            <NavBar />
            <div style={{backgroundColor:'#F1F1F1'}}><Categories /></div>
        </div>
    );
};

export default HomeComponent;