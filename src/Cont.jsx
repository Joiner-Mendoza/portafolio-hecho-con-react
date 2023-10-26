// import React from "react";
import "./estilos/cont.css"
import emailjs from  '@emailjs/browser';

function Cont (){

    const sendEmail = (event) => {
     event.preventDefault();

     emailjs.sendForm('service_wezejej','template_rykckep',event.target,'xP-dPY6hbiUiWucRM')

    .then((response) => {
        alert('Formulario Enviado Exitosamente'+ JSON.stringify(response),3000)
    })
    .catch((Error) => {
        alert('Error Al Enviar El Formulario' + JSON.stringify(Error))
    });
}

    return(

<section className="contact" id="contact">
    
    <h2 className="title">Contact <span>Me!</span></h2>

    <form action="" onSubmit={sendEmail}>

        <div className="input-box">
            <div className="input-field" >
                <input type="text" id="input_name"name="user_name" className="input" placeholder="Your Name" required="required"/>
         

                <span className="focus"></span>
            </div>
            <div className="input-field" >
                <input type="text" name="subject_email"  className="input"placeholder="Your Email Addres" required />
                <span className="focus"></span>
            </div>
        </div>

        
        <div className="input-box">
            <div className="input-field" >
                <input type="number" name="number_mobile" className="input" placeholder="Number Mobile" required />
                <span className="focus"></span>
            </div>
            <div className="textarea">
                <textarea name="user_message"  id="" cols="30" rows="10" placeholder="Send Messague"  required></textarea>
                <span className="focus"></span>
            </div>        

        </div>
             <div className="btn-box btns">
                
                   <button  type="submit" className="ReadMore"> Send </button>

                </div>
    </form>
    

</section>

    )
}

export { Cont };




