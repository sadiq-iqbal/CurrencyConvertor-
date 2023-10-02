function Input({ options, from, setFrom ,label , value , setValue , convert ,forOutput}) {
  return (
    <>
    <h1 className="text-white bg-slate-700  p-1 px-4 rounded-md w-16 text-center    " > {label}</h1>
    <div className=" relative  flex h-16 p-1">
      <select name="" className="rounded-l-full bg-black text-white z-10 text-center text-lg p-0 " value={from} onChange={(e) => setFrom(e.target.value)}>
        {options.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
      {forOutput?(<input type="number" value={value}  className="  pl-4 grow  rounded-r-full"/>):(<input type="text" value={value} onChange={(e) => {
        e.target.value?setValue(parseFloat(e.target.value ) ):setValue(0)
    convert();
  }} className="  pl-4 grow  rounded-r-full"/>)}

    </div>
    </>
  );
}

export default Input;
