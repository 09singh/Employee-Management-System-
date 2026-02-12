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
          <div className='bg-gradient-to-b from-blue-500 to-purple-600 h-full w-full  lg:flex gap-2  text-center'>
              
              {employees.map(emp => (
                  <div className='bg-white/20 backdrop-blur-md text-white border border-white/30 h-[40vh] my-14'
                      key={emp.id}>
                      <h1 className='bg-yellow-400 text-black font-extrabold'>EMPLOYEE</h1>
                      <h1 className='text-black'>NAME: {emp.name}</h1>
                      <h1 className='text-black'>EMAIL: {emp.email}</h1>
                      <h1 className='text-black'>Designation: {emp.role}</h1>
                      <h1 className='text-black'>SKILL: {emp.skill}</h1>
                      <h1 className='text-black'>EXPERIENCE: {emp.experience}</h1>
                      <h1 className='text-black'>SOURCE: {emp.source}</h1>
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
