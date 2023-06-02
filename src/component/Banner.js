import {Row, Col, Container} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import profilePhoto from '../assets/img/profile-photo.jpg'




export const Banner = () => {
	return (
		<section className="banner display-flex flex-direction-column" id="home">
			<Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Hello, Welcome to my Portfolio</span>
                        <h1>I'm Patrick Akuagwu</h1>
                        <p>A Frontend Engineer</p>
                        <button onClick={() => console.log('sumit')}>Let's Connect <ArrowRightCircle/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profilePhoto} alt="header img" className='profile-photo' />
                    </Col>
                </Row>
            </Container>
		</section>
	);
};
