import React, { useState } from 'react';

import addUserStyles from '../Styles/AddUser.module.css'
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../Redux/Slices/language';
import { decrCounterFun, incrCounterFun } from '../Redux/Slices/counter';
// const AddUser = (props) => {
const AddUser = ({addNewUserFun}) => {

  const navigateTo = useNavigate();

  // const {addNewUserFun} = props

  // {name: 'ahmed', age:55}

  const [inputData, setInputData] = useState({name:'', age:''});

  const handleChange = (e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);
    setInputData({...inputData, [e.target.name]:e.target.value})
  }
  
  // const handleAgeChange = (e)=>{
  //   console.log(e.target.value);
  //   console.log(e.target.name);
  //   setInputData({...inputData, age:e.target.value})
  // }

  console.log(inputData)

  const handleSubmit = (e)=>{
    e.preventDefault();
    // addNewUserFun(inputData);
    navigateTo('/users')
  }

  const {t, i18n} = useTranslation();

  const lang = useSelector((state)=> state.languageR.language);
  console.log(lang)

  let dispatch = useDispatch();


  const counterVal = useSelector((st)=> st.counterR.counter) ;
  console.log(counterVal)

  return (
    <>
      <div dir={lang === 'en'?'ltr':'rtl'}>
        <div>
          {i18n.language === 'en' && <button className='btn btn-danger px-3 py-2 m-2' onClick={()=> {i18n.changeLanguage('ar'); dispatch(changeLanguage('ع'))}}>AR <GrLanguage /></button>}
          {i18n.language === 'ar' && <button className='btn btn-warning px-3 py-2 m-2' onClick={()=> {i18n.changeLanguage('en'); dispatch(changeLanguage('en'))}}>EN <GrLanguage /></button>}
        </div>

        <form style={Styles.formStyle} onSubmit={handleSubmit}>
          <input style={Styles.inputStyle} type="text" name='name' onChange={handleChange} placeholder={t('Name')}/>
          <input style={Styles.inputStyle} type="text" name='age' onChange={handleChange} placeholder={t('Age')}/>
          <input className={addUserStyles.btn} type="submit" value={t("Add" )}/>
        </form>

        <br /><br /><hr /> <br />

        <h1>counter = {counterVal}</h1>
        <button className='btn btn-dark px-3 py-2 m-2' onClick={()=> dispatch(incrCounterFun())}>Incr</button>
        <button className='btn btn-primary px-3 py-2 m-2' onClick={()=> dispatch(decrCounterFun())}>Decr</button>
      </div>
      
    </>
  );
}

export default AddUser;


let Styles = {
  formStyle: {width:"50%", margin:"20px auto", display:"flex", flexDirection:"column", border:"2px solid crimson", padding:"20px", borderRadius:"5px"},
  inputStyle: {width:"70%", margin:"5px auto", outline:"none", border:"2px solid cornflowerblue", padding:"10px", borderRadius:"5px"},
  btnStyl: {width:"30%", margin:"5px auto", border:"none", backgroundColor:'crimson', fontSize:"17px", color:"white", padding:"10px 15px", borderRadius:"8px"}
} 