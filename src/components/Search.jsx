import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const onChange = (e) => setKeyword(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos?keyword=${keyword}`);
  }
  return (
    <form className='px-5 py-1 flex' onSubmit={onSubmit}>
      <input 
      className='inline-block w-80 px-4 border-2 border-light bg-transparent rounded-l-lg text-background focus:outline-0'
      type='text' onChange={onChange} id='keyword' name='keyword' value={keyword} placeholder='검색'/>
      <button className='border-r-2 border-t-2 border-b-2 border-light bg-transparent rounded-r-lg px-3 py-1 text-light'><BsSearch className='text-xl border-light'/></button>
    </form>
  )
}
