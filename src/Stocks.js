import React from "react";
import "./App.css";
import { stockData } from "./data";

export const Stocks = () => {
    return (
        <>
            <div className="stock-container">
                {stockData.map((data) => {
                    return (
                        <div>
                            {data.image +
                                " , " +
                                data.name +
                                " ," +
                                data.price}
                        </div>
                    );
                })}
            </div>
        </>
    );
};