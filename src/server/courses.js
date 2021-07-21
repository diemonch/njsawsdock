const express = require('express');
const Joi = require('joi');
const router = express();
router.use(express.json());


const courses = [
    { id:1, name:'Node Js'},
    { id:2, name:'React JS'},
    { id:3, name:'Docker'},
    { id:4, name:'AWS Developer Tools'},
    { id:5, name:'GIT Hub and Commands'},
    { id:6, name:'CI/CD Pipeline with AWS ECS'}
];



router.get('/', (req,res)=>{
    res.send(courses);
});

router.get('/:id', (req,res)=>{
    let course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The requested Course ID was not found');
    res.send(course);
});

router.post('/', (req,res)=>{
    const name = { name: req.body.name };
    const {error}= validateCourse(name);
    if (error) return res.status(400).send(error.detaials[0].message);

    let course ={
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

router.put('/:id', (req,res)=>{
    let course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The requested Course ID was not found');
    const name = { name: req.body.name };
    const {error}= validateCourse(name);
    if (error) return res.status(400).send(error.detaials[0].message);
    course.name=req.body.name;
    res.send(course);
});


router.delete('/api/courses/:id', (req,res)=>{
    let course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The requested Course ID was not found');
    
    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});



function validateCourse(course){

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);

}

module.exports=router;