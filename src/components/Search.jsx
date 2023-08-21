import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";

export default function Search() {
  const [keyword, setKeyword] = useState('');
  console.log(keyword);
  const onChange = (e) => setKeyword(e.target.value);
  return (
    <form className='px-5 py-1 flex'>
      <input 
      className='px-4 border-2 border-light bg-transparent rounded-l-lg text-light focus:outline-0'
      type='text' onChange={onChange} id='keyword' name='keyword' value={keyword} placeholder='검색'/>
      <button className='border-r-2 border-t-2 border-b-2 border-light bg-transparent rounded-r-lg px-3 py-1 text-light'><BsSearch className='text-xl border-light'/></button>
    </form>
  )
}
