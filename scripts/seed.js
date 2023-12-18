//This is where defaul data needs to reside
//Reference Sqlize seed.js exercise

import db from '../database/model.js'

await db.sync ({force:true})






await db.close()