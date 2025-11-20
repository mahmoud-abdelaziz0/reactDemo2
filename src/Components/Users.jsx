import { useEffect, useRef, useState } from "react";
import User from "./User";
import {v4 as uuid} from 'uuid'
import Task from "./Task";
import axios from "axios";
import AddUser from "./AddUser";
import { useDispatch, useSelector } from "react-redux";
import { usersCallApiAction } from "../Redux/Slices/Users";

const Users = () => {

  // console.log(uuid())

  const [usersData, setUsersData] = useState([
    {id:uuid(), name:'Ahmed', age:29},
    {id:uuid(), name:'Fatma', age:52},
    {id:uuid(), name:'Mohamed', age:25},
    {id:uuid(), name:'Omar', age:23},
    {id:uuid(), name:'Aya', age:19},
    {id:uuid(), name:'Farouk', age:35},
  ])
  // const [usersData, setUsersData] = useState(null)

  // const [counter, setCounter] = useState(0);
  // const [changeColor, setChangeColor] = useState(true);

  // const handelClick = ()=>{
  //   setCounter(counter+1)
  // }

  const increAgeFun = (uId)=>{
    setUsersData(usersData.map((usr)=> usr.id === uId? {...usr, age:usr.age+1}: usr))
  }


  const decreAgeFun = (uId)=>{
    setUsersData(usersData.map((usr)=> usr.id === uId? {...usr, age:usr.age-1}: usr))
  }

  const deleteUserFun = (uId)=>{
    setUsersData(usersData.filter((usr)=> usr.id !== uId))
  }

  // const addNewUserFun = (usrObj)=>{
  //   // console.log(usrObj)

  //   // setUsersData([...usersData, {...usrObj, id:uuid(), age:parseInt(usrObj.age)}])
  //   setUsersData([...usersData, {...usrObj, id:uuid(), age:+usrObj.age}])

  // }

  //#region 

  // useEffect
  // Syntax 👇🏻
  // useEffect(()=>{},[optional])

  // case 1 --> componentDidMount, componentDidUpdate
  // useEffect(()=>{
  //   console.log("ay7aga 🙋🏻‍♂️");
  // })

  // case 2 --> componentDidMount (Call Api)
  // useEffect(()=>{
  //   console.log("ay7aga 🙋🏻‍♂️");
  // },[])


  // case 3 -->  componentDidMount, componentDidUpdate (only changeColor State)
  // useEffect(()=>{
  //   console.log("ay7aga 🙋🏻‍♂️");
  // },[changeColor])


  // case 4 -->  componentDidMount, componentWillUnMount
  // useEffect(()=>{
  //   console.log("ay7aga 🙋🏻‍♂️");

  //   return ()=>{
  //     console.log("CleanUp")
  //   }
  // },[])

  // case 5 -->  componentDidMount, componentDidUpdate, componentWillUnMount
  // useEffect(()=>{
  //   console.log("ay7aga 🙋🏻‍♂️");

  //   let timer = setInterval(() => {
  //       console.log("interval Work")
  //   }, 1000);

  //   return ()=>{
  //     console.log("CleanUp")

  //     clearInterval(timer)
  //   }
  // })


  // useEffect(()=>{
  //   // fetch('https://jsonplaceholder.typicode.com/users')
  //   // .then((res)=> res.json())
  //   // .then((data)=> setUsersData(data))

  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then((res)=> setUsersData(res.data))
  // },[])


  // const myRef = useRef(null);
  // console.log(myRef)

  // const handelFoucs = ()=> {
  //   // myRef.current.focus()
  //   myRef.current.style.backgroundColor = 'red'
  // }

  // const numberOfRender = useRef(0);
  // console.log(numberOfRender)
  // numberOfRender.current = numberOfRender.current+1



  // const handelChangeColor = ()=>{
  //   setChangeColor(!changeColor)
  // }

  //#endregion


  // let dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(usersCallApiAction())
  // },[dispatch])


  // const usersData = useSelector((state)=> state.usersR.users);




  if(!usersData) return <h2>looooooooooooooooooooooooding</h2>

  return (
    <>
      {/* <h1>number of Re-Render = {numberOfRender.current}</h1>
      <br /><hr />
      <input type="text" ref={myRef}/>
      <button onClick={handelFoucs}>Focus</button>
      <br /> <hr />
        <h1>Counter = {counter}</h1>
        <button onClick={handelClick}>Incr counter</button>

        <br /><hr />

        <h2 style={{color:changeColor?'dodgerblue':'crimson'}}>Change Color</h2>
        <button onClick={handelChangeColor}>Change Color</button>
        <br /> <hr /> */}


      <div className="d-flex flex-wrap mx-auto my-2 gap-2" style={{width:'80%'}}>
        {
          usersData.map((usr)=> <User key={uuid()} {...usr} increAgeFun={increAgeFun} decreAgeFun={decreAgeFun} deleteUserFun={deleteUserFun}></User>)
          // usersData.map((usr)=> <User key={uuid()} {...usr}></User>)
        }
      </div>
    </>
  );
}

export default Users;
