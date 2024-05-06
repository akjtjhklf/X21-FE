import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";

const GameResult = ({
  setIsGameOver,
  pointCount,
  passQuestionCount,
  totalQuestion,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        open={() => setIsGameOver(true)}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        closeIcon={null}
      >
        <div className="second-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            className="trophy-image"
            alt="trophy"
          />
          <p className="main-heading">YOUR SCORE</p>
          <p>
            Bạn đã vượt qua{" "}
            <span style={{ color: "white" }}>{passQuestionCount}</span> trên
            tổng số <span style={{ color: "white" }}>{totalQuestion}</span> câu
            hỏi !
          </p>
          <p className="your-score">
            Và giành được : <span style={{ color: "white" }}>{pointCount}</span>{" "}
            điểm
          </p>

          <button
            type="button"
            className="play-button"
            onClick={() => navigate("/")}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              className="restart"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GameResult;
