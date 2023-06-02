import {Row, Col, Container} from 'react-bootstrap'

export const Banner = () => {
	return (
		<section className="banner" id="home">
			<Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span>Hello, Welcome to my Portfolio</span>
                        <h1>I'm Patrick Akuagwu</h1><span>A Frontend Engineer</span>
                        <p>I am Front End developer</p>
                    </Col>
                </Row>
            </Container>
		</section>
	);
};
