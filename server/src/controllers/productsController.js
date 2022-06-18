const productdb = require('../models/products')

class productsController {
    index = async (req, res) => {
        try {
            let products = await productdb.find({})
            res.json(products)
        } catch (error) {
            res.json(error)
        }
    }
    add = async (req, res) => {
        try {
            let category_id = req.body.categoryId
            let name = req.body.name
            let brand = req.body.brand
            let description = req.body.description
            let sale = req.body.sale
            let price = req.body.price
            let arrImges = req.files
            let images = [];
            //lấy filename ra cho vào mảng mới
            for (let i = 0; i < arrImges.length; i++) {
                images.push(arrImges[i].filename)
            }

            const data = await productdb.create({ category_id, name, brand, description, sale, price, images })
            res.send(`data:${category_id, name, brand, description, sale, price, images}`)

        } catch (error) {
            res.json(error)
        }
    }

}
module.exports = new productsController