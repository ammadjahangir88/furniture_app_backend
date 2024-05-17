const Product=require('../models/Products')


module.exports={
    createProduct: async(req,resp)=>{
        console.log(req.body)
        const newProduct= new Product(req.body)
        try{
            await newProduct.save();
            resp.status(200).json({ message: "Product Created Successfully" });
        }catch(error){
            resp.status(500).json({ message: "Failed to create a product", error: error });

        }
    },
    getAllProducts: async(req,resp)=>{
        try{
          const products=await Product.find().sort({createdAt:-1})
          resp.status(200).json(products)
        }catch(error){
            resp.status(500).json({ message: "failed to get all the products", error: error });
        }
    },
    getOneProduct: async(req,resp)=>{
        try{
          const product= await Product.findById(req.params.id)
          resp.status(200).json(product)
        }catch(error){
            
            resp.status(500).json({ message: "Failed to get the product", error: error });

        }
    },
    searchProduct: async(req, resp) => {
        try {
            const result = await Product.find({
                $text: { $search: req.params.key }
            });
            resp.status(200).json(result);
        } catch (error) {
            resp.status(500).json({ message: "Failed to fetch the search products", error: error });
        }
    },
    // searchProduct: async(req,resp)=>{
    //     try{
    //         const result= await Product.aggregate(
    //             [
    //                 {
    //                 $search: {
    //                     index: 'furniture',
    //                     text:{
    //                         query: req.params.key,
    //                         path: {
    //                             wildcard: '*'
    //                         }
    //                     }

    //                 }
    //                 }
    //             ]
    //         )
    //         resp.status(200).json(result)

    //     }catch(error){
    //         resp.status(500).json({ message: "failed to fetched the search products", error: error });
            
    //     }
    // }
}