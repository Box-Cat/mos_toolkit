import React from 'react'

type CustomInputProps = {
    className?: string;
    type?: string;
    placeholder?: string;
    value: string;
    error?: string|undefined; //대기
    setValue: (str:string) => void;
}

const CustomInput = ({
    className='mb-2',
    type="text",
    placeholder='',
    error, //대기
    value,
    setValue
}:CustomInputProps) => {
  return (
    <div className={className}>
        <input
            type={type}        
            style={{minWidth:300}}
            className="w-full p-3 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white hover:bg-white"
            placeholder={placeholder}
            value={value}
            onChange={(e)=>setValue(e.currentTarget.value)}
        />
        <small className='font-medium text-red-500'>{error} </small> 
    </div>
  )
}

export default CustomInput