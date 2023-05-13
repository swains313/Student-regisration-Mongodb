import React, { useState } from 'react';
import axios from 'axios';



const StudentRegistrationForm = () => {

    const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [classs, setClasss]= useState('');
  const [division, setDivision] = useState('');
  const [gender, setGender] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Frontend Validation
    if (!name || !dob || !classs || !division || !gender) {
      alert('Please fill all the required fields');
      return;
    }

    const data = { name, dob, classs, division, gender };
    console.log(data);
    //Sent the data to the data base using rest api
     axios.post('http://localhost:8080/api/student', data)
     .then((response)=>{
         window.location.assign("/display")
          console.log(response);
     })
     .catch((error)=>{
      console.log(error);
     })
  
      // alert(`Admission Number: ${response.data.admissionNumber}`);
      // setName('');
      // setDob('');
      // setClasss('');
      // setDivision('');
      // setGender('');
  };





  return (
    <div>

<div className="container mt-2 bg-light">

    <h3 className='text-center mt-1'>Student Register</h3>


<form>
   

      <div className="mb-3">
    <label for="name" className="form-label">Name:</label>
    <input type="text" className="form-control" id="name"  value={name}
          onChange={(event) => setName(event.target.value)}
          pattern="[A-Za-z\s]+"
          required />
  </div>

  <div className="mb-3">
    <label for="date" className="form-label">Date of Birth:</label>
    <input type="date" className="form-control" id="date"  value={dob}
          onChange={(event) => setDob(event.target.value)}
          pattern="[A-Za-z\s]+"
          required />
  </div>

  <div className="mb-3">
    <label for="classs" className="form-label">Class:</label>
    <select class="form-control"
          id="classs"
          value={classs}
          onChange={(event) => setClasss(event.target.value)}
          required
        >
          <option value="">-- Select --</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
          <option value="VII">VII</option>
          <option value="VIII">VIII</option>
          <option value="IX">IX</option>
          <option value="X">X</option>
          <option value="XI">XI</option>
          <option value="XII">XII</option>
        </select>
  </div>

  <div className="mb-3">
    <label for="divison" className="form-label">Divison:</label>
    <select className="form-control"
          id="classs"
          value={division}
          onChange={(event) => setDivision(event.target.value)}
          required
        >
           <option value="">-- Select --</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
  </div>


  <div className="mb-3">
    <label onChange={(event)=>{setGender(event.target.value)}}  for="gender" class="form-label my-3">Gender:</label>
    <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(e)=>{setGender(e.target.value)}}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(e)=>{setGender(e.target.value)}}
        />
        <label htmlFor="female">Female</label>
   
  </div>

  <div className="mb-3 text-center">
    <button onClick={handleSubmit} className='btn btn-success'>Submit</button>
  </div>

  





  
      </form>

      </div>

      {name}
      {dob}
      {gender}
      {classs}
      {division}


  
      </div>
  )
}

export default StudentRegistrationForm