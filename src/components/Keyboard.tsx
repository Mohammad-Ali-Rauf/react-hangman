const KEYS: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter }: { activeLetters: string[], inactiveLetters: string[], addGuessedLetter: (letter: string) => void }) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-2'>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${isActive ? 'btn-active' : ''} ${isInactive ? 'btn-inactive' : ''} hover:bg-[#80d4ff] w-[100%] text-black cursor-pointer font-bold border-[3px] border-black bg-none aspect-square text-[2.5rem] uppercase p-[.5rem]`}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
