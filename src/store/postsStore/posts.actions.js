// import database from '../../middleware/firebase/database/index'
import database from '../../middleware/firebase/database'

export default {
    test: async ({ commit }) => {
        const posts = await database.findAll()
        debugger;
        return posts
    }
}