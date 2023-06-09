import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import project1 from "../assets/img/projectImg1.png"
import project2 from "../assets/img/projectImg2.png"
import project3 from "../assets/img/projectImg3.png"



export const Projects = () => {

    const projects = [
        {
          title: "Recipe Menu App",
          imgUrl: project1,
          liveDemo: "https://recipee-menu-app.netlify.app/",
          githubLink: "https://github.com/patrick-hub/forkify-recipe-menu-app"
          
        },
        {
          title: "Menu Item Selector",
          description: "",
          imgUrl: project2,
          liveDemo: "https://menu-selector.netlify.app/",
          githubLink: "https://github.com/patrick-hub/MenuItem_Selector"
        },
        {
            title: "Finance Tracker App",
            description: "",
            imgUrl: project3,
            liveDemo: "https://finance-app-tracker-bdd4a.web.app/",
          githubLink: "https://github.com/patrick-hub/Finance-Tracker-App"
            
          },
      ];

return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h1>Projects</h1>
                <Tab.Container id='project-tabs' defaultActiveKey="first" >
                <Nav variant="pills" className=" nav-pills mb-5 mt-4 justify-content-center align-items-center" id="pills">
                <Nav.Item>
                    <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Contact Me</Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {projects.map((project, index) => {
                            return (
                                <ProjectCard 
                                key={index}
                                {...project}
                                /> 
                            )
                        })}

                    </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
)
}