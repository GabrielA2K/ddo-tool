import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navigation from './components/Navigation'
import './App.css'

function App() {
  const tempDB = 
  {
      staff: 
      [
        {name: "Daryl Severino", role: "intern"},
        {name: "Romel Macaspac", role: "intern"},
        {name: "Rhyza Mallari", role: "intern"},
        {name: "Christopher Mungcal", role: "intern"},
        {name: "Lanca Simbillo", role: "intern"},
        {name: "Jeremy Tecson", role: "intern"},
        {name: "Cedrix John Sarmiento", role: "intern"},
        {name: "Tristan Tulilis", role: "intern"},
        {name: "Joachim Saulo", role: "intern"},
        {name: "Elidan Lumbang", role: "intern"},
        {name: "Kenneth Quiambao", role: "intern"},
        {name: "Joshua Yumul", role: "intern"},
        {name: "Matthew Tamondong", role: "intern"},
        {name: "Mikaela Alexis Gomez", role: "intern"},

        {name: "Kerby Mathew Sarcia", role: "tech-asst"},
        {name: "Mark Leigh David", role: "tech-asst"},
        {name: "Tristan Jasper Santos", role: "tech-asst"},
        
        {name: "Jose Gabriel Castillo", role: "associate"},
        {name: "Mc Karl Kennedy Javier", role: "associate"},
        {name: "Keren Calalang", role: "associate"},
        
        {name: "Vincent Cumayas", role: "senior"},

        {name: "Mark Liwanag", role: "lead"},
        {name: "Crislen Joie Quijano", role: "lead"},
        {name: "Franklin Sula", role: "lead"},
        {name: "Aldrich Bondoc", role: "lead"},
        {name: "Alonzo Pamintuan", role: "lead"},
        {name: "Justin Serrano", role: "lead"},

        {name: "Evelyn Layson", role: "hr"},

        {name: "Ma. Ronna Silos", role: "executive"},
        {name: "Mark Nuqui", role: "executive"},
        {name: "Jhon Nuqui", role: "executive"}
      ]
    }
  console.log(tempDB.staff)
  const [count, setCount] = useState(0)

  return (
    <>
      <div 
        className
          ='h-[100dvh] min-[600px]:h-[95dvh]
            w-full max-w-[600px] 
            flex flex-col 
            mx-auto 
            min-[600px]:rounded-[2rem]
            overflow-hidden 
            transition-all'
      >

        <div className="bg-[rgb(233,233,241)] w-full flex-1 p-[1rem] max-h-[calc(100dvh_-_5rem)] overflow-y-auto">
          {(tempDB.staff).map((item,index)=>
            <div className="bg-white h-[5rem] w-full rounded-[1rem] mb-[1rem] p-[1rem]">
              <p className='text-black font-bold'>{item.name}</p>
              <p className='text-black text-[0.8rem]'>{item.role}</p>
            </div>
          )}
          
        </div>
          
        <Navigation tabs={[{name: "Page 1"}, {name: "Page 2"}, {name: "Page 3"}]} />
      </div>
    </>
  )
}

export default App
