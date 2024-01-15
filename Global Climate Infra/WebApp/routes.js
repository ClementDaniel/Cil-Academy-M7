import express from 'express'
import { createOrUpdate, deleteUserById, getUserById, readAllUsers } from './db.js'

const router = express.Router()

// // READ ALL gcDDBtable
// router.get('/gcDDBtable', async (req, res) => {
//     const { success, data } = await readAllUsers()

//     if (success) {
//         const latestData = data.length > 0 ? data[0] : null;
//         return res.render('./home.ejs', { data: latestData });
//         res.render("./history.ejs", { data });
//     }
//     return res.status(500).json({ success: false, messsage: "Error" })
// })
// READ ALL gcdynamodbtable
router.get('/gcDDBtable', async (req, res) => {
    try {
        const { success, data } = await readAllUsers()

        if (success) {
            return res.render("./home.ejs", { data: data[data.length - 1] })
        }
        return res.status(500).json({ success: false, messsage: "Error" })
    }
    catch (e) {
        console.log(e)
    }
})
// READ ALL gcdynamodbtable
router.get('/history', async (req, res) => {
    try {
        const { success, data } = await readAllUsers()

        if (success) {
            return res.render("./history.ejs", { data: data.slice(0, 50) })
        }
        return res.status(500).json({ success: false, messsage: "Error" })
    }
    catch (e) {
        console.log(e)
    }
})

router.get('/gcDDBtable', async (req, res) => {
    try {
        const { success, data } = await readAllUsers()

        if (success) {
            return res.render("./history.ejs", { data: data[data.length - 1] })
        }
        return res.status(500).json({ success: false, messsage: "Error" })
    }
    catch (e) {
        console.log(e)
    }
})

// // Get gcdynamodbtable by ID
// router.get('/gcDDBtable/:id', async (req, res) => {
//     const { id } = req.params
//     const { success, data } = await getUserById(id)
//     console.log(data)
//     if (success) {
//         return res.json({ success, data })
//     }

//     return res.status(500).json({ success: false, message: "Error" })
// })


// Create gcdynamodbtable
router.post('/gcDDBtable', async (req, res) => {
    const { success, data } = await createOrUpdate(req.body)

    if (success) {
        return res.json({ success, data })
    }

    return res.status(500).json({ success: false, message: 'Error' })
})


// Update gcdynamodbtable by ID
router.put('/gcDDBtable/:id', async (req, res) => {
    const user = req.body
    const { id } = req.params
    user.id = parseInt(id)

    const { success, data } = await createOrUpdate(gcdynamodbtable)

    if (success) {
        return res.json({ success, data })
    }

    return res.status(500).json({ success: false, message: "Error" })
})


// // Delete gcdynamodbtable by Id
// router.delete('/gcDDBtable/:id', async (req, res) => {
//     const { id } = req.params
//     const { success, data } = await deleteUserById(id)
//     if (success) {
//         return res.json({ success, data })
//     }
//     return res.status(500).json({ success: false, message: 'Error' })
// })




export default router
