import * as mysql from 'mysql';
import config from '../config';

import Users from './queries/users'
import Chirps from './queries/chirps'

export const Connection = mysql.createConnection(config.mysql);

export const Query = (query: string, values?: Array<string | number>) => {

    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, res) => {
            if (err) return reject(err);
            return resolve(res);
        })
    })
}

export default {
    Users,
    Chirps
}