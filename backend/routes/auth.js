const router = require('express').Router();
const User = require('../models/users.model')
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const proxy = require('./setupProxy');

// SIGN UP

router.post('/signup', (req, res) => {

    User.find({ email: req.body.email })
        .then(user => {
            if (user.length > 0) {
                res.status(400).json({ flash: "This email is already used!" })
            } else {
                const user = new User({
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10)
                })
                user.save()
                    .then(user => {
                        // res.json('User added successfully.')
                        const token = jwt.sign(JSON.stringify(user), 'your_jwt_secret');
                        return res.json({ user, token });
                    })
                    .catch(error => {
                        console.log(error)
                        res.status(500).json('An error has occured.')
                    })
            }
        })
        .catch(err => {
            res.status(400).send('An error occured.')
        })

})

// Passport strategy
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    function (email, password, cb) {

        User.findOne({ email: email })
            .then(user => {
                if (!user) {
                    return cb(null, false, { message: 'Incorrect email or password(email).' });
                } else {
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch) {
                            return cb(null, user, { message: 'Logged In Successfully' });
                        }
                        else {
                            return cb(null, false, { message: 'Incorrect email or password(pass).' })
                        }
                    })
                }

            })
            .catch(err => cb(err));

    }
));

//SIGN IN

router.post('/signin', (req, res) => {

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).send(err)
        }
        if (!user) {
            return res.status(400).json({ message: info.message });
        }
        const token = jwt.sign(JSON.stringify(user), 'your_jwt_secret');
        return res.json({ user, token });
    })(req, res)
})



module.exports = router