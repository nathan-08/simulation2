module.exports = {
    login: (req, res, next) => {
        const db = req.app.get('db')
        const { name, password } = req.body;

        db.login_user(name, password)
            .then((user) => {
                console.log(user)
                res.status(200).send(user)
            
            })
    },

    register: (req, res, next) => {
        const db = req.app.get('db')
        const { name, password } = req.body;
        
        db.register_user(name, password)
            .then((user)=>{ 
                console.log('new registered user: ',user)
                res.status(200).send(user)})
    },

    logout: (req, res, next) => {
        const db = req.app.get('db')
        const { session } = req
        session.destroy()
        res.status(200).send(req.session)
    }
}