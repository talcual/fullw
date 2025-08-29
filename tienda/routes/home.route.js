

const { listarProductos, search, findone } = require('../controllers/home.controller')

function homeRouter(express){
    const router = express.Router()
        
    router.get('/', listarProductos)
    router.get('/search', search )
    router.get('/:id', findone)
    
    return router
}


module.exports = homeRouter