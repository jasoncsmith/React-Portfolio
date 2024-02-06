import express from 'express';
import projects from './getProjects.js';

const router = express.Router();

router.get('/', projects);

export default router;
