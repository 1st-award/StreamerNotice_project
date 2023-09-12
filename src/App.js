import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoadingEmbed from "./components/LoadingEmbed";
import Embed from "./components/Embed";
import CNavbar from "./components/CNavbar";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);
  const [streamers, setStreamers] = useState([]);
  const [icons, setIcons] = useState({});
  const [boardId, setBoardId] = useState(-1);
  const [date, setDate] = useState("");
  const RowStyle = {
    float: "none",
    margin: "0 auto",
  };
  const fetchInformation = async () => {
    const res = await fetch("https://mooro.asuscomm.com:18000/streamer/info");
    const json = await res.json();
    setStreamers(json.data);
    setBoardId(json.board_id);
    setDate(json.date);
    setLoading(false);
  };
  const fetchIcon = async () => {
    const res = await fetch(
      "https://mooro.asuscomm.com:18000/streamer/image/all"
    );
    const json = await res.json();
    const icon = {};
    for (let idx = 0; idx < json.length; idx++) {
      let data = json[idx];
      const datum = {
        color: data.color,
        twitch_url: data.twitch_url,
        twitter_url: data.twitter_url,
        youtube_url: data.youtube_url,
        cafe_url: data.cafe_url,
      };
      icon[data.channel] = datum;
    }
    setIcons(icon);
  };
  const addRow = () => {
    const row = [];
    for (let i = 0; i < streamers.length; i += 2) {
      row.push(
        <Row
          key={i}
          className="justify-content-md-center"
          style={{ marginBottom: "3rem" }}
        >
          <Col sm style={{ marginBottom: "3rem" }}>
            <Embed
              name={streamers[i]["channel"]}
              color={icons[streamers[i]["channel"]].color}
              icon={icons[streamers[i]["channel"]].twitch_url}
              info={streamers[i]["info"]}
              context={streamers[i]["context"]}
            />
          </Col>
          <Col sm>
            <Embed
              name={streamers[i + 1]["channel"]}
              color={icons[streamers[i + 1]["channel"]].color}
              icon={icons[streamers[i + 1]["channel"]].twitch_url}
              info={streamers[i + 1]["info"]}
              context={streamers[i + 1]["context"]}
            />
          </Col>
        </Row>
      );
    }
    return row;
  };
  useEffect(() => {
    fetchIcon().then(() => fetchInformation());
  }, []);

  return (
    <div>
      <CNavbar date={date} />
      <br />
      {loading ? <LoadingEmbed /> : <Container>{addRow()}</Container>}
    </div>
  );
}

export default App;
