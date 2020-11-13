var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'rk7807043627@gmail.com',
        pass: '8219878180'
    }
});

let body = {
    from: 'rk7807043627@gmail.com',
    to: 'rohit.kumar@maimt.com',
    subject: "This is test mail",
    text: "Hello from rohit"
}
transporter.sendMail(body, (err, info) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log("email has send", info.response);

    }
})