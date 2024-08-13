import express from 'express'
import  authentication  from './authentication';
import { register } from '../controllers/authentication'

export default (router: express.Router) => {
    authentication(router);
    router.post('/auth/register', register);
    router.post('/auth/register', register);
};