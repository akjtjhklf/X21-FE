import React, { useState } from "react";
import "./style.css";

const HangingMan = () => {
  // Chọn từ bí mật ngẫu nhiên
  const words = ["chiến thắng", "thủ đô", "việt nam", "lịch sử", "tình bạn"];
  const randomIndex = Math.floor(Math.random() * words.length);
  const [word, setWord] = useState(words[randomIndex]);

  const [guesses, setGuesses] = useState([]); // Array to store guessed letters
  const [remainingGuesses, setRemainingGuesses] = useState(6); // Number of remaining guesses
  const [gameOver, setGameOver] = useState(false); // Game state (over or not)
  const [correctLetters, setCorrectLetters] = useState([]); // Array to store correctly guessed letters

  const handleGuess = (letter) => {
    // Validate input (optional)
    if (letter.length !== 1 || !letter.match(/^[a-zA-Z]+$/)) {
      return; // Invalid input
    }

    letter = letter.toLowerCase();

    if (guesses.includes(letter) || gameOver) {
      return;
    }

    setGuesses([...guesses, letter]);

    const isCorrect =
      word.includes(letter) || word.includes(letter.toUpperCase());
    if (!isCorrect) {
      setRemainingGuesses(remainingGuesses - 1);

      if (remainingGuesses === 0) {
        setGameOver(true);
      }
    } else {
      setCorrectLetters([...correctLetters, letter]);
    }
  };

  const handleReset = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const newWord = words[randomIndex];
    setWord(newWord);

    setGuesses([]);
    setRemainingGuesses(6);
    setGameOver(false);
    setCorrectLetters([]);
  };

  const getLetterDisplay = () => {
    return word.split("").map((letter) => (
      <span
        key={letter}
        className={`answer-letter ${
          correctLetters.includes(letter.toLowerCase()) ? "correct" : ""
        }`}
      >
        {correctLetters.includes(letter.toLowerCase()) ? letter : "_"}
      </span>
    ));
  };

  return (
    <div className="main">
      <div className="close">x</div>
      <div className="main-title">Chủ đề : Ngẫu nhiên</div>
      <div className="question">
        <p>
          {remainingGuesses > 0
            ? `Còn lại ${remainingGuesses} lượt đoán.`
            : "Đã hết lượt đoán!"}
        </p>
        <p>{gameOver ? `Từ bí mật là: ${word}` : getLetterDisplay()}</p>
        {gameOver ? <button onClick={handleReset}>Chơi lại</button> : null}
      </div>
      <div className="answer">
        <input type="text" maxLength={word.length} placeholder="Nhập đáp án" />
      </div>
      <div className="keyboard">
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((letter) => (
          <button key={letter} onClick={() => handleGuess(letter)}>
            {letter.toUpperCase()}
          </button>
        ))}
        <br />
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
          <button key={letter} onClick={() => handleGuess(letter)}>
            {letter.toUpperCase()}
          </button>
        ))}
        <br />
        {["Z", "X", "C", "V", "B", "N", "M"].map((letter) => (
          <button key={letter} onClick={() => handleGuess(letter)}>
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HangingMan;
