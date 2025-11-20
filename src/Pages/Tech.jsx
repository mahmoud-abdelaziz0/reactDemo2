import React from 'react';
import { Link, Outlet } from 'react-router';

const Tech = () => {
  return (
    <>
        <div className="container">
          <div className="row">
            <div className="left-side col-2 bg-info-subtle mx-2 rounded-2 d-flex justify-content-center align-items-center" style={{height:"85vh"}}>
              <ul className='nav d-flex flex-column'>
                <li className='nav-item btn btn-danger'><Link className='nav-link text-white fw-bold' to="web">Web</Link></li>
                <li className='nav-item btn btn-info my-2'><Link className='nav-link text-white fw-bold' to="mobile">Mobile</Link></li>
              </ul>
            </div>
            <div className="right-side col-9 bg-secondary-subtle mx-2 rounded-2" style={{height:"85vh"}}>
              <Outlet></Outlet>
            </div>
          </div>
      </div>
    </>
  );
}

export default Tech;
