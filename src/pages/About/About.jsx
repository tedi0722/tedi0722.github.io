import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import QueueAnim from 'rc-queue-anim';
// components
import MyButton from '../../components/MyButton/MyButton';
// assets
import ProfilePic from '../../assets/ProfilePic.JPG';

import './About.css'

const About = () =>
    <Grid>
        <QueueAnim animConfig={{ translateX: [0, 100], opacity: [1, 0] }}>
            <Jumbotron key="1" style={styles.jumbotron} className="text-center">
                <QueueAnim>
                    <h2 key="2" style={styles.h2}>Hello, I'm Ted,</h2>
                    <h2 key="3" style={styles.h2}>software engineer.</h2>
                    <h2 key="4" style={styles.h2}>Nice to meet you!</h2>
                    <br></br>
                    <div key="5">
                        <MyButton path="/" buttonName="View Work" />
                    </div>
                </QueueAnim>
            </Jumbotron>
                <Row key="1" style={styles.aboutWrapper} className="show-grid text-center about-wrapper">
                    <Col key="1" xs={12} md={4} style={styles.profilePicWrapper}>
                        <Image circle style={styles.profilePic} src={ProfilePic} />
                    </Col>

                    <Col key="2" xs={12} md={8} style={styles.bioWrapper}>
                        <p style={styles.paragraph}>
                            I'm a software engineer who wants to help a company grow
                            through building and improving its applications and online presence.
                            I enjoy decomposing and solving complicated problems and I’m always intrigued
                            by the different possibilities and solutions that lies ahead.
                            I am detail oriented and I want to use my skills to ensure
                        a business grows and remains on the cutting edge.</p>
                        <p style={styles.paragraph}>
                            When I'm not working, I love being outdoors, going on road trips, and shooting landscape photos.
                    </p>
                        <p style={styles.paragraph}>
                            I am a hard worker and consider myself a lifelong learner.
                            I’m confident that I’ll be able to contribute positively and I’m excited
                            about what the future holds for my career.
                    </p>
                        <p style={styles.paragraph}>
                            If you'd like to learn more about me,
                        feel free to reach out on the <Link style={styles.link} to="/Contact">contact page</Link>.
                    </p>
                    </Col>
                </Row>
        </QueueAnim>
    </Grid>

const styles = {
    jumbotron: {
        textAlign: "center",
        background: "#101010",
        border: "1px solid lightgrey",
        height: 300,
        paddingTop: 40,
        marginBottom: 80

    },
    h2: {
        margin: 10,
        fontSize: 30
    },
    profilePicWrapper: {
        padding: 20
    },
    profilePic: {
        width: 300,
        padding: 7,
        border: "1px dashed"
    },
    aboutWrapper: {
        display: "flex",
        alignItems: "start",
        minHeight: "calc(100vh)"
    },
    bioWrapper: {
        padding: 20,
        marginRight: 20,
    },
    paragraph: {
        fontSize: 16,
        fontFamily: 'Cormorant Garamond',
        letterSpacing: 1.1,
        marginBottom: 30
    },
    link: {
        color: "lightskyblue",
        fontSize: 20
    }
}

export default About;

