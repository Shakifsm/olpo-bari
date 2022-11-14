import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import propertyIcon from '../../assets/images/category images/property.png';
import VehicleIcon from '../../assets/images/category images/car_1-removebg-preview.png';
import MobileIcon from '../../assets/images/category images/mobile.png';
import ElectroniesIcon from '../../assets/images/category images/electronics 1.png';
import FashionIcon from '../../assets/images/category images/fashion 2.jpg';
import SportsIcon from '../../assets/images/category images/sports.png';
import JobIcon from '../../assets/images/category images/job.png';
import EducationIcon from '../../assets/images/category images/education.png';
import BusinessIcon from '../../assets/images/category images/construction.png';
import styles from "../../styles/Categories.module.css";
import Image from 'next/image';

const Categories = () => {

    const categoryItems = [
        {
            id : 1,
            name : 'Property',
            icon : propertyIcon,
            adds : 1250
        },
        {
            id : 2,
            name : 'Vehicles',
            icon : VehicleIcon,
            adds : 1869
        },
        {
            id : 3,
            name : 'Mobiles',
            icon : MobileIcon,
            adds : 2658
        },
        {
            id : 4,
            name : 'Electronies',
            icon : ElectroniesIcon,
            adds : 7549
        },
        {
            id : 5,
            name : 'Fashion',
            icon : FashionIcon,
            adds : 3698
        },
        {
            id : 6,
            name : 'Sports',
            icon : SportsIcon,
            adds : 7456
        },
        {
            id : 7,
            name : 'Job',
            icon : JobIcon,
            adds : 3265
        },
        {
            id : 8,
            name : 'Education',
            icon : EducationIcon,
            adds : 4128
        },
        {
            id : 9,
            name : 'Business & Construction',
            icon : BusinessIcon,
            adds : 6352
        },
    ]

    return (
        <Container>
            <Row>
                <h3>Category</h3>
                {
                    categoryItems?.map(item => 
                        <Col key={item.id} md={4} sm={4} xs={6} className='p-3'>
                            <div className={styles.categoryBox}>
                                <div className={styles.categoryIon}>
                                    <Image height={40} width={40} src={item.icon} alt='categoryIcon'/>
                                </div>
                                <div className={styles.categoryName}>
                                    <h5>{item.name}</h5>
                                    <span>{item.adds} adds</span>
                                </div>
                            </div>
                        </Col>
                        )
                }
            </Row>
        </Container>
    );
};

export default Categories;