import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import hangedMan from "../gamemode/hangingman/6.jpg";
import "./style.css";
const GameOver = ({ gameOver }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (gameOver) {
      setIsModalOpen(true);
    }
  }, [gameOver]);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="game-over">
      <div className="game-over-modal">
        <Modal
          width={1000}
          open={isModalOpen}
          onOk={handleOk}
          cancelButtonProps={{ style: { display: "none" } }}
          okText="Tiếp tục ..."
        >
          <h1>GAME OVER</h1>
          {/* <div className="game-over-modal-content">
            <img src={hangedMan} alt="Hanged man" />
            <div className="game-over-modal-content-text">
              <p>Hôm qua cười nói hi hi</p>
              <p>
                Nay bị treo cổ tại vì <span>CHƠI NGU</span>
              </p>
            </div>
          </div> */}
        </Modal>
      </div>
    </div>
  );
};
export default GameOver;
