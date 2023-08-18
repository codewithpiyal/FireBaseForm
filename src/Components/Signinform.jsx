import bgImage from '../Images/bgImage.jpg'
import React,{useState} from 'react'
import styled from 'styled-components'


function Signinform() {

    const[ formData,setFormData]= useState({
       Name:"",
       Email:"",
       Address:"",
       Phone:""
    });
    let name,value;
    const handleChange=(e)=>{
          name= e.target.name;
          value=e.target.value;
          setFormData({...value,[name]:value})
    };
    const handleClick= async(e)=>{
        e.preventDefault();
        const {Name,Email,Address,Phone}= formData;

        const res= await fetch("https://fir-data-176d1-default-rtdb.firebaseio.com/Data.json",
        {
         method:"POST",
         headers:{
            "Content-Type":"application/json",
         },
         body: JSON.stringify({
            Name,
            Email,
            Address,
            Phone
         })
        }
        )

        if(res){
            setFormData({
                Name:"",
                Email:"",
                Address:"",
                Phone:""
            })
        alert("Data Stored Successfully")
        }
    }
  return (
   <Container>
       <FORM method='POST'> 
         <FORMCONTAINER>
            <label>Name</label>
            <input type='text' placeholder='Enter Your Name' name='Name' value={formData.Name} onChange={handleChange} autoComplete='off' required/>
         </FORMCONTAINER>
         <FORMCONTAINER>
            <label>Email</label>
            <input type='text' placeholder='Enter Your Email'name='Email' value={formData.Email} onChange={handleChange} autoComplete='off' required/>
         </FORMCONTAINER>
         <FORMCONTAINER>
            <label>Address</label>
            <input type='text' placeholder='Enter Your Address' name='Address' value={formData.Address} onChange={handleChange} autoComplete='off' required/>
         </FORMCONTAINER>
         <FORMCONTAINER>
            <label>Phone</label>
            <input type='text' placeholder='Enter Your Phone' name='Phone' value={formData.Phone} onChange={handleChange} autoComplete='off' required/>
         </FORMCONTAINER>
         <BUTTON type='submit' onClick={handleClick}>SUBMIT</BUTTON>
       </FORM>
       
    </Container>
    
  )
}

export default Signinform

const Container= styled.div`
   
   width:100vw;
   height:100vh;
   background-repeat: no-repeat;
   background-position: center;
   background-size:cover;
   background-image: url(${bgImage})
   
`
   

const FORM= styled.form`
   width:500px;
   height:500px;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   border:5px solid black;
   position:center;
   margin-left:420px
   
   `

const FORMCONTAINER= styled.div`
    margin:15px;

` 

 const BUTTON=styled.div`
     width:100px;
     height:40px;
     background-color:black;
     color:white;
     border-radius:15px;
     padding:2px;
     cursor:pointer;
     display:flex;
     justify-content:center;
     align-items:center;
 
 `