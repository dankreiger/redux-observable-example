import { schema } from 'normalizr';

export const repoSchema = new schema.Entity('repos');
export const reposListSchema = [repoSchema];
