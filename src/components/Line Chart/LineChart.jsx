import React, { useEffect } from 'react'
import { useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({props}) => {

    const [data , setData] = useState([["Date" , "Prices"]]);

    useEffect(()=>{
        let dataCopy = [["Date", "Prices"]];
        if(props.prices){
            props.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
            })
            setData(dataCopy);
        }
    },[props])
  return (
    <Chart chartType='LineChart' data={(data)} height="100%"/>
  )
}

export default LineChart