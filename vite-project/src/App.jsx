import { useState } from "react";
import Button from "./components/button"

function App(){
  const [count, setCount] = useState(0)
  return <>
     <h1>Counter</h1>
     <h1>Count: {count}</h1>
     <button onClick={() => setCount(count + 1)}>increase</button>
     <button onClick={() => setCount(count - 1)}>decrease</button>
  </>
}

function App(){
    const handleSubmit = (e) =>{
      e.preventDefault();
      const {email, password} = e.target;
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="enter email" required minLength={14} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" placeholder="password" required minLength={10} />
        <br />
        <button>Submit</button>
    </form>
    </>
  )
}

export default App;


