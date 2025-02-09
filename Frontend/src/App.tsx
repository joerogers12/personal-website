// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import './App.css'

function Example(props: any) {
  const [letter, setLetter] = useState<string>('a');
  const [count, setCount] = useState<number>(1);

  const unreadMessages = props.unreadMessages;

  const handleCLick = () => {
    setCount(count + 1);
    setLetter(String.fromCharCode(letter.charCodeAt(0) + 1));  
  };

  return (
    <div>
      <h1>{letter} is the {count}th letter of the alphabet!</h1>
      <button onClick = {handleCLick}>
        Increment!
      </button>
    </div>
  )
}

function App() {
  return (
    <>
      <h1>Joe Rogers</h1>
      <Example />
    </>
  )
}

export default App