import { createElement as crEl, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
  
    return crEl('div', { className: 'container' , }, [
      crEl('h1', { className: 'font-bold', key: 1 }, `Test JSX ${count}`),
      crEl('button', { 
        className: 'py-2 px-4 border',
         key: 2, 
         onClick: () => setCount(count + 1)
        }, 'Click me!')
    ]);
}