import React from 'react';
import { useParams } from 'react-router';

const UserDetailsPage = () => {

  const {id} = useParams();
  return (
    <>
      <h1 className="alert alert-warning w-50 mx-auto text-center my-5">UserDetails Page</h1>
      <h2>user id is: {id}</h2>
    </>
  );
}

export default UserDetailsPage;
