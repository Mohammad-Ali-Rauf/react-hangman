import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json'

import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()

      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
    <div className='flex flex-col max-w-[800px] gap-[2rem] mx-auto items-center'>
      <div className='text-[2rem] text-center'>Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div className='self-stretch'>
        <Keyboard activeLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
          )} inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} />
      </div>
    </div>
  )
}

export default App
