import React, { Component } from 'react';
const Form = props =>(
    <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="city..."/>
                <input type="text" name="country" placeholder="country..."/>
                <button> GET WEATHER </button>
            </form>
);
 
export default Form;