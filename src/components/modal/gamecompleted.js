import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import "./style.css";

const GameCompleted = ({ gameCompleted }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (gameCompleted) {
      setIsModalOpen(true);
    }
  }, [gameCompleted]);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="game-over">
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <div className="game-over-modal">
        <Modal
          width={1000}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleOk}
          cancelButtonProps={{ style: { display: "none" } }}
          okText="Tiếp tục ..."
        >
          <h1>CONGRATULATION !</h1>
          {/* <div className="game-over-modal-content">
            <div className="game-over-modal-content-text">
              <p>Coi kìa, bạn khá quá đi</p>
              <p>
                Trẻ con <span>NĂM TUỔI</span> chắc gì giỏi hơn :)
              </p>
            </div>
          </div> */}
        </Modal>
      </div>
    </div>
  );
};
export default GameCompleted;
