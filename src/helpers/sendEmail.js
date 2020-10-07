require('dotenv').config()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

module.exports = {
    send:(data)=>{
        return new Promise((resolve, reject)=>{
            const mailOptions = {
                from: process.env.EMAIL,
                to: data.to,
                subject: data.subject,
                html: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>coba saja</title>
                    <style>
                    .container{
                        height: 100%;
                        width: 100%;
                        font-family: Arial, Helvetica, sans-serif;
                    }
                    </style>
                </head>
                <body>
                    <div class="container">
                        A request has been received to change the password for your ZWallet account.
                        <br>
                        Click <a href=" + process.env.RESET_PASSWORD_URL + ">here!</a>
                    </div>
                </body>
                </html>
                `
            }
            transporter.sendMail(mailOptions, (err, info) =>{
                if(err){
                    reject(err)
                    throw err;
                }else{
                    response.error = false
                    response.status = 200
                    response.message = "Successfully Send Email Nodemailer"
                    resolve(response)
                }
            })
        })
    }
}