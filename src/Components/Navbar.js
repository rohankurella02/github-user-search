import React from 'react'
import './Navbar.css'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className='Navbar' onClick={handleClick} > <BsFillArrowLeftCircleFill /> Back To Home</div>
  )
}

export default Navbar