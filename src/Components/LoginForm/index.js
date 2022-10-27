import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"


export default function LoginForm(){
    return(
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <Image className = "ConnectIoTLogo" src="ConnectIoTLogo.png"/>
          <h3 className="Auth-form-title">Ingresa a tu Near Wallet</h3>
          <h4 className="Auth-form-subtitle">Accede a tu Near Wallet para poder iniciar en ConnectIoT</h4>
          <Image className = "NearLogo" src="near-protocol-near-logo.png"/>
          <div className="d-grid gap-2 mt-3">
            <Button href="/" className="btn btn-primary color-nav" >
              Ingresar a tu Near Wallet
            </Button>
            <p className="text-center mt-2">
            <a href="/login">Aun no tienes una Near Wallet? <br/> Crea una ahora</a>
          </p>
          </div>
        </div>
      </form>
    </div>
    )
}