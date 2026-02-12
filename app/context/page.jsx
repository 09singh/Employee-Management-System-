"use client"
import React, { createContext, useContext, useState } from 'react'
const EmployeeContext = createContext();
export const EmployeeProvider = ({children})=> {
    const [employees, setemployees] = useState([])
     const [selectedEmployee, setSelectedEmployee] = useState(null) //up 
    //add employes
    const addemployee = (employee) => {
        setemployees([...employees,employee])
    }
    //Edit employes
    const editemployee = (updatedemployee) => {
        const map = employees.map(emp => emp.id === updatedemployee.id ? updatedemployee : emp);
        setemployees(map)
         setSelectedEmployee(null) // up
    }
    //delete employes
    const remove = (id) => {
        const filter = employees.filter(emp => emp.id !== id);
        setemployees(filter)
    }
  return (
      <EmployeeContext.Provider
          value={{ employees, addemployee, editemployee, remove , selectedEmployee, setSelectedEmployee     }}>
          {children}
          </EmployeeContext.Provider> 
  )
}

export const useEmployee = () => {
    return useContext(EmployeeContext);
}

