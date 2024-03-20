import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const { cart, clearCart, totalPrice } = useCart();

  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    nombre: '',
    ciudad: '',
    calle: '',
    numero: ''
  });

  const [orderId, setOrderId] = useState(null);

  const handleNombre = (e) => {
    const value = e.target.value;
    setNombre(value);
    setSubmitted(false);
    if (!/^[a-zA-Z\s]+(\s+[a-zA-Z\s]+)*$/.test(value.trim())) {
      setErrorMsg(prevState => ({ ...prevState, nombre: 'El nombre solo debe contener letras y espacios' }));
    } else {
      setErrorMsg(prevState => ({ ...prevState, nombre: '' }));
    }
  };  

  const handleCiudad = (e) => {
    const value = e.target.value.trim();
    setCiudad(value);
    setSubmitted(false);
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setErrorMsg(prevState => ({ ...prevState, ciudad: 'La ciudad solo debe contener letras y espacios' }));
    } else {
      setErrorMsg(prevState => ({ ...prevState, ciudad: '' }));
    }
  };

  const handleCalle = (e) => {
    const value = e.target.value.trim();
    setCalle(value);
    setSubmitted(false);
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setErrorMsg(prevState => ({ ...prevState, calle: 'La calle solo debe contener letras y espacios' }));
    } else {
      setErrorMsg(prevState => ({ ...prevState, calle: '' }));
    }
  };

  const handleNumero = (e) => {
    const value = e.target.value.trim();
    setNumero(value);
    setSubmitted(false);
    if (!/^\d+$/.test(value)) {
      setErrorMsg(prevState => ({ ...prevState, numero: 'El número de casa solo debe contener números' }));
    } else {
      setErrorMsg(prevState => ({ ...prevState, numero: '' }));
    }
  };

  function validateInputs() {
    if (!nombre || !ciudad || !calle || !numero) {
      setErrorMsg(prevState => ({ ...prevState, errorMsg: 'Por favor ingrese datos válidos' }));
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      setErrorMsg(prevState => ({ ...prevState, nombre: 'El nombre solo debe contener letras y espacios' }));
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(ciudad)) {
      setErrorMsg(prevState => ({ ...prevState, ciudad: 'La ciudad solo debe contener letras y espacios' }));
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(calle)) {
      setErrorMsg(prevState => ({ ...prevState, calle: 'La calle solo debe contener letras y espacios' }));
      return false;
    }
    if (!/^\d+$/.test(numero)) {
      setErrorMsg(prevState => ({ ...prevState, numero: 'El número de casa solo debe contener números' }));
      return false;
    }
    setErrorMsg(prevState => ({ ...prevState, errorMsg: '' }));
    return true;
  }

  function handleBuy() {
    if (validateInputs()) {
      setIsProcessing(true);
      setTimeout(() => {
        clearCart();
        setSubmitted(true);
        setIsProcessing(false);
      }, 2000);
    }
  }

  return (
    <div className="container">
      <main>
        <div className="py-3 text-center">
          <p className="lead">Formulario de Pago</p>
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-black">Su carrito</span>
            </h4>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <Container key={item.id} className="list-group-item justify-content-between lh-sm">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{item.name}</h6>
                    </div>
                    <span className="text-muted">${item.price}</span>
                  </li>
                </Container>
              ))}
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0"><b>Total: ${totalPrice()}</b></h6>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Datos del cliente</h4>
            <div className="messages">
              {errorMsg.nombre && <div className="error"><h4 className="bg-custom-green text-white text-center">{errorMsg.nombre}</h4></div>}
              {errorMsg.ciudad && <div className="error"><h4 className="bg-custom-green text-white text-center">{errorMsg.ciudad}</h4></div>}
              {errorMsg.calle && <div className="error"><h4 className="bg-custom-green text-white text-center">{errorMsg.calle}</h4></div>}
              {errorMsg.numero && <div className="error"><h4 className="bg-custom-green text-white text-center">{errorMsg.numero}</h4></div>}
              {errorMsg.errorMsg && <div className="error"><h4 className="bg-custom-green text-white text-center">{errorMsg.errorMsg}</h4></div>}
              {submitted && <div className="success"><h4 className="bg-custom-green text-white text-center">Compra realizada con éxito</h4></div>}
              {isProcessing && <div className="success"><h4 className="bg-custom-green text-white text-center">Estamos preparando su envío...</h4></div>}
            </div>
            {!isProcessing && !submitted && (
              <form className="needs-validation" onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="name" className="form-label">Nombres y apellidos</label>
                    <input onChange={handleNombre} value={nombre} type="text" className="form-control input" id="name" placeholder="Nombres y apellidos" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="ciudad" className="form-label">Ciudad</label>
                    <input onChange={handleCiudad} value={ciudad} type="text" className="form-control input" id="ciudad" placeholder="Ciudad" required />
                  </div>
                  <div className="col-6">
                    <label htmlFor="calle" className="form-label">Calle</label>
                    <input onChange={handleCalle} value={calle} type="text" className="form-control input" id="calle" placeholder="Nombre de la calle" required />
                  </div>
                  <div className="col-6">
                    <label htmlFor="numero" className="form-label">Número</label>
                    <input onChange={handleNumero} value={numero} type="text" className="form-control input" id="numero" placeholder="Número de la casa" required />
                  </div>
                </div>
                <hr className="my-4" />
                <button onClick={handleBuy} className="w-50 btn btn-primary btn-lg position-relative top-50 start-50 translate-middle mt-5 custom-btn-green" type="button">Finalizar compra</button>
              </form>
            )}
            {submitted && (
              <div className="text-center mt-4">
                <Link to="/" className="btn btn-primary btn-lg custom-btn-green">Volver al inicio</Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
