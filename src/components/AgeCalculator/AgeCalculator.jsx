


import { useState } from "react"
import styles from "./AgeCalculator.module.css"
const {container, heading, Container_middle_para,middle, right, date, button_div, button, left, yourAge } = styles

const AgeCalculator = () => {

    const [birthDate, setBirthDate] = useState('')
    const [age, setAge] = useState(null)


    // function to calculate age
    const calculateAge = () => {
        const birthdate = new Date(birthDate)
        const today = new Date()

        const years = today.getFullYear() - birthdate.getFullYear()
        const months = today.getMonth() - birthdate.getMonth()
        const days = today.getDate() - birthdate.getDate()

        let ageYears =years;
        let ageMonths = months;
        let ageDays = days;

        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthdate.getDate());
            ageMonths -= 1;
            ageDays = Math.floor((today - lastMonth) / (24 * 60 *60 * 1000))
        
        }

        if (months < 0) {
            ageYears -= 1;
            ageMonths += 12;
        }

        setAge ({
            years: ageYears,
            months: ageMonths,
            days: ageDays
        })


    }

  return (
    <div className={container}>
        <div className={heading}>
        <h1>Age Calculator</h1>
        <p >The Age Calculator can determine the age, enter your date of birth.</p>

        </div>
    
    <div className={middle}>
           <div className={right}>
               <h4>Date of Birth</h4>
               <input className={date} type="date" value={birthDate} 
               onChange={(e) => {
                if (e.target.value.length <= 10) {
                    setBirthDate(e.target.value)
                }
               }} 
               max="9999-12-31"
               min="0000-01-01"
               />
               <div className={button_div}>
               <button className={button} onClick={calculateAge}>Calculate Age</button>
               </div>
           </div>
            
           <div className={left}>
               <div className={Container_middle_para}>
                   <h3>Your Age is</h3>
               </div>
               {age && (

                    <p>{age.years} years, {age.months} months, and {age.days} days old</p>

               )}
           </div>
    </div>
   </div>
  )
}

export default AgeCalculator