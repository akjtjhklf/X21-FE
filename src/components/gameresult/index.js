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
          <p className="main-heading">{pointCount} điểm</p>
          <p className="main-heading-1">
            Bạn đã vượt qua {passQuestionCount} trên tổng số {totalQuestion} câu
            hỏi !
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
            CHƠI LẠI ?
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GameResult;
