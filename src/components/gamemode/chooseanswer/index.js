import React from "react";
import "./style.css";

const ChooseAnswer = () => {
  return (
    <div className="main">
      <div className="close">x</div>
      <div className="main-title">Chủ đề : Lịch sử</div>
      <div className="header-title">
        <div>Câu hỏi : 1/20</div>
        <div>Thời gian còn lại : 10s</div>
      </div>
      <div className="question">
        <p>Loài người hiện có mấy chủng tộc chính ?</p>
      </div>
      <div className="answer">
        <div className="answer-1 a1">A : 3</div>
        <div className="answer-1 b2">B : 4</div>
        <div className="answer-1 c3">C : 2</div>
        <div className="answer-1 d4">D : 1</div>
      </div>
    </div>
  );
};

export default ChooseAnswer;
