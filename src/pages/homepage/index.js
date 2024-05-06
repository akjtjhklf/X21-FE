import React, { useState } from "react";
import { Row, Col } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import Ranking from "../../components/homepage/ranking";
import ChooseSubject from "../../components/homepage/chooseSubject.js";

import "./style.css";

const HomePage = () => {
  const [isStart, setIsStart] = useState(false);

  const handleStart = () => {
    setIsStart(true);
  };
  return (
    <div className="row homepage-main">
      <Row>
        <Col span={8}>
          <Ranking />
        </Col>
        <Col span={16}>
          {isStart ? (
            <ChooseSubject setIsStart={setIsStart} />
          ) : (
            <div className="hompage-main-start">
              <PlayCircleOutlined
                className="homepage-main-start-button"
                onClick={() => handleStart()}
              />
              <p>Click to start</p>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
