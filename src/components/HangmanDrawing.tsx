const HEAD = (
  <div className="w-[70px] h-[70px] rounded-full border-[8px] border-black absolute top-[50px] right-[-30px]" />
)

const BODY = (
  <div className="w-[8px] h-[100px] bg-black absolute top-[120px] right-0" />
)

const RIGHT_ARM = (
  <div className="w-[100px] h-[8px] bg-black absolute top-[150px] right-[-100px] rotate-[-30deg] origin-bottom-left" />
)

const LEFT_ARM = (
  <div className="w-[100px] h-[8px] bg-black absolute top-[150px] right-[8px] rotate-[30deg] origin-bottom-right" />
)

const RIGHT_LEG = (
  <div className="w-[100px] h-[8px] bg-black absolute top-[210px] right-[-92px] rotate-[60deg] origin-bottom-left" />
)

const LEFT_LEG = (
  <div className="w-[100px] h-[8px] bg-black absolute top-[210px] right-0 rotate-[-60deg] origin-bottom-right" />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

const HangmanDrawing = ({ numberOfGuesses }: { numberOfGuesses: number }) => {
  return (
    <div className='relative'>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className='absolute h-[50px] w-[10px] bg-black top-0 right-0' />
      <div className='h-[10px] w-[200px] bg-black ml-[120px]' />
      <div className='h-[400px] w-[10px] bg-black ml-[120px]' />
      <div className='h-[10px] w-[250px] bg-black' />
    </div>
  )
}

export default HangmanDrawing
