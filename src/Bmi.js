import { useState } from 'react';
import './Bmi.css';

export default function Pos() {
    
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [categories, setCategories] = useState("");
    const [totalBmi, setTotalBmi] = useState("");

    const computeBMI = () => {
        if(height === ""){
            alert("Enter your height");
            return
        }
        if(weight === ""){
            alert("Enter your weight");
            return
        }
        let heighInMetters = height / 100;
        let BMI = weight/(heighInMetters * heighInMetters)
        setTotalBmi(BMI.toFixed(1));
        console.log("BMI = " + BMI.toFixed(1));

        if(BMI < 18.5){
            setCategories("Underweight");
        }else if(BMI >= 18.5 && BMI <= 24.9){
            setCategories("Normal weight");
        }else if(BMI >= 25 && BMI <= 29.9){
            setCategories("Overweight");
        }else if(BMI >= 30){
            setCategories("Obesity");
        }
        alert("Total BMI: " + BMI.toFixed(1) + "\nCategories: " + categories);
    }

    return(
        <div className='bmi-container'>
            <h2>BMI Calculator</h2>
            <div className='form-container'>
                <input type="number" placeholder='Enter height (centemeter)' onChange={text => setHeight(text.target.value)}/>
                <input type="number" placeholder='Enter weight (kg)' onChange={text => {setWeight(text.target.value)}}/>
                <button onClick={computeBMI}>Compute BMI</button>
            </div>
            <div className='resutl-container'>
                <h3>BMI result: {categories} </h3>
                <h4>BMI Categories: {totalBmi} </h4>
            </div>
        </div>
    )
}