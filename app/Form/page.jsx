"use client"
import React, { useState,useEffect} from 'react'
import { useEmployee } from "@/context/page";
import Link from "next/link";
function FORM() {
    const { addemployee, editemployee, selectedEmployee } = useEmployee();
    const [data, setdata] = useState({
        name: "",
        email: "",
        role: "",
        skill: "",
        experience: "",
        source: ""
    })
    const [error, seterror] = useState("")

    useEffect(() => {
        if (selectedEmployee) {
            setdata(selectedEmployee);
        }
        }, [selectedEmployee]);

   const handleChange = (e) => {
  const { name, value } = e.target;
  setdata((prev) => ({
    ...prev,
    [name]: value
  }));
};

    const validate = () => {
        if (!data.name||!data.email||!data.experience||!data.role||!data.skill||!data.source) {
            seterror("All field are required")
            return false;
        }
          seterror("");
          return true;
        }
      
         const btn = (e) => {
            e.preventDefault();
                    if (!validate()) return;
            if (selectedEmployee) {
                editemployee(data);
            } else {
                addemployee({ ...data, id: Date.now() });
            }

  setdata({
    name: "",
    email: "",
    role: "",
    skill: "",
    experience: "",
    source: ""
  });
};

  return (
      <>
          <div className='flex justify-center items-center bg-gradient-to-b from-blue-500 to-purple-600 h-full w-full'> 
          <div className=' bg-gray-400 h-160 w-56 text-center mx-17 my-7 text-black rounded-2xl lg:w-[40vw] lg:h-[125vh] shadow-xl shadow-white '>
              {error && <p className='bg-red-500 text-white'>{ error}</p>}
                 <div className='my-3  py-3 lg:w-[40vw] text-center '>
                    <h1 className='lg:text-4xl lg:w-[40vw] text-center my-2'>NAME</h1>
                  <input type="text" placeholder='Eg.ram' value={data.name}  name='name' onChange={handleChange}  />
                </div>
                <div className='my-2 py-3 lg:w-[40vw] text-center '>
                    <h1 className='lg:text-4xl lg:w-[40vw] text-center my-2' >Email</h1>
                    <input type="text" placeholder='Eg.xyz@gmail.com' value={data.email} name='email'  onChange={handleChange} />
                </div>
                <div className='my-2  py-3 lg:w-[40vw] text-center'>
                    <h1 className='lg:text-4xl lg:w-[40vw] text-center my-2'>Designation</h1>
                    <input type="text" placeholder='Eg.Frontend devloper' value={data.role}  name='role' onChange={handleChange} />
                </div>
                <div className='my-2  py-3 lg:w-[40vw] text-center'>
                    <h1 className='lg:text-4xl lg:w-[40vw] text-center my-2'>Skills</h1>
                    <input type="text" placeholder='Eg.react.js' value={data.skill}   name='skill' onChange={handleChange} />
                </div>
                <div className='my-2  py-3 lg:w-[40vw] text-center'>
                    <h1 className='lg:text-4xl lg:w-[40vw] text-center my-2'>Experince(years)</h1>
                    <input type="number" placeholder='Eg.2'value={data.experience||""}  name='experience' onChange={handleChange}/>
                </div>
                <div>
                    <h1 className='lg:text-4xl lg:w-[40vw] text-center my-3'>Joining source</h1>
                    <input type="text" placeholder='Eg.refral,agency' value={data.source}  name='source' onChange={handleChange} />
              </div>
             <button  className=" bg-green-400 my-5 hover:bg-green-700 text-white lg:h-10 lg:w-20" onClick={btn}>SUBMIT</button>
          </div>
          </div>
          <div className='flex justify-center items-center bg-purple-600'>
              <Link href="/show"><button className="bg-cyan-900 hover:bg-cyan-400  w-28 h-11 mx-36 my-4">SHOW LIST</button></Link></div>
          
      </>
  )
}


export default FORM
