import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/:id?', async (req, res) => {

    const chirpid = Number(req.params.id);

    if (chirpid) {
        try {
            const chirp = await db.Chirps.one(chirpid);
            res.json(chirp[0]);
        } catch (err) {
            console.error(err);
            res.json(err)
        }
    }

    try {
        const chirps = await db.Chirps.all();
        res.json(chirps);
    } catch (err) {
        console.error(err);
        res.json(err)
    }
})

router.post('/', async (req, res) => {
    
    const chirpDTO = req.body

    try {
        const result = await db.Chirps.insert(chirpDTO)
        res.json(result);
    } catch (err) {
        console.error(err);
        res.json(err)
    }
})

router.put('/:id', async (req, res) => {
    
    const chirpid = Number(req.params.id)
    const chirpDTO = req.body

    try {
        const result = await db.Chirps.update(chirpDTO, chirpid)
        res.json(result);
    } catch (err) {
        console.error(err);
        res.json(err)
    }
})

router.delete('/:id', async (req, res) => {
    
    const chirpid = Number(req.params.id)

    try {
        const result = await db.Chirps.destroy(chirpid)
        res.json(result);
    } catch (err) {
        console.error(err);
        res.json(err)
    }
})

export default router;