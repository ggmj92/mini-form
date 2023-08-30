const express = require('express');

const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5002;

//Middleware
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ratiuguitar666@gmail.com',
            pass: 'PassWord123'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'ratiuguitar666@gmail.com',
        text: req.body.message
    }

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send('error')
            
        } else {
            console.log('Email sent!', info.response)
            res.send('Message sent successfully.')
            
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})