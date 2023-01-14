import { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    const input = document.querySelector('.output');

    if ((next != null)) {
      input.value = next;
    } else if (!Number.isNaN(total)) {
      input.value = total;
    }
  }

  changeHandler(e) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.innerHTML));
  }

  render() {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <ul className="bg-[#dbc4c4] w-4/5 grid columns-6 border-2 border-black/40">
          <input className="p-2 text-right justify-self-end bg-[#aaacbd] w-full text-white hover:bg-[#858694] placeholder:text-white output" placeholder="0" readOnly />
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>AC</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>+/-</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>%</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>÷</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>7</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>8</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>9</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>x</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>4</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>5</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>6</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>-</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>1</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>2</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>3</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>+</button></li>
          </ul>
          <ul className="flex justify-center items-center">
            <li className="flex justify-center border-2 border-black w-1/2"><button className="w-full" type="button" onClick={this.changeHandler}>0</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>.</button></li>
            <li className="flex justify-center border-2 border-black w-1/4"><button className="w-full" type="button" onClick={this.changeHandler}>=</button></li>
          </ul>
        </ul>
      </div>
    );
  }
}
