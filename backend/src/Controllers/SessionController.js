const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const org = await connection('ong')
        .where('id', id)
        .select('name')
        ;first();

        if (!ong){
            return response.status(400).json({ error: 'No fucking ID this time'});
        }

        return response.json(ong);
    }
}