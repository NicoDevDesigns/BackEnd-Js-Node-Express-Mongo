import { productModel } from "../models/products.models.js"

const getAllProductsStatic = async (req, res) => {
    const products = await productModel.find({
        //featured: false,
        //name: "Angel Glenn",
    })
    res.status(200).json({msg: 'products testing route',products, nbHits: products.length})
}

const getAllProducts = async (req, res) => {
    //console.log(req.query)
    const products = await productModel.find(req.query)
    res.status(200).json({msg: 'products route',products, nbHits: products.length})
}

export {getAllProductsStatic, getAllProducts}