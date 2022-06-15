import React from 'react';
import Category1 from '../assets/category-1.jpg';
import Category2 from '../assets/category-2.jpg';
import Category3 from '../assets/category-3.jpg';

const Categories = () => {
    return (
        <section className="categories">
            <div className="container">
                <h2> Featured categories </h2>
                <div className="row">
                    <div className="col-3">
                        <img src={Category1} alt="" />
                    </div>
                    <div className="col-3">
                        <img src={Category2} alt="" />
                    </div>
                    <div className="col-3">
                        <img src={Category3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;