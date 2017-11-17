module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const { name, description, address, city, state, zip, imageURL, loan_amount, monthly_mortgage, recommended_rent, desired_rent, userID } = req.body

        db.new_property(name, description, address, city, state, zip, imageURL, loan_amount, monthly_mortgage, recommended_rent, desired_rent, userID)
            .then(properties => {
                res.status(200).send(properties)
                    .catch(() => res.status(500).send());
            })
    },

    search: (req, res, next) => {
        const db = req.app.get('db');

        db.properties()
            .then(properties => {
                res.status(200).send(properties)
                    .catch(() => res.status(500).send());
            })
    },

    filter: (req, res, next) => {
        const db = req.app.get('db')
        const { queery } = req;

        db.properties_filter(query.desired_rent)
            .then(properties => {
                res.status(200).send(properties)
                    .catch(() => res.status(500).send());
            })
    },

    delete: (req, res, next) => {
        const db = req.app.get('db')
        const { params } = req;

        db.properties_delete(params.id)
            .then(() => {
                res.status(200).send()
                    .catch(() => res.status(500).send());
            })
    }
}
