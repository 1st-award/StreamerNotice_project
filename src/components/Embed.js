import { Card, ButtonGroup, Button } from "react-bootstrap";
import CSwitch from "./CSwitch";

function Embed({ name, color, icon, info, context }) {
  // TODO 카페, 유튜브, 트위치, 트위터 최신 링크 걸기
  const midColor = `#${(parseInt(color.substr(1), 16) + 800).toString(16)}`;
  const darkColor = `#${(parseInt(color.substr(1), 16) + 300).toString(16)}`;
  const URL = "https://mooro.asuscomm.com:18000/img/stellive.png";
  return (
    <Card
      style={{
        padding: "1.5em .5em .5em",
        borderRadius: "2em",
        textAlign: "center",
        boxShadow: "0 5px 10px rgba(0,0,0,.2)",
        margin: "0 auto",
        background: `linear-gradient(120deg, ${color} 30%, ${midColor} 50%, ${darkColor} 90%)`,
      }}
    >
      <Card.Img
        variant="top"
        src={icon}
        alt={name}
        onError={(e) => (e.target.src = URL)}
        style={{
          borderRadius: "50%",
          margin: "0 auto",
          boxShadow: "0 0 10px rgba(0,0,0,.2)",
        }}
      />
      <Card.Body>
        <Card.Title
          style={{
            fontWeight: "700",
            fontSize: "1.5em",
            backgroundImage:
              "linear-gradient(to right, transparent 5%, #eeeeee 20%, #eeeeee 80%, transparent 95%)",
          }}
        >
          {`${name}\u00A0`}
          <CSwitch check={info === "ON" ? true : false} />
        </Card.Title>
        <Card.Text
          style={{
            height: "3em",
            backgroundImage:
              "linear-gradient(to right, transparent 0%, #eeeeee 20%, #eeeeee 80%, transparent 100%)",
          }}
        >
          {context}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup aria-label="Basic example">
          <Button variant="link">
            <img
              src={"https://mooro.asuscomm.com:18000/img/twitch.png"}
              alt="twitch"
              width="30"
              height="30"
            />
          </Button>
          <Button variant="link">
            <img
              src={"https://mooro.asuscomm.com:18000/img/youtube.png"}
              alt="youtube"
              width="30"
              height="30"
            />
          </Button>
          <Button variant="link">
            <img
              src={"https://mooro.asuscomm.com:18000/img/twitter.png"}
              alt="twitter"
              width="40"
              height="30"
            />
          </Button>
          <Button variant="link">
            <img
              src={"https://mooro.asuscomm.com:18000/img/naver_cafe.png"}
              alt="naver cafe"
              width="30"
              height="30"
            />
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
}

export default Embed;
