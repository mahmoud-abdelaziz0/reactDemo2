import React from 'react';
import { Link } from 'react-router';
import { SiWolframlanguage } from "react-icons/si";
import { useSelector } from 'react-redux';
import { changeLanguage } from '../Redux/Slices/language';
import { useTranslation } from 'react-i18next';

const NavBar = () => {

  let lang = useSelector((st)=> st.languageR.language)

  let {t, i18n} = useTranslation();
  return (
    <>
      <nav dir={lang === 'en'?'ltr':'rtl'} className='bg-success-subtle mx-auto my-2 rounded-3' style={{width:'90%'}}>
        <ul className='offset-1 list-unstyled d-flex'>
          <li className='fs-3'><Link to='/'><SiWolframlanguage /></Link></li>
          <li className='fs-4 mx-5'><span>{lang}</span></li>
          <li className='p-2'><Link className='nav-link fs-5 fw-bold mx-3' to="/">{t('Home')}</Link></li>
          <li className='p-2'><Link className='nav-link fs-5 fw-bold mx-3' to="/about">{t('About')}</Link></li>
          <li className='p-2'><Link className='nav-link fs-5 fw-bold mx-3' to="/tech">Tech</Link></li>
          <li className='p-2'><Link className='nav-link fs-5 fw-bold mx-3' to="/users">Users</Link></li>
          <li className='p-2'><Link className='nav-link fs-5 fw-bold mx-3' to="/users/add">Add User</Link></li>
          <li className='p-2'><Link className='nav-link fs-5 fw-bold mx-3' to="/task">Task</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
