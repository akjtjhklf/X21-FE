import React, { useState, useEffect } from "react";
import axios from "axios";
import GameOver from "../modal/gameover";
import GameCompleted from "../modal/gamecompleted";

import ChooseAnswer from "../gamemode/chooseanswer";
import Reorganize from "../gamemode/reorganize";
import HangingMan from "../gamemode/hangingman";

const TakeChallenge = ({ subjectId, challengeType }) => {
  const [questions, setQuestions] = useState([]);
  const [passQuestionCount, setPassQuestionCount] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get("http://localhost:3001/qnas/", {
          params: { subjectId: subjectId, challengeType: challengeType },
        });
        if (response.status == 200) {
          setQuestions(response.data.questions);
          console.log(response);
        } else {
          console.log("Error fetching");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestion();
  }, []);

  const totalQuestion = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  // console.log(currentQuestionIndex);
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
      {gameOver && <GameOver gameOver={gameOver} />}
      {gameCompleted && <GameCompleted gameCompleted={gameCompleted} />}
      {currentQuestion?.challengeType === "qnas" && (
        <ChooseAnswer
          question={currentQuestion.question}
          answers={currentQuestion.answers}
          correctAnswer={currentQuestion.rightAnswer}
          totalQuestion={totalQuestion}
          currentQuestionIndex={currentQuestionIndex}
          onPass={onPass}
          onFail={onFail}
        />
      )}
      {/* {challengeType === "hangman" && (
        <HangingMan
          question={currentQuestion.question}
          //   totalQuestion={totalQuestion}
          currentQuestionIndex={currentQuestionIndex}
          correctAnswer={currentQuestion.rightAnswer}
          onPass={onPass}
          onFail={onFail}
        />
      )}
      {challengeType === "arrange" && (
        <Reorganize
          question={currentQuestion.question}
          totalQuestion={totalQuestion}
          currentQuestionIndex={currentQuestionIndex}
          correctAnswer={currentQuestion.rightAnswer}
          onPass={onPass}
          onFail={onFail}
        />
      )} */}
    </div>
  );
};

export default TakeChallenge;
