import React, { useState } from "react";
import axios from "axios";

export default function SideBar({handlePrice, handleBrand, handleColor}) {
    const [price, setPrice] = useState();
    const [tshirts, settshirts] = useState(null);


    const handleChangePrice = e => {
        if (e.target.name === "price") {
          setPrice(e.target.value);
        }
        handlePrice(e.target.value)
      };

    const handleChangeBrand = e => {
      handleBrand(e.target.name)
    }

    const handleChangeColor= e => {
      handleColor(e.target.name)
    }

    return (
        <form>
            <button className="reset">reset filters</button>
            <hr/>

            <div>
            <label htmlFor="labelPrice">
                <h2 className="sideTitle">Price max</h2> 
                </label>
        <input
          type="range"
          name="price"
          className="inputPrice"
          min="0"
          max="40"
          onChange={handleChangePrice}
        />
         <div>
        <p>
          {price}€
        </p>
      </div>
            </div>
            <hr/>

            <div>
            <h2 className="sideTitle">Brands</h2>
            <div className="brands">
            <label htmlFor="obey">obey</label>
              <input
                type="checkbox"
                name="obey"
                className="brand"
                value="obey"
                onClick={handleChangeBrand}
              />
              </div>
              <div className="brands">
              <label htmlFor="zooyork">zoo york</label>
              <input
                type="checkbox"
                name="zoo york"
                className="brand"
                value="zooyork"
                onClick={handleChangeBrand}
              />
              </div>
              <div className="brands">
              <label htmlFor="theKooples">The kooples</label>
              <input
                type="checkbox"
                name="The kooples"
                className="brand"
                value="theKooples"
                onClick={handleChangeBrand}
              />
              </div>
              <div className="brands">
              <label htmlFor="element">element</label>
              <input
                type="checkbox"
                name="element"
                className="brand"
                value="element"
                onClick={handleChangeBrand}
              />
              </div>
              <div className="brands">
              <label htmlFor="cbgb">cbgb</label>
              <input
                type="checkbox"
                name="cbgb"
                className="brand"
                value="cbgb"
                onClick={handleChangeBrand}
              />
              </div>
              <div className="brands">
              <label htmlFor="dickies">dickies</label>
              <input
                type="checkbox"
                name="dickies"
                className="brand"
                value="dickies"
                onClick={handleChangeBrand}
              />
              </div>
            </div>
            <hr/>

            <div>
            <h2 className="sideTitle">Colors</h2>
            <div className="colors">
            <input
                type="text"
                name="black"
                className="black"
                onClick={handleChangeColor}
              />
              <input
                type="text"
                name="white"
                className="white"
                onClick={handleChangeColor}
              />
              <input
                type="text"
                name="grey"
                className="grey"
                onClick={handleChangeColor}
              />
              <input
                type="text"
                name="red"
                className="red"
                onClick={handleChangeColor}
              />
                <input
                type="text"
                name="green"
                className="green"
                onClick={handleChangeColor}
              />
               <input
                type="text"
                name="blue"
                className="blue"
                onClick={handleChangeColor}
              />
              </div>
            </div>
            <hr/>
        </form>
    )
}
