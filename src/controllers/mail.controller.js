const { request,response } = require('express');
const nodeMailer= require('nodemailer');


// estoy seguro que se puede optimizar en una sola función pero no me compliqué
  

const envioCorreo =async (req=request, resp=response)=>{
    let body=req.body;
    let config = nodeMailer.createTransport({
        host:'smtp.gmail.com',
         //host:'gmail',
         port:465,
         secure: true,
         auth:{
            user:'dosport.dev@gmail.com',
            pass:'oywhtadqatodrlsm'
         },
         tls: {
            rejectUnauthorized: false
        }
    });

    const options={
        from: 'dosport.dev@gmail.com',
        //from:body.email,
        subject: body.asunto,
        to:body.email,
        //to:'dosport.dev@gmail.com',
        text:body.mensaje
    };

    config.sendMail(options,function(error, result){
        //if (error) return resp.json({ok:false,body,msg:error});
        if (error){
            console.log(error);
            return resp.json({ok:false,body,msg:error});
        }else{
            console.log(result);
            return resp.json({
                ok:true,
                msg:result
            })
        }
    });
};

module.exports={
    envioCorreo
};