import React, { useState } from "react";
import GameOver from "../modal/gameover";
import GameCompleted from "../modal/gamecompleted";

import ChooseAnswer from "../gamemode/chooseanswer";
import Reorganize from "../gamemode/reorganize";
import HangingMan from "../gamemode/hangingman";

const TakeChallenge = () => {
  const [questions, setQuestions] = useState([
    {
      _id: {
        $oid: "65f2a144e3106bd56c0f11d8",
      },
      question:
        "Tài nguyên đất của Việt Nam rất phong phú, trong đó có nhiều nhất là :",
      subject: {
        _id: {
          $oid: "65f150adc4a897b75dd547c4",
        },
        name: "Georaphy",
      },
      challengeType: "qnas",
      answers: [
        "Đất đồng cỏ",
        "Đất hoang mạc",
        "Đất phù sa",
        "Đất phù sa và đất feralit",
      ],
      rightAnswer: "Đất phù sa và đất feralit",
    },
    {
      _id: {
        $oid: "65fc13975313969603a298ec",
      },
      question: "Sắp xếp các chữ sao thành từ có nghĩa",
      subject: {
        _id: {
          $oid: "65f15091c4a897b75dd547c3",
        },
        name: "History",
      },
      challengeType: "arrange",
      rightAnswer: ["Võ", "Thị", "Sáu"],
    },
    {
      _id: {
        $oid: "65fc0d9e5313969603a298d4",
      },
      question: "Dãy núi nào chạy dọc miền Trung ?",
      subject: {
        _id: {
          $oid: "65f150adc4a897b75dd547c4",
        },
        name: "Georaphy",
      },
      challengeType: "hangman",
      rightAnswer: "TRƯỜNG SƠN",
    },
  ]);
  const [passQuestionCount, setPassQuestionCount] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const fetchData = () => {};
  const totalQuestion = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  console.log(currentQuestionIndex);
  const onPass = () => {
    console.log("Bạn đã trả lời đúng câu hỏi");
    setPassQuestionCount(passQuestionCount + 1);
    if (currentQuestionIndex < totalQuestion - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Bạn đã hoàn thành game");
      setGameCompleted(true);
    }
  };
  const onFail = () => {
    console.log("Bạn đã trả lời sai");
    if (currentQuestionIndex < totalQuestion - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Bạn đã hoàn thành game");
      setGameOver(true);
    }
  };

  return (
    <div>
      {/* {gameOver && <GameOver gameOver={gameOver} />}
      {gameCompleted && <GameCompleted gameCompleted={gameCompleted} />} */}
      {currentQuestion.challengeType === "qnas" && (
        <ChooseAnswer
          question={currentQuestion.question}
          answers={currentQuestion.answers}
          totalQuestion={totalQuestion}
          currentQuestionIndex={currentQuestionIndex}
          correctAnswer={currentQuestion.rightAnswer}
          onPass={onPass}
          onFail={onFail}
        />
      )}
      {currentQuestion.challengeType === "hangman" && (
        <HangingMan
          question={currentQuestion.question}
          //   totalQuestion={totalQuestion}
          currentQuestionIndex={currentQuestionIndex}
          correctAnswer={currentQuestion.rightAnswer}
          onPass={onPass}
          onFail={onFail}
        />
      )}
      {currentQuestion.challengeType === "arrange" && (
        <Reorganize
          question={currentQuestion.question}
          totalQuestion={totalQuestion}
          currentQuestionIndex={currentQuestionIndex}
          correctAnswer={currentQuestion.rightAnswer}
          onPass={onPass}
          onFail={onFail}
        />
      )}
    </div>
  );
};

export default TakeChallenge;
