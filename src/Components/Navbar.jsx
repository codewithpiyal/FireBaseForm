import React from 'react'
import image from '../Images/navicon.jpg'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavBar>
        <img src={image} alt='nav-logo' style={{width:'60px',height:'40px'}}/>
        <h1 style={{color:'white'}}>FIREBASE FORM</h1>
        <LIST>
            <li style={{listStyle:'none',cursor:'pointer',fontWeight:'500'}}><a>HOME</a></li>
            <li style={{listStyle:'none',cursor:'pointer',fontWeight:'500'}}><a>CONTACT US</a></li>
            <li style={{listStyle:'none',cursor:'pointer',fontWeight:'500'}}><a>ABOUT</a></li>
            <li style={{listStyle:'none',cursor:'pointer',fontWeight:'500'}}><a>CAREER</a></li>
        </LIST>
    </NavBar>
  )
}

export default Navbar

const NavBar= styled.nav({
     width:'100%',
     height:'50px',
     backgroundColor:'green',
     alignItems:"center",
     display:'flex',
     justifyContent:"space-between",
     padding:'5px'

     
})
const LIST= styled.ul({
     display:'flex',
     listStyle:'none',
     gap:'10px',
     marginRight:'25px'
})