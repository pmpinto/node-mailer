// We need `;` here, otherwise it will complain about `require`
const nodemailer = require("nodemailer");

(() => {
    const config = {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "7157562ecb8959",
            pass: "f1479dcd6a8cfe",
        },
    }

    const transport = nodemailer.createTransport(config)

    const message = {
        from: "fernando.mendes@preco-certo.pt",
        to: "pedro.pinto@virtual-identity.com",
        subject: "Testing node mailer",
        text: "Hello world this is a placeholder email text."
    }

    transport.sendMail(message, (error, info) => {
        console.log(error || info)
    })
})()
