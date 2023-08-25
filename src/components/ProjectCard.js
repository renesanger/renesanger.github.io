import { Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, isIos}) => {
    let defaultHeight = imgUrl.height;
    const imgHeight = isIos ? defaultHeight : "10%"
    const size = isIos ? 2 : 4;

    return (
        <Col sm={6} md={size}>
            <div className="proj-imgbx">
                <img src={imgUrl} style={{height:imgHeight}}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}