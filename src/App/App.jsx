
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import { lazy } from 'react'
import './App.css'
import HomePage from '../Pages/HomePage'
// import AboutPage from '../Pages/AboutPage'

const AboutPage = lazy(()=> import('../Pages/AboutPage'))

// import TaskPage from '../Pages/TaskPage'

const TaskPage = lazy(()=> import('../Pages/TaskPage'))

import UsersPage from '../Pages/UsersPage'
import AddUserPage from '../Pages/AddUserPage'
import NotFoundPage from '../Pages/NotFoundPage'
import NavBar from '../Components/NavBar'
import UserDetailsPage from '../Pages/UserDetailsPage'
import Layout from '../Pages/Layout'
import Tech from '../Pages/Tech'
import Web from '../Pages/Web'
import Mobile from '../Pages/Mobile'
import { Provider } from 'react-redux'
import reduxStore from '../Redux/Store/store'

function App() {

  const fetchUserData = async ()=>{

    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json()
    console.log(data)

    return data
  }


  const routConfig = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
      {index:true, element:<HomePage/>},
      {path:'about', element:<AboutPage/>},
      {path:'task', element:<TaskPage/>},

      {path:'tech', element:<Tech/>, children:[
        {path:'web', element:<Web/>},
        {path:'mobile', element:<Mobile/>},
      ]},

      {path:'users', element:<UsersPage/>, loader:fetchUserData},
      {path:'users/add', element:<AddUserPage/>},
      {path:'users/:id', element:<UserDetailsPage/>},
      {path:'*', element:<NotFoundPage/>},
    ]}
  ])

  return (
      <>

        <Provider store={reduxStore}>
          <RouterProvider router={routConfig}></RouterProvider>
        </Provider>
      

        {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index={true} element={<HomePage/>}></Route>
              <Route path='about' element={<AboutPage/>}></Route>
              <Route path='task' element={<TaskPage/>}></Route>

              <Route path='tech' element={<Tech/>}>
                <Route path='web' element={<Web></Web>}></Route>
                <Route path='mobile' element={<Mobile></Mobile>}></Route>
              </Route>

              <Route path='users' element={<UsersPage/>}></Route>
              <Route path='users/add' element={<AddUserPage/>}></Route>
              <Route path='users/:id' element={<UserDetailsPage/>}></Route>
              <Route path='*' element={<NotFoundPage/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter> */}
      </>
  )
}

export default App

