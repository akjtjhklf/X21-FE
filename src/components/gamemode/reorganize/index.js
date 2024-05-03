import React, { useEffect, useState } from "react";
import { Row, Col, Flex } from "antd";
import "./style.css";
import Clock from "../clock";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const gameDuration = 600;

const ReorganizeGame = ({
  question,
  correctAnswer,
  currentQuestionIndex,
  totalQuestion,
  onPass,
  onFail,
  onOverTime,
}) => {
  const [answer, setAnswer] = useState({
    list1: [],
    list2: [],
  });

  const [time, setTime] = useState(gameDuration);

  const initGame = () => {
    const list1 = shuffleArray([...correctAnswer]);
    setAnswer({ list1: list1, list2: [] });
    setTime(gameDuration);
  };

  useEffect(() => {
    initGame();
  }, [correctAnswer, question]);

  const chooseAnswer = (value) => {
    setAnswer((prev) => ({
      ...prev,
      list1: prev.list1.filter((item) => item !== value),
      list2: [...prev.list2, value],
    }));
  };

  const reverseAnswer = (value) => {
    setAnswer((prev) => ({
      ...prev,
      list1: [...prev.list1, value],
      list2: prev.list2.filter((item) => item !== value),
    }));
  };

  const checkAnswer = () => {
    answer.list2.toString();
    if (answer.list2.toString() == correctAnswer.toString()) {
      console.log("passed");
      onPass();
    } else {
      console.log("false");
      onFail();
    }
  };

  return (
    <div className="reorganize-game">
      <Row>
        <Col span={24}>
          <div className="reorganize-game-count">
            <Flex
              gap={20}
              align="center"
              justify="space-between"
              style={{ marginBottom: "10px" }}
            >
              <div className="reorganize-game-count-question">
                <span>
                  Câu:{currentQuestionIndex + 1}/{totalQuestion}
                </span>
              </div>
              <Clock
                time={time}
                onCountDown={setTime}
                onStop={() => {
                  console.log("Time over!");
                  onFail && onFail();
                }}
              />
            </Flex>
          </div>
        </Col>
        <Col span={24}>
          <div className="reorganize-game-question">
            <Flex
              gap={20}
              align="center"
              justify="space-between"
              style={{ marginBottom: "10px" }}
            >
              <span>{question}</span>
            </Flex>
          </div>
        </Col>
        <Col span={24}>
          <div className="reorganize-game-puzzle1">
            {answer.list1.map((item) => (
              <span key={item} onClick={() => chooseAnswer(item)}>
                {item}
              </span>
            ))}
          </div>
        </Col>
        <Col span={24}>
          <div className="reorganize-game-puzzle2">
            {answer.list2.map((item) => (
              <span key={item} onClick={() => reverseAnswer(item)}>
                {item}
              </span>
            ))}
          </div>
          <button
            className="reorganize-button-submit"
            onClick={() => checkAnswer()}
          >
            Submit
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ReorganizeGame;
