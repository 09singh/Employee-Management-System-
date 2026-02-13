"use client"
import React from 'react'
import { useEmployee } from "@/context/page";
import { useRouter } from "next/navigation";
function Show() {
    const router = useRouter();
    const handeledit = (emp) => {
        setSelectedEmployee(emp);
        router.push("/Form");
    }
    const { employees, remove, setSelectedEmployee } = useEmployee();
  return (
      <>
          <div className='bg-gradient-to-b from-blue-500 to-purple-600 h-screen w-full  lg:flex gap-2  text-center'>
              
              {employees.map(emp => (
                  <div className='bg-white/20 backdrop-blur-md text-white border border-white/30 lg:h-[50vh]  lg:w-[30vw] my-14'
                      key={emp.id}>
                      <h1 className='bg-yellow-400 text-black font-extrabold'>EMPLOYEE</h1>
                      <h1 className='text-black'>NAME: {emp.name}</h1>
                      <h1 className='text-black'>EMAIL: {emp.email}</h1>
                      <h1 className='text-black'>Designation: {emp.role}</h1>
                    

                            <div className="mt-2">
                            <p className="text-black ">Skills:</p>

                            <div className="flex flex-wrap gap-2 mt-1">
                                {emp.skill?.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                                >
                                    {skill}
                                </span>
                                ))}
                            </div>
                            </div>
                        <div>
                    <h3 className="font-bold text-black mt-2">Custom Attributes:</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {emp.customFields?.map((field, index) => (
                        <span
                            key={index}
                            className="bg-purple-600 text-white px-2 py-1 rounded-md text-sm"
                        >
                            {field.label}: {field.value}
                        </span>
                        ))}
                    </div>
                      </div>


                      <button onClick={() => { handeledit(emp) }} className='bg-blue-700  hover:bg-blue-400 w-full mt-3'>EDIT </button>
                       <br/>
                      <button onClick={() => { remove(emp.id) }} className='bg-red-600  hover:bg-red-400 w-full mt-3 ' >   DELETE</button>
                     
                    </div>
                
              ))}
      </div>
      </>
  )
}

export default Show