const express = require('express');
const Joi = require("joi");
const router = express.Router();
const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Romance' },
];

router.get('/', (req, res) => {
    res.send(genres);
});

router.post('/',(request,response)=>{
    const { error }= validateName(request.body);
    if(error)
    {
        return response.status(400).send(error.details[0].message);
    }
    const genre = {
        id: genres.length + 1,
        name: request.body.name
    };
    genres.push(genre);
    response.send(genre);
});
router.get('/:id',function (request,response){
    const genre=genres.find(c=>c.id===parseInt(request.params.id));
    if(!genre)
    {
        response.status(400).send('genre not found with the given id: ');
    }
    response.send(genre);
});
router.put('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre)
        return res.status(404).send('The genre with the given ID was not found.');

    const { error } = validateName(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
});
router.delete('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
});
function validateName(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);

}
module.exports = router;