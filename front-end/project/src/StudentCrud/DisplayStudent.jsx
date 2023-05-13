import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DisplayStudent = () => {

//STORE ALL THE DATA data Array
  let [data,setData]=useState([])

  //To Fetch The Data
  useEffect(()=>{
    axios.get("http://localhost:8080/api/student")
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })

  },[])


  return (
    <div>
      <div className='container bg-light mt-3'>

        <h3 className='text-center'>Display Student By Name</h3>


      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Class</th>
      <th scope="col">Division</th>
      <th scope="col">Gender</th>


    </tr>
  </thead>
  {data.map((x)=>{
    return(
      <tbody>
    <tr>
      <th scope="row">{x.regdId}</th>
      <td>{x.name}</td>
      <td>{x.dob}</td>
      <td>{x.classs}</td>
      <td>{x.division}</td>
      <td>{x.gender}</td>


    </tr>

  </tbody>
    )
  })}
</table>

      </div>
    </div>
  )
}

export default DisplayStudent