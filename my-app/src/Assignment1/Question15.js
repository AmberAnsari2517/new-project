import React, { useState } from 'react'

const Question15 = () => {
    const [data,setData]=useState({
        name:"amber",
        last:"maria",
        email:"hananakhtar@gmail.com",
        age:15,
        phone:"1111"
    });

    const  headling = (e) => {
     const value=e.target.value;
     const Name=e.target.name;

     setData({... data,[Name]:value})
    }
    const Handle = (e) => {
        e.preventDefault();
        if (data.name.length<=3) {
            alert('name must be written minimum 3 character')
            return;
        }
        if (data.last.length<=3) {
            alert('Last Name must be written minimum 3 character')
            return;
        }
        if (data.email.length<=3) {
            alert('name must be written minimum 3 character')
            return;
        }
        if (data.phone.length<=3) {
            alert('name must be written minimum 3 character')
            return;
        }
        if (data.age<18) {
            alert("age must be written minimum 18 years")
        }
        else{
            alert('form is submit')
        }
    }
    
  return (
    <div>
        <form onSubmit={Handle}>
            <input type='text' placeholder='First Name' Name="name" value={data.name} onChange={headling} required />
            <input type='text' placeholder='Last Name' Name="last" value={data.last} onChange={headling} required/>
            <input type='password' placeholder='Password'   required/>
            <input type='Number' placeholder='Phone Number' value={data.age} Name="age" onChange={headling} required/>
            <input type='email' placeholder='emil' value={data.email} Name="email"  onChange={headling} required/>
            <input type='Number' placeholder='Phone Number' value={data.phone} Name="phone" onChange={headling} required/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Question15;