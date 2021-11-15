import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/:id?', async (req, res, next) => {

    const userid = Number(req.params.id);

    if (userid) {
        try {
            const user = await db.Users.one(userid);
            res.json(user);
        } catch (err) {
            console.error(err);
            res.json(err)
        }
    }

    try {
        const users = await db.Users.all();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.json(err)
    }
})

export default router;