import "./Home.css";
import { Card } from 'antd';
import dev from "../../assets/dev.png";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Home: React.FC = () => (
  <div className="card-container">
    <Link to="/profile" className="card-link">
      <Card className="profile-card" hoverable cover={<img alt="dev" src={dev} />}>
        <Meta title="Más sobre mi ..." style={{ fontSize: "32px" }} />
      </Card>
    </Link>
    <Link to="/project" className="card-link">
      <Card className="project-card" hoverable cover={<img alt="dev" src={dev} />}>
        <Meta title="Algunos de mis proyectos" style={{ fontSize: "32px" }} />
      </Card>
    </Link>
  </div>
);

export default Home;
