import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const clicar = (value) => {
    setInput(input + value);
  };

  const limpar = () => {
    setInput('');
  };

  const resposta = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  return (
    <div className="calculadora">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => clicar('1')}>1</button>
        <button onClick={() => clicar('2')}>2</button>
        <button onClick={() => clicar('3')}>3</button>
        <button onClick={() => clicar('+')}>+</button>
        <button onClick={() => clicar('4')}>4</button>
        <button onClick={() => clicar('5')}>5</button>
        <button onClick={() => clicar('6')}>6</button>
        <button onClick={() => clicar('-')}>-</button>
        <button onClick={() => clicar('7')}>7</button>
        <button onClick={() => clicar('8')}>8</button>
        <button onClick={() => clicar('9')}>9</button>
        <button onClick={() => clicar('*')}>*</button>
        <button onClick={() => clicar('0')}>0</button>
        <button onClick={() => clicar('.')}>.</button>
        <button onClick={resposta}>=</button>
        <button onClick={() => clicar('/')}>/</button>
        <button onClick={limpar}>C</button>
      </div>
    </div>
  );
} 

export default App
