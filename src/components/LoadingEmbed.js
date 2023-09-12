import { Card, Placeholder, Row, Col } from "react-bootstrap";

function LoadingEmbed() {
  const URL =
    "https://i.namu.wiki/i/KsNh_rVc6qErLlVW1B2V3OePNH0sW43c89H8TSyNuzNEkivjBLJPV_OHDhEEde8YFeP6ZfqiHcv_sYj6ghUtwGOOdlwYtzvjM1EaYkteU99TR50kLN146AXNoIaFTzcv-WMH6xOIcLeckEyZ8A4feQ.svg";
  const draw = () => {
    const row = [];
    for (let i = 0; i < 6; i += 2) {
      row.push(
        <Row key={i} className="justify-content-md-center">
          <Col sm>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={URL} />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={URL} />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
    }
    return row;
  };
  return <div>{draw()}</div>;
}

export default LoadingEmbed;
