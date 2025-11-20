import React, { useState } from 'react';
import Search from './Search';
import Students from './Students';

const Parent = () => {

  const studentDataArr = [
    {id:1, name:'Ahmed'},
    {id:2, name:'omar'},
    {id:4, name:'mohamed'},
    {id:5, name:'Rana'},
    {id:6, name:'Ibrahim'},
    {id:7, name:'sarah'},
    {id:8, name:'hamza'},
    {id:9, name:'Zahraa'},
    {id:10, name:'amr'},
  ]

  const [stdData, setStdData] = useState(studentDataArr)

  const getInputDataFun = (stdChar)=>{
    console.log(stdChar)

    setStdData(studentDataArr.filter((std)=> std.name.toLowerCase().includes(stdChar.toLowerCase())))
  }

  return (
    <>
      <Search getInputDataFun={getInputDataFun}></Search>
      <Students stdData={stdData}></Students>
    </>
  );
}

export default Parent;
