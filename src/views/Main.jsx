import React, {useState} from 'react';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MotorManiacs from "../img/MotorManiacs.jpg";
import ClassicGreen from "../img/ClassicGreen.jpg";
import SuperBoo from "../img/SuperBoo.jpg";
import Chemical from "../img/Chemical.jpg";
import Cbgb from "../img/Cbgb.jpg";
import SkateboardLover from "../img/SkateboardLover.jpg";
import Consume from "../img/Consume.jpg";
import HaroldHunter from "../img/HaroldHunter.jpg";
import CollegeSkull  from "../img/CollegeSkull.jpg";


export default function Home() {
const [tshirts = [
    {name: "college skull", image: CollegeSkull, price: 20, color: "black", brand: "zoo york"},
    {name: "Harold Hunter", image: HaroldHunter, price: 32, color: "white", brand: "dickies"},
    {name: "consume", image: Consume, price: 20, color: "grey", brand: "obey"},
    {name: "skateboard lover", image: SkateboardLover, price: 10, color: "white", brand: "The kooples"},
    {name: "cbgb", image: Cbgb, price: 20, color: "black", brand: "cbgb"},
    {name: "Chemical", image: Chemical, price: 35, color: "black", brand: "element"},
    {name: "Super Boo", image: SuperBoo, price: 40, color: "white", brand: "cbgb"},
    {name: "Classic green", image: ClassicGreen, price: 29, color: "green", brand: "dickies"},
    {name: "Motor maniacs", image: MotorManiacs, price: 33, color: "black", brand: "zoo york"},
], setTshirts] = useState()

const handlePrice = e => {
const filteredTshirts = tshirts.filter(tshirt => tshirt.price <= e)
setTshirts(filteredTshirts);
// const restoreTshirts = tshirts.filter(tshirt => e <= tshirt.price)
// setTshirts(restoreTshirts);
}

const handleBrand = e => {
    const filteredTshirts = tshirts.filter(tshirt => tshirt.brand === e)
    setTshirts(filteredTshirts);
}

const handleColor = e => {
    const filteredTshirts = tshirts.filter(tshirt => tshirt.color === e)
    setTshirts(filteredTshirts);
}

const handleReset = e => {
    const restoredTshirts = tshirts.filter(tshirt => tshirt.color === e)
    setTshirts(restoredTshirts);
}

    return (
        <div className="all">
            <Header Component={Header}/>
            <hr/>
            <div className="main">
            <div className="sideBar"><SideBar Component={SideBar} handlePrice={handlePrice} handleBrand={handleBrand} handleColor={handleColor}/></div>
            <div className="tshirts">
                {tshirts.map((t, i) => (
                    <ul key={i} className="tshirtsList">
                        <div className="row">
                        <li><h2>{t.name}</h2>
                <img src={t.image} alt="image"/>
                <h2 className="price">{t.price}€</h2>
                </li>
                        </div>
                    </ul>
                ))}

            </div>
            </div>
            <Footer Component={Footer}/>
        </div>
    )
}

