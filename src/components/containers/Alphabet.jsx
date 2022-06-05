import React, { useEffect, useState } from "react";

// Components
import LetterKey from "../modules/LetterKey";

// Data
import alphabet from "../../data/alphabet.json";
import dictionary from "../../data/dictionary.json";

const Alphabet = ({ setSearchResults }) => {
  const [letterKeys, setLetterKeys] = useState(
    alphabet.map((letter) => ({ selected: false, value: letter }))
  );

  useEffect(() => {
    const selectedLetters = letterKeys.filter(
      (letterKey) => letterKey.selected
    );

    const selectedLettersValues = selectedLetters.map(
      (selectedLetter) => selectedLetter.value
    );

    const updatedLetterValues = [];

    for (const letter of selectedLettersValues) {
      switch (letter) {
        case "a":
          updatedLetterValues.push(letter);
          updatedLetterValues.push("á");
          break;
        case "e":
          updatedLetterValues.push(letter);
          updatedLetterValues.push("é");
          break;
        case "i":
          updatedLetterValues.push(letter);
          updatedLetterValues.push("í");
          break;
        case "o":
          updatedLetterValues.push(letter);
          updatedLetterValues.push("ó");
          break;
        case "u":
          updatedLetterValues.push(letter);
          updatedLetterValues.push("ú");
          updatedLetterValues.push("ü");
          break;
        default:
          updatedLetterValues.push(letter);
          break;
      }
    }

    setSearchResults([
      ...dictionary.filter((word) => {
        return word
          .split("")
          .every((wordLetter) => updatedLetterValues.includes(wordLetter));
      }),
    ]);
  }, [letterKeys]);

  return (
    <div className="bg-white max-w-4xl mx-auto flex flex-wrap justify-center p-2 rounded">
      {letterKeys.map((letter, index) => (
        <LetterKey
          key={index}
          letter={letter}
          letters={letterKeys}
          setLetters={setLetterKeys}
        />
      ))}
    </div>
  );
};

export default Alphabet;
