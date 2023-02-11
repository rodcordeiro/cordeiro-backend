import { Router } from 'express';

import { GithubAuth, GithubController } from '../Controllers/Github';

const ghEndpoints = Router();
const auth = new GithubAuth();
const github = new GithubController();

ghEndpoints.get('/gh/auth', auth.get_token);
ghEndpoints.get('/gh/token', auth.validateToken);

ghEndpoints.post('/gh/repos', github.getRepos);

export default ghEndpoints;
