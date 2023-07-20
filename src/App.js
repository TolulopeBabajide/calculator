import React, { useState } from 'react'

const App = () => {

  const [value,setValue] = useState('');

  const handleKeyboardInput = (e) => {
    if (
      (e.key >= '0' && e.key <= '9') ||
      e.key === '.' ||
      e.key === '+' ||
      e.key === '-' ||
      e.key === '*' ||
      e.key === '/'
    ) {
      setValue(value + e.key);
    }
  };

  const evaluateResult = () => {
    try {
      setValue(eval(value));
    } catch (error) {
      setValue('Error');
    }
  };


    const handleClick = (e) => {
      setValue(value + e.target.value);
    }



  return (

    <>
        
        <div className='w-full h-screen flex justify-center items-center bg-violet-400'>
          
          <div className='calculator p-4 rounded-lg bg-neutral-800'>
            <h1 className='text-right text-blue-200'>Casio</h1>
            <form className='' onKeyUp={handleKeyboardInput}>
                
                <div className='flex justify-end'>
                  <input value={value} className=' border-0 bg-slate-700 outline-0 w-16 h-16 mt-1.5 mb-4 mx-0.5 rounded-md text-right flex-1  text-white font-bold px-0.5 text-5xl ' type='text'></input>
                </div>
                <div className=' flex gap-y-4' >
                  <input type='button' onClick={e=>setValue('')} value='AC' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={e=>setValue(value.slice(0,-1))} value='DE' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='.' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='/' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                </div>
                <div>
                  <input type='button' onClick={handleClick} value='7' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='8' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='9' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='*' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                </div>
                <div>
                  <input type='button' onClick={handleClick} value='4' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='5' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='6' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='+' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                </div>
                <div>
                  <input type='button' onClick={handleClick} value='1' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='2' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='3' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='-' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                </div>
                <div>
                  <input type='button' onClick={handleClick} value='00' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={handleClick} value='0' className=' border-0 bg-blue-400 outline-0 w-16 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800 '></input>
                  <input type='button' onClick={e => evaluateResult()} value='=' className=' border-0 bg-blue-400 outline-0 w-32 h-16 text-base m-0.5 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-800'></input>                </div>
              </form>
          </div>
        </div>
    </>
  )
}

export default App