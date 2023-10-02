import { useState } from "react";
import image from "./assets/pngegg.png";
import useCurrencyInfo from './useCurrencyInfo'
import Input from "./Input";

function App() {
  const [value,setValue ] = useState(0)
  const [count, setCount] = useState(0);
  const [from , setFrom] = useState('pkr')
  const [outPut , setOutput] = useState(0)
  const [to ,setTo] = useState("usd")
  let a = useCurrencyInfo(from)
  // console.log(a)
  let convert = () => {
    setOutput(value*a[to])

  }

  
  let options = Object.keys(a)
  let toCurrency =(tovalue)=>{
    console.log(a[tovalue])
  }
  toCurrency(to)
  // console.log("optinos" , options)

  return (
    <div>
      <nav className="bg-black text-white   font-serif text-lg">
        <ul className="flex justify-between items-center">
          <li>
            <a href="">
              <img className="w-16 ml-8" src={image} alt="logo" />
            </a>
          </li>
          <div className=" text-xl  shadow-2xl">
                <i><b><h1>Currency Convertor</h1></b></i>
          </div>


          <div className="flex mr-10">
            <li>
              <a href="" className="mr-16">
                welcome to CC
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </div>
        </ul>
      </nav>
      <main className="bg-yellow-400 h-[100vh] p-16 ">
        <div>
          <form action="">
            <div className="border-2 p-6 bg-gray-900 rounded-md  mx-auto w-[600px]	 ">
              <h2 className="text-center text-white text-2xl">Convert</h2>
              <Input
              label='From'
                convert={convert}
                options={options}
                from={from}
                setFrom={setFrom}
                value={value}
                setValue={setValue}
                />
              <Input
                label='To'
                convert={convert}
                forOutput={true}
                options={options}
                from={to}
                setFrom={setTo}
                value={outPut}
                />
                
              
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
