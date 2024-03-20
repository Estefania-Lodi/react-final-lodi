import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
    return (
        <div>
            <h2 className="text-center mb-4">Categorías</h2>
            <div className="row mt-5 cardCenter">
                <div className="cardStyle">
                    <Link to='/cremas'><img src="img/Cremas.jpg" className="card-img-top" alt="Productos de Cremas"/></Link>
                    <h5 className="text-center mt-3">Cremas</h5>
                    <div className="btn-container">
                        <Link to='/cremas'><button className="btn btn-primary mt-3 custom-btn-green">Ver más</button></Link>
                    </div>
                </div>
                <div className="cardStyle">
                    <Link to='/maquillajes'><img src="img/Maquillajes.jpg" className="card-img-top" alt="Productos de Maquillajes"/></Link>
                    <h5 className="text-center mt-3">Maquillajes</h5>
                    <div className="btn-container">
                        <Link to='/maquillajes'><button className="btn btn-primary mt-3 custom-btn-green">Ver más</button></Link>
                    </div>
                </div>
                <div className="cardStyle">
                    <Link to='/exfoliantes'><img src="img/Exfoliante.jpg" className="card-img-top" alt="Productos de Exfoliantes"/></Link>
                    <h5 className="text-center mt-3">Exfoliantes</h5>
                    <div className="btn-container">
                        <Link to='/exfoliantes'><button className="btn btn-primary mt-3 custom-btn-green">Ver más</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
