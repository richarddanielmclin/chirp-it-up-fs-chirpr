import { Query } from "../index";

const all = async () => Query('SELECT id, name, email, _created FROM users')
const one = async (id: number) => Query('SELECT id, name, email, _created FROM users WHERE id = ?', [id])

export default {
    all,
    one
}