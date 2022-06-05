import React, { useState } from "react";

const LetterKey = ({ letter, letters, setLetters }) => {
  const [selected, setSelected] = useState(letter.selected);

  const handleClick = () => {
    setLetters([
      ...letters.map((alphabetLetter) =>
        alphabetLetter.value === letter.value
          ? { ...alphabetLetter, selected: !letter.selected }
          : alphabetLetter
      ),
    ]);
    setSelected(!selected);
  };

  return (
    <button
      className={`${
        selected
          ? "bg-lime-500 hover:bg-lime-400 text-white"
          : "bg-gray-100 hover:bg-gray-200 text-gray-600"
      } w-20 flex justify-center items-center m-1 px-6 py-4 rounded text-xl uppercase`}
      onClick={handleClick}
    >
      {letter.value}
    </button>
  );
};

export default LetterKey;
