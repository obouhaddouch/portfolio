import React from 'react'

import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import AOS from "aos";
import 'aos/dist/aos.css';

import Paper from '@mui/material/Paper';
import img1 from '../img/img1.jpg';

const HomeContent = () => {
    AOS.init();
    return (
        <Container className='container' >

            <Row>
                <Col sm={12} xl={6} data-aos="fade-down" data-aos-delay="50" data-aos-duration="1800">
                    <Paper elevation={3} className='paper hg-150'  >
                        <p> Mijn sterke eigenschappen zijn creatief behulpzaam gemotiveerd en zelfstandig. </p>

                    </Paper>
                </Col>
                <Col sm={12} xl={6} data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
                    <Paper elevation={3} className='paper hg-150'>
                        <p> Mijn Zwakke eigenschappen zijn kritisch en Introversie. </p>

                    </Paper>
                </Col>

            </Row>


            <Paper className='img-paper' data-aos="fade-down" data-aos-delay="50" data-aos-duration="1800">

                <img className='img-1' src={img1} />

            </Paper>


            <div >


                <Row data-aos="fade-down" data-aos-delay="50" data-aos-duration="1800">
                    <Col sm={12} xl={12} >
                        <Paper elevation={3} className='paper' >
                            <h3 className='p-tit'> Waarom heb ik voor deze opleiding gekozen? </h3>

                            <p >
                                Ik heb voor deze opleiding gekozen omdat ik interesse heb in Software en ik heb voor de opleiding een paar dingen geleerd. Ik vind web development heel leuk en ik wil daarmee verder gaan.
                            </p>

                        </Paper>
                    </Col>

                </Row>

            </div>

            <Row data-aos="fade-down" data-aos-delay="50" data-aos-duration="2500">
                <Col sm={12} xl={12} >
                    <Paper elevation={3} className='paper' >
                        <h3 className='p-tit'> Eigenschappen </h3>

                        <Row>
                            <Col sm={12} xl={6} >
                                <ListGroup variant="flush" className='list-g'>
                                    <ListGroup.Item className='list-i'>Zelfstandig werken</ListGroup.Item>
                                    <ListGroup.Item className='list-i'>Problemen oplossen</ListGroup.Item>
                                    <ListGroup.Item className='list-i'>Anderen helpen</ListGroup.Item>
                                    <ListGroup.Item className='list-i'></ListGroup.Item>
                                </ListGroup>
                            </Col>

                            <Col sm={12} xl={6} >
                                <ListGroup variant="flush" className='list-g'>
                                    <ListGroup.Item className='list-i'>Advies geven</ListGroup.Item>
                                    <ListGroup.Item className='list-i'>Mijn fouten verbeteren</ListGroup.Item>
                                    <ListGroup.Item className='list-i'>Mijn eigen werk organiseren</ListGroup.Item>

                                </ListGroup>
                            </Col>

                        </Row>


                    </Paper>
                </Col>

            </Row>

        </Container>

    )

}

export default HomeContent