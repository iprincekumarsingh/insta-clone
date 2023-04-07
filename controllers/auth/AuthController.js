
let ejs = require('ejs');
exports.login= (req, res) => {

    // render the login page
    ejs.renderFile('views/login.ejs', (err, result) => 
    {
        if (err) {
            console.log(err);
            res.send("An error occurred"+err);
        }
        else {
            res.end(result);
        }
    });
}

exports.signup= (req, res) => {
    
        // render the login page
        ejs.renderFile('views/signup.ejs', (err, result) => 
        {
            if (err) {
                console.log(err);
                res.send("An error occurred"+err);
            }
            else {
                res.end(result);
            }
        });
    }