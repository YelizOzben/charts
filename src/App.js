/* import logo from './logo.svg';
import './App.css'; */
import React, { useState, useEffect } from 'react';
import Area from './Area';
import ChartItem from './ChartItem';
import './chart.css';

function App() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
  }
  const [barData, setBarData] = useState([
    {
      id: 1,
      title: "Coca Cola",
      color: "red",
      value: getRandomNumber(),
      imageUri: "https://marka-logo.com/wp-content/uploads/2020/08/Coca-Cola-Logo.png"
    }, 
    {
      id: 2,
      title: "IBM",
      color: "blue",
      value: getRandomNumber(),
      imageUri: "https://bte.com.tr/wp-content/uploads/2017/05/ibm-logo.jpg"
    },
    {
      id: 3,
      title: "Google",
      color: "yellow",
      value: getRandomNumber(),
      imageUri: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
    },
  ])
  useEffect(function () {
    let timer;
    timer = setInterval(() => {
      setBarDataWithRandomNumber()
    }, 500);
    return () => clearInterval(timer);
  }, [barData])
  const setBarDataWithRandomNumber = () => {
    let data = JSON.parse(JSON.stringify(barData));
    data.forEach((barItem) => {
      barItem.value += getRandomNumber()
    })
    setBiggestBardData(findBiggesBarItem(data))
    setBarData(data)
  }
  const findBiggesBarItem = (data) => {
    return data.sort((val1, val2) => val2.value - val1.value)[0].value
  }
  const [biggestBarData, setBiggestBardData] = useState(findBiggesBarItem(barData))
  const renderBarItem = (barItem, index) => {
    let rate = barItem.value / biggestBarData
    rate = rate * (800 - 40)
    const percent = (rate * 100) / 1440
    return (
      <ChartItem key={barItem.id} imageUri={barItem.imageUri} backgroundcolor={barItem.color} barwidth={percent + '%'} topDistance={(index === 0 ? 10 : (index * 40) + 20) + 'px'} barcount={barItem.value} title={barItem.title} />
    )
  }
  return (
    <>
      <Area data={barData}>
        {barData.map((barItem, index) => renderBarItem(barItem, index))}
      </Area>
    </>);
}

export default App;
