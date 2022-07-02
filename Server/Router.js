const express = require("express")
const {getUsers,addUser, getUser,editUser, deleteUser} = require("../Crontroler/UserControler")


const router = express.Router()


router.post('/add',addUser)
router.get('/add',getUsers)
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);




module.exports = router;