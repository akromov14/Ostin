import "./Home.css"
import React from 'react'

const Home = () => {
    return (
        <div className="container">
            <img src="https://osten-co.uz/images/index/home.jpg" alt=""  className="ostinimg"/>
            <div className="HomePage">
                <div className="HomePageText">
                        <h1 className="ostinText" size="sm">«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии</h1>
                        <p className="HomePageText2">Компания «Osten» была основана в 2019 году!</p>
                        <button className="btn" size="sm">ПОДРОБНЕ</button>
                </div>
            </div>         
        </div>
    )
}

export default Home;