const { Bio, PersonalInfo } = require('../model/Bio');

const getAllBios = async (req, res) => {
    const bio = await Bio.find();
    if(!bio) return res.status(204).json({'message' : 'No Bios found'});
    res.json(bio);
}
const createNewBio = async (req, res) => {
    const bio = await Bio.find();
    if(!bio) return res.status(204).json({'message' : 'No Bios found'});
    const { fitness_goal, current_weight, 
        goal_weight, current_max, 
        goal_max, fitness_level } = req.body;

    // Create a new document in the database
    const result = await Bio.create({
        fitness_goal, 
        current_weight, 
        goal_weight, 
        current_max, 
        goal_max, 
        fitness_level
    });
    res.status(201).json(result);
}
const createNewPi = async (req, res) => {
    const bio = await PersonalInfo.find();
    if(!bio) return res.status(204).json({'message' : 'No Personal Informatino found'});
    const { age, current_weight, current_height, gender, 
        name, goal_weight,level } = req.body;
    // Create a new document in the database
    const result = await PersonalInfo.create({
        age, 
        current_weight, 
        current_height, 
        gender, 
        name, 
        goal_weight,
        level
    });
    res.status(201).json(result);
}

const getBio = async (req, res) => {
    //Create obj to pass to Find to find by parameters
    let obj = { 
    name: req.body.name
    }
    //ADD VALIDATION OF PARAMETERS

    if (!req?.body?.name) {
        return res.status(400).json({ 'message': 'name required.' });
    }
    

    const bio = await Bio.findOne(obj);
    res.status(201).json(bio);
}

module.exports = {
    getAllBios,
    createNewBio,
    createNewPi,
    getBio
};