import { Product } from "../model/product.model.js";

export const getproduct = async (req, res) => {

    try {

        const { name, minPrice, maxPrice, category } = req.query
        const queryObject = {}
        if (name) {
            queryObject.name = { $regex: name }
        }

        if (minPrice) {
            queryObject.price = {
                ...queryObject.price,
                $lt: Number(minPrice),
            }
        }

        if(maxPrice){
            queryObject.price ={
                ...queryObject.price ,
                $gt:Number(maxPrice)
            }
        }

        if (category) {
            queryObject.category = category
        }

        let page  =  Number(req.query.page) || 1;
        let limit =  Number(req.query.limit) || 10 
        let skip = (page - 1) *limit

        const product = await Product.find(queryObject).sort({price:-1}).skip(skip).limit(limit)
        const totalProduct =  await Product.countDocuments({})
        return res.status(200).json({ product, totalProduct: totalProduct , 
            productCount:product.length , limit:limit  , page:page , skip:skip})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server Error" })
    }
}




export const addProduct = async (req, res) => {
    try {
        const { name, price, category, brand, stock, rating } = req.body
        const product = await Product.create({
            name, price, category, brand, stock, rating
        })

        return res.status(200).json({ message: "Product Add Successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server Error" })
    }
}

export const deleteProduct = async (req, res) => {
    try {

        const id = req.params.id
        const product = await Product.deleteOne({ _id: id })
        return res.status(200).json({ message: "Product Delete Successfully.", product })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server Error" })
    }
}


export const editProduct = async (req, res) => {
    try {
        const updated = req.body
        const id = req.params.id
        const product = await Product.updateOne({ _id: id }, { $set: updated })

        if (!product) {
            return res.status(400).json({ message: "Prouct not found" })
        }

        return res.status(200).json({ message: "Update Product Successfully.", product })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server Error" })
    }
}