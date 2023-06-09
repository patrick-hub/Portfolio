import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl, liveDemo, githubLink}) => {

return (
    <Col sm={6} md={4}>
    <div className="proj-imgbx">
        <img src={imgUrl} alt="" className="proj-img"/>

        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
      
    </div>
    <div className="project-btn">
    <button type="" className="mx-3 mb-4"><a href="">Github</a></button>
    <button type=""> <a href={liveDemo}>Live Demo</a></button> 
    </div>
    </Col>
)
}