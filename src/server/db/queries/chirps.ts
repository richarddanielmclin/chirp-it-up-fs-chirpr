import { Query } from "../index";

const all = async () => Query(
    `SELECT
        chirps.id,
	    users.name,
        chirps.content,
        chirps.location,
        chirps._created
    FROM chirps
    JOIN users ON users.id = chirps.userid
    ORDER BY chirps.id ASC`);

const one = async (chirpid: number) => Query(
    `SELECT
        chirps.id,
        users.name,
        chirps.content,
        chirps.location,
        chirps._created
    FROM chirps
    JOIN users ON users.id = chirps.userid
    WHERE chirps.id = ?`, [chirpid])

const insert = async (chirp: any) => Query(`INSERT INTO chirps SET ?`, chirp)

const update = async (newContent: string, chirpid: number) => Query(`UPDATE chirps SET ? WHERE id = ?`, [newContent, chirpid])

const destroy = async (chirpid: number) => Query(`DELETE FROM chirps WHERE id = ?`, [chirpid])

export default {
    all,
    one,
    insert,
    update,
    destroy
}