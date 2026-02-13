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
        skill: [""],
        customFields: []
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
        if (!data.name||!data.email||!data.role||!data.skill) {
            seterror("All field are required")
            return false;
        }
          seterror("");
          return true;
    }

   //Skills
    const handleSkillChange = (index, value) => {
  setdata(prev => {
    const updatedSkill = [...prev.skill];
    updatedSkill[index] = value;

    return {
      ...prev,
      skill: updatedSkill
    };
  });
};
 //Add Skills
const addSkill = () => {
  setdata(prev => ({
    ...prev,
    skill: [...prev.skill, ""]
  }));
};
//Remove Skills
const removeSkill = (index) => {
  setdata(prev => ({
    ...prev,
    skill: prev.skill.filter((_, i) => i !== index)
  }));
    };
    
    // Add new attribute
const addAttribute = () => {
  setdata(prev => ({
    ...prev,
    customFields: [...prev.customFields, { label: "", value: "" }]
  }));
};

   // Change label or value
const handleAttributeChange = (index, key, value) => {
  const updated = [...data.customFields];
  updated[index][key] = value;
  setdata(prev => ({ ...prev, customFields: updated }));
};

// Remove attribute
const removeAttribute = (index) => {
  setdata(prev => ({
    ...prev,
    customFields: prev.customFields.filter((_, i) => i !== index)
  }));
};



      
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
    skill: [""],
    customFields: []
  });
};

  return (
      <>
          <div className='flex justify-center items-center bg-gradient-to-b from-blue-500 to-purple-600 h-full w-full'> 
          <div className=' bg-gray-400 min-h-[40vh ] w-56  lg:w-[40vw] lg:min-h-[70vh] text-center mx-17 my-7 text-black rounded-2xl shadow-xl shadow-white '>
              {error && <p className='bg-red-500 text-center text-white'>{ error}</p>}
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
                  <div className='my-2 py-3 lg:w-[40vw] text-center '>
                      <h1 className='lg:text-4xl lg:w-[40vw] text-center my-2'>Skills</h1>

                        {data.skill.map((skill, index) => (
                        <div key={index}>
                            <input
                            type="text"
                            value={skill}
                            onChange={(e) => handleSkillChange(index, e.target.value)}
                            />
                            <button  className="bg-red-500 text-white  mt-2 " type="button" onClick={() => removeSkill(index)}>
                            Remove
                            </button>
                        </div>
                        ))}

             <button className='bg-[#FCAD3F] text-black px-4  mt-2' type="button" onClick={addSkill}>
                     Add Skill
               </button>
                  </div>
                  <div className='my-2 py-3 lg:w-[40vw] text-center '>
                <h2 className="lg:text-4xl lg:w-[40vw] text-center my-2">Custom Attributes</h2>

                    {data.customFields.map((field, index) => (
                    <div key={index} className="flex  flex-wrap gap-2 my-2 items-center  text-center">
                      <div className='flex flex-wrap gap-2'> <input
                        type="text"
                        placeholder="Attribute Name"
                        value={field.label}
                        onChange={(e) => handleAttributeChange(index, "label", e.target.value)}
                        className="px-2 py-1 border rounded "
                        />
                        <input
                        type="text"
                        placeholder="Value"
                        value={field.value}
                        onChange={(e) => handleAttributeChange(index, "value", e.target.value)}
                        className="px-2 py-1 border rounded"
                                />
                                </div> 
                        <button
                        type="button"
                        onClick={() => removeAttribute(index)}
                        className="bg-red-500 text-white px-2 rounded"
                        >
                        Remove
                        </button>
                    </div>
                    ))}

                    <button
                    type="button"
                    onClick={addAttribute}
                    className="bg-[#FCAD3F] text-black px-4 py-1 rounded mt-2"
                    >
                    Add Attribute
                    </button>
                    </div>

                  <button className=" bg-green-400 my-5 hover:bg-green-700 text-white lg:h-10 lg:w-20" onClick={btn}>SUBMIT</button>
          </div>
          </div>
          <div className='flex justify-center items-center bg-purple-600'>
              <Link href="/show"><button className="bg-cyan-900 hover:bg-cyan-400  w-28 h-11 mx-36 my-4">SHOW LIST</button></Link></div>
          
      </>
  )
}

export default FORM