import { memo } from "react";

import userStyles from '../Styles/User.module.css'
import { Link } from "react-router";


// const User = function (){
// const User = (props)=>{
const User = ({id, name ,age, children, increAgeFun, decreAgeFun, deleteUserFun})=>{

  // console.log(props) // {id:1, name:}

  // let {id, name ,age, children, increAgeFun, decreAgeFun, deleteUserFun} = props;

  const handleIncrAge = (event)=>{
    // age++  
    console.log(event)
    increAgeFun(id)
  }

  const handleDecrAge = ()=>{
    decreAgeFun(id)
  }


  const handleDelete = ()=>{
    deleteUserFun(id)
  }

  return(
    <>
      {/* <div style={Styles.divStyle}>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
        <div>Age: {age}</div> */}
        {/* <div>{children}</div> */}
        {/* <button onClick={handleIncrAge} style={Styles.btnStyle}>Incr Age</button>
        <button onClick={handleDecrAge} style={Styles.btnStyle}>Decr Age</button> */}
        {/* <button onClick={handleDelete} style={{...Styles.btnStyle, backgroundColor:'crimson'}}>Delete</button> */}
        {/* <button onClick={handleDelete} className="btn">Delete</button> */}
        {/* <button onClick={handleDelete} className={userStyles.btn}>Delete</button>
      </div> */}


      <div className="card text-center" style={{width: "18rem"}}>
        <img src="img1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          {/* <h5 className="card-title">User Num <span className="text-primary">{id.slice(0,5)}</span> Data</h5> */}
          <p className="card-text">ID: {id}</p>
          <p className="card-text">Name: {name}</p>
          <p className="card-text">Age: {age}</p>
           <button onClick={handleIncrAge} style={Styles.btnStyle}>Incr Age</button>
          <button onClick={handleDecrAge} style={Styles.btnStyle}>Decr Age</button>
          <button onClick={handleDelete} className={userStyles.btn}>Delete</button>
          <Link to={`/users/${id}`}>
            <button style={{...Styles.btnStyle, backgroundColor:'dodgerblue'}}>Show More</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default memo(User);

const Styles = {
  divStyle: {backgroundColor:'cornflowerblue', color:'white', textAlign:'center', width:'70%', margin:'10px auto', padding:'10px', borderRadius:"8px", fontSize:'18px'},
  btnStyle:{border:"none", backgroundColor:"orange", color:"white", padding:"10px 15px", borderRadius:"8px", margin:"5px 10px", fontSize:"17px", cursor:"pointer" }
}