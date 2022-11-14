import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Vauxhall from "../../assets/images/featured products/vauxhall.jpg"
import VW from "../../assets/images/featured products/VW Caddy.jpg"
import Hole from "../../assets/images/featured products/9 Hole.jpg"
import DoubleRoom from "../../assets/images/featured products/Double Room.jpg"
import styles from "../../styles/FeaturedAdds.module.css";
import { ImLocation } from 'react-icons/im';
import { CiClock2 } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';

const FeaturedAdds = () => {
  return (
    <Container>
      <Row>
      <h3 className="p-3">Featured Adds</h3>
        <Col md={3} sm={6}>
            <Card className={styles.cardContainer}>
            {/* <Card.Img variant="top" src="../../assets/images/featured products/vauxhall.jpg" /> */}
            <Image height={200} width={286} src={Vauxhall} alt='sd' />
            <Card.Body>
            <Card.Title>
                <span className={styles.title}>Vauxhall, CORSA, Hatchback, 2010, Manual, 1229 (cc), 3 doors</span>
            </Card.Title>
            <Card.Text>Private : Date available 04 Nov 2022</Card.Text>
            <Card.Text>
                <span className={styles.cost}>$1750</span>
            </Card.Text>
            <div className={styles.iconBox}>
                <div>
                    <ImLocation/>
                </div>
                <div>
                    <span>East Dulwich</span>
                </div>
            </div>
            <div className={styles.iconBox}>
                <div>
                    <CiClock2/>
                </div>
                <div>
                    <span>5 Days Ago</span>
                </div>
            </div>
            <button className={styles.iconBtn}><FaRegHeart color="red" className={styles.favrioutIcon} /></button>
            </Card.Body>
        </Card>
        </Col>
        <Col md={3} sm={6}>
            <Card className={styles.cardContainer}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Image height={200} width={286} src={VW} alt='sd' />
            <Card.Body>
            <Card.Title>
                <span className={styles.title}>Vauxhall, CORSA, Hatchback, 2010, Manual, 1229 (cc), 3 doors</span>
            </Card.Title>
            <Card.Text>Private : Date available 04 Nov 2022</Card.Text>
            <Card.Text>
                <span className={styles.cost}>$1750</span>
            </Card.Text>
            <div className={styles.iconBox}>
                <div>
                    <ImLocation/>
                </div>
                <div>
                    <span>East Dulwich</span>
                </div>
            </div>
            <div className={styles.iconBox}>
                <div>
                    <CiClock2/>
                </div>
                <div>
                    <span>5 Days Ago</span>
                </div>
            </div>
            <button className={styles.iconBtn}><FaRegHeart color="red" className={styles.favrioutIcon} /></button>
            </Card.Body>
        </Card>
        </Col>
        <Col md={3} sm={6}>
            <Card className={styles.cardContainer}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Image height={200} width={286} src={Hole} alt='sd' />
            <Card.Body>
            <Card.Title>DOUBLE ROOM OPOSITE STATION BUS TRAIN</Card.Title>
            <Card.Text>Private : Date available 04 Nov 2022</Card.Text>
            <Card.Text>
                <span className={styles.cost}>$1750</span>
            </Card.Text>
            <div className={styles.iconBox}>
                <div>
                    <ImLocation/>
                </div>
                <div>
                    <span>East Dulwich</span>
                </div>
            </div>
            <div className={styles.iconBox}>
                <div>
                    <CiClock2/>
                </div>
                <div>
                    <span>5 Days Ago</span>
                </div>
            </div>
            <button className={styles.iconBtn}><FaRegHeart color="red" className={styles.favrioutIcon} /></button>
            </Card.Body>
        </Card>
        </Col>
        <Col md={3} sm={6}>
            <Card className={styles.cardContainer}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Image height={200} width={286} src={DoubleRoom} alt='sd' />
            <Card.Body>
            <Card.Title>DOUBLE ROOM OPOSITE STATION BUS TRAIN</Card.Title>
            <Card.Text>Private : Date available 04 Nov 2022</Card.Text>
            <Card.Text>
                <span className={styles.cost}>$1750</span>
            </Card.Text>
            <div className={styles.iconBox}>
                <div>
                    <ImLocation/>
                </div>
                <div>
                    <span>East Dulwich</span>
                </div>
            </div>
            <div className={styles.iconBox}>
                <div>
                    <CiClock2/>
                </div>
                <div>
                    <span>5 Days Ago</span>
                </div>
            </div>
            <button className={styles.iconBtn}><FaRegHeart color="red" className={styles.favrioutIcon} /></button>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedAdds;
