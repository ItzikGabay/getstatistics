// import database from '../../middleware/firebase/database/index'
import database from '../../middleware/database/realtime/index'

export default {
    test: async ({ commit }, item) => {
        debugger;
        const posts = await database.insertItem({endpoint: 'posts', item: item})
        return posts
    }
}