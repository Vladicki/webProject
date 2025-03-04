import express from "express";
const router = express.Router();

//get all resumes
router.get('/get');
//get a single resume
router.get('/get');

//create a resume
router.post('/create');
//update a resume
router.patch('/update');
//delete a resume
router.delete('/delete');



export default router;