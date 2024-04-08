import React, { useState, useEffect } from "react";
import { Row, Col, Flex } from "antd";

import Clock from "../clock";

import "./style.css";
import a0 from "./0.jpg";
import a1 from "./1.jpg";
import a2 from "./2.jpg";
import a3 from "./3.jpg";
import a4 from "./4.jpg";
import a5 from "./5.jpg";
import a6 from "./6.jpg";

const failImages = [a0, a1, a2, a3, a4, a5, a6];
const fakeKeys = [
  "A",
  "Á",
  "Â",
  "E",
  "Ê",
  "Ế",
  "U",
  "Ư",
  "À",
  "Ô",
  "I",
  "Ổ",
  "Ộ",
  "K",
  "L",
  "B",
  "Đ",
  "C",
  "M",
  "X",
  "V",
  "R",
  "S",
  "G",
  "L",
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let toUpper = function (x) {
  return x.toUpperCase();
};

const gameDuration = 60;

const HangingMan = ({
  question,
  correctAnswer,
  // currentQuestionIndex,
  // totalQuestion,
  onPass,
  onFail,
  onOverTime,
}) => {
  const [failCount, setFailCount] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [keyboard, setKeyboard] = useState([]);
  const [time, setTime] = useState(gameDuration);

  const initGame = (correctAnswer) => {
    let answerMask = "";
    const newKeyboard = [];
    const tmp = correctAnswer.split("");
    for (let character of tmp) {
      if (character !== " ") {
        answerMask += "*";
        if (!newKeyboard.includes(character)) {
          newKeyboard.push(character);
        }
      } else {
        answerMask += " ";
      }
    }
    for (let fakeKey of fakeKeys) {
      if (!newKeyboard.includes(fakeKeys)) {
        newKeyboard.push(fakeKey);
      }
    }

    shuffleArray(newKeyboard);
    setKeyboard(newKeyboard);
    setCurrentAnswer(answerMask);
    setTime(gameDuration);
  };

  useEffect(() => {
    initGame(correctAnswer);
  }, [correctAnswer]);

  const guess = (letter) => {
    if (failCount < 6) {
      let isMatch = false;
      let newCurrentAnswer = currentAnswer.split("");
      for (let i = 0; i < correctAnswer.length; i++) {
        if (correctAnswer[i] === letter) {
          isMatch = true;
          newCurrentAnswer[i] = letter;
        }
      }
      if (isMatch) {
        setCurrentAnswer(newCurrentAnswer.join(""));
        console.log(correctAnswer.toString(), newCurrentAnswer.toString());
        if (correctAnswer === newCurrentAnswer.join("")) {
          onPass();
        }
      } else {
        const newFailCount = failCount + 1;
        setFailCount(newFailCount);

        if (newFailCount >= 6) {
          setTimeout(() => {
            onFail && onFail();
          }, 1500);
        }
      }
    }
  };

  return (
    <div className="hanging-man">
      <Row>
        <Col span={18}>
          <div className="hanging-man-question">
            <Flex gap={20} align="center" style={{ marginBottom: "10px" }}>
              <div className="hanging-man-question-content">
                <span>{question}</span>
              </div>
              <Clock
                time={time}
                onCountDown={setTime}
                onStop={() => {
                  console.log("Time over!");
                  setFailCount(6);
                  setTimeout(() => {
                    onFail && onFail();
                  }, 1500);
                }}
              />
            </Flex>
            <div className="hanging-man-answer">{currentAnswer}</div>
          </div>
        </Col>
        <Col span={4}>
          <img src={failImages[failCount]} alt="fail" />
        </Col>
        <Col
          span={22}
          style={{
            display: "Flex",
            marginTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <div className="hanging-man-keyboard">
            {keyboard.map((item) => {
              return (
                <button
                  type="button"
                  onClick={() => guess(item)}
                  className="hanging-man-keyboard-key"
                  disabled={failCount == 6}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="hanging-man-quote">
            "Nếu mà khó quá, thì mình bỏ qua. Dù sao câu này học sinh lớp 5 cũng
            làm được."
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HangingMan;

//Có 1 lỗi :
// Khi game over, chưa reset được phần trả lời về lại dạng *
