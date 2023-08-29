const HangmanWord = ({ guessedLetters, wordToGuess }: { guessedLetters: string[], wordToGuess: string }) => {
  return (
    <div className='flex gap-[.25em] text-[6rem] font-bold uppercase'>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-[.1em] border-black leading-none">
          <span className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>{letter}</span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;