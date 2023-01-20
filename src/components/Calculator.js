import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [items, setItems] = useState({
    total: null,
    next: null,
    operation: null,
  });

  useEffect(() => {
    const { total, next } = items;
    const input = document.querySelector('.output');

    if ((next != null)) {
      input.value = next;
    } else if (!Number.isNaN(total)) {
      input.value = total;
    }
  }, [items]);

  const changeHandler = (e) => {
    setItems(calculate(items, e.target.innerHTML));
  };

  return (
    <div className="grid grid-cols-2 ">
      <h2 className="flex justify-center text-4xl py-10">Lets Do Some Math...</h2>

      <div className="h-[100vh] flex justify-center items-center">
        <ul className="bg-[#dbc4c4] w-4/5 grid columns-6 border-2 border-black/40">
          <input className="p-2 text-right justify-self-end bg-[#aaacbd] w-full text-white hover:bg-[#858694] placeholder:text-white output" placeholder="0" readOnly />
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>AC</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>+/-</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>%</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>÷</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>7</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>8</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>9</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>x</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>4</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>5</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>6</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>-</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>1</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>2</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>3</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>+</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/2"><button className="w-full" type="button" onClick={changeHandler}>0</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>.</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={changeHandler}>=</button></li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
