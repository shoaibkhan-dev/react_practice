import { useState } from "react";
import Button from "./components/button"

function App(){
  const [count, setCount] = useState(0);
  return <>
     <h1>Counter</h1>
     <h1>Count: {count}</h1>
     <button onClick={() => setCount(count + 1)}>increase</button>
     <button onClick={() => setCount(count - 1)}>decrease</button>
  </>
}

export default App;


