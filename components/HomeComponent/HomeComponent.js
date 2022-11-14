import React from 'react';
import NavBar from '../NavBar/NavBar';
import Categories from '../Categories/Categories';
import FeaturedAdds from '../FeaturedAdds/FeaturedAdds';

const HomeComponent = () => {
    return (
        <div style={{backgroundColor:'#F1F1F1'}}>
            <NavBar />
            <Categories />
            <FeaturedAdds />
        </div>
    );
};

export default HomeComponent;