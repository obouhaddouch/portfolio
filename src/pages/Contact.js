import React from 'react';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { EmailJSResponseStatus } from './../../node_modules/emailjs-com/es/models/EmailJSResponseStatus';
import contactInfoImg from './../img/contact-info.png'

import emailjs from 'emailjs-com';



const Contact = () => {



  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm(
      'service_1y76nl5', 
      'template_dody2vn',
      e.target, 
      'vEL0y_z6TBIn6AHGf'
    ).then(res=>{
      console.log("send");

    

      

    }).catch(err=> console.log("no"),);

  }

  return (

    <Paper className='contact-form-con'>

      <div className='contact-info'>

        <div className='center'>

        <img className='contact-info-img' src={contactInfoImg} alt='LOGO' /> 

        <h1> Contact Info </h1> 
        <h4> Outmane Bouhaddouch </h4>

        <p> 0687521934 </p>
        <p> dev.outmane@gmail.com </p>

        </div>
        


      </div>

      <form onSubmit={sendEmail} >
        <TextField id="outlined-basic" label="Naam" name="u-name" variant="outlined" className='input' />
        <TextField id="outlined-basic" label="e-mail" name="u-email" variant="outlined" className='input' />
        <TextField id="outlined-basic" label="Onderwerp" name="subject" variant="outlined" className='input' />

        <TextField
          fullWidth
          //multiline
          label="Bericht"
          InputProps={{
            inputComponent: TextareaAutosize,
            rows: 3
          }}
          className='input input-ms'
          name="message"
        />

        <Button type="submit" className='send-btn' variant="contained" endIcon={<SendIcon />}>
          Verstur
        </Button>

      </form>

    </Paper>

  )
}

export default Contact;
