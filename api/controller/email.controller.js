const functions = require ('../functions/email.functions');

exports.sendContactForm = (req, res) => {
    const { name, email, message } = req.body;
    const content = `name: ${name} \n email: ${email} \n message: ${message}`;
    const mailOptions = {
        from: name,
        to: process.env.ADMIN_EMAIL,
        subject: "New message from Contact form",
        text: content
    };
    functions.transporter().sendMail(mailOptions, function(error, info) {
        if (error) {
            return res.status(400).send({ error: 'Something went wrong...'})
        } else {
            return res.status(200).send({ message: 'Votre message a été envoyé !'})
        }
    });
}