const port  = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error, log } = require("console");

app.use(express.json());
app.use(cors());

 

// Đường dẫn kết nối tới MongoDB Atlas
// const uri = 'mongodb+srv://nguyentam:123B56789@cluster0.kujvk4e.mongodb.net/Data?retryWrites=true&w=majority&appName=Cluster0';

const uri = 'mongodb://localhost:27017/DATA';

// Kết nối tới MongoDB Atlas
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Adjust the timeout value as needed
  })
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Failed to connect to MongoDB Atlas:', error);
});

// Lắng nghe sự kiện ngắt kết nối
mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB Atlas');
});


//API Creation
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb) =>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for Creating Products
const Product = mongoose.model('Product',{
    id:{
        type:Number,
        required: true,
    },
    name:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now, 
    },
    avilable:{
        type:Boolean,
        default:true,
    }

},'Products')

app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if(products.length>0){
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id+1;

        }else{
            id=1;
        }
        const product = new Product({
            id:id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        console.log(product);

        await product.save();

        console.log("Saved");

        res.status(200).json({product,
            success: true,
            name: req.body.name
         });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ success: false, error: "Error saving product" });
    }
});

//Update products
    // app.put('/products/:id', async (req, res) => {
    //     const { id } = req.params; // Lấy id của sản phẩm từ URL
    //     const { name, image, category, new_price, old_price } = req.body; // Lấy thông tin sản phẩm mới từ request body

    //     try {
    //         // Kiểm tra nếu sản phẩm tồn tại trong cơ sở dữ liệu
    //         const existingProduct = await Product.findById(id);
    //         if (!existingProduct) {
    //             return res.status(404).json({ message: 'Sản phẩm không tồn tại.' });
    //         }

    //         // Cập nhật thông tin sản phẩm
    //         existingProduct.name = name;
    //         existingProduct.image = image;
    //         existingProduct.category = category;
    //         existingProduct.new_price = new_price;
    //         existingProduct.old_price = old_price;

    //         // Lưu lại thông tin đã cập nhật
    //         const updatedProduct = await existingProduct.save();

    //         res.status(200).json(updatedProduct); // Trả về thông tin sản phẩm đã được cập nhật
    //     } catch (error) {
    //         console.error('Lỗi khi cập nhật sản phẩm:', error);
    //         res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật sản phẩm.' });
    //     }
    // });

    // app.put('/products/:id', async (req, res) => {
    //     const { id } = req.params; // Lấy id của sản phẩm từ URL
    //     const updateFields = req.body; // Lấy thông tin sản phẩm mới từ request body
    
    //     try {
    //         // Kiểm tra nếu sản phẩm tồn tại trong cơ sở dữ liệu
    //         const existingProduct = await Product.findById(id);
    //         if (!existingProduct) {
    //             return res.status(404).json({ message: 'Sản phẩm không tồn tại.' });
    //         }
    
    //         // Cập nhật thông tin sản phẩm
    //         Object.keys(updateFields).forEach(field => {
    //             existingProduct[field] = updateFields[field];
    //         });
    
    //         // Lưu lại thông tin đã cập nhật
    //         const updatedProduct = await existingProduct.save();
    
    //         res.status(200).json(updatedProduct); // Trả về thông tin sản phẩm đã được cập nhật
    //     } catch (error) {
    //         console.error('Lỗi khi cập nhật sản phẩm:', error);
    //         res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật sản phẩm.' });
    //     }
    // });
    

    app.put('/products/:id', async (req, res) => {
        const { id } = req.params; // Lấy id của sản phẩm từ URL
        const updateFields = req.body; // Lấy thông tin sản phẩm mới từ request body
    
        try {
            // Cập nhật thông tin sản phẩm
            const updatedProduct = await Product.findOneAndUpdate({ id: id }, updateFields, { new: true });
    
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Sản phẩm không tồn tại.' });
            }
    
            res.status(200).json(updatedProduct); // Trả về thông tin sản phẩm đã được cập nhật
        } catch (error) {
            console.error('Lỗi khi cập nhật sản phẩm:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật sản phẩm.' });
        }
    });
    

//Creating API for deleting Products
app.delete('/removeproduct',async(req,res)=>{
    await Product.deleteOne({id:req.body.id});
    console.log('Removed');
    res.json({
        success: true,
        name: req.body.name
    })
})

//Creating API for deleting Products
// app.delete('/removeuser',async(req,res)=>{
//     await Users.deleteOne({id:req.body.id});
//     console.log('Removed');
//     res.json({
//         success: true,
//         name: req.body.name
//     })
// })

// app.delete('/removeuser/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Users.deleteOne({ _id: id });
//         console.log('Removed user:', id);
//         res.json({
//             success: true,
//             _id: id
//         });
//     } catch (error) {
//         console.error('Error removing user:', error);
//         res.status(500).json({ success: false, error: 'Internal server error' });
//     }
// });


//Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    // res.send({count:products.length,products});
    res.send(products);
})

//Shema creating for User model
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    },
},'Users')

// Creating Endpoint for registering user
app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false,errors:'existing user found with same email address'});
    }

    let cart ={};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
        
    }

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData:cart,
    })

    await user.save();

    const data ={
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token});
})

app.get('/allusers',async(req,res)=>{
    let users = await Users.find({});
    console.log("Tất cả người dùng");
    // res.send({count:products.length,products});
    res.send(users);
})

//Creating endponit for user login
app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});

    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data ={
                user:{
                    id:user.id
                }
            }

            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }else{
            res.json({success:false,errors:"Sai mật khẩu"});
        }

    } else{
        res.json({success:true,errors:"Sai Email Id"});
    }
})

//creating endpoint for newcollection data
app.get("/newcollections",async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);

    console.log("Newcollection Fetched");
    res.send(newcollection);
})

//Creating endponit for popular in women section
app.get("/populariwomen",async(req,res)=>{
    let products = await Product.find({category:"Nữ"});
    let popular_in_women = products.slice(1).slice(-4);
    console.log("Những sản phẩm phổ biến của Nữ");
    res.send(popular_in_women);
})

app.get("/popularimen",async(req,res)=>{
    let products = await Product.find({category:"Nam"});
    let popular_in_men =  products.slice(1).slice(-4);
    console.log("Những sản phẩm phổ biến của Nam");
    res.send(popular_in_men);
})

app.get("/popularikids",async(req,res)=>{
    let products = await Product.find({category:"Trẻ em"});
    let popular_in_kids =  products.slice(1).slice(-4);
    console.log("Những sản phẩm phổ biến của trẻ");
    res.send(popular_in_kids);
})


// app.get("/popular",async(req,res)=>{
//     let products = await Product.find({category:"women,men"});
//     let popular = products.slice(0,8);

//     console.log("Popular ");
//     res.send(popular);
// })

// app.get("/popular", async (req, res) => {
//     try {
//         let products = await Product.find({ category: { $in: ["women", "men","kid"] } });
//         let popularWomen = [];
//         let popularMen = [];
//         let popularKids = [];
//         products.forEach(product => {
//             if (product.category === "women" && popularWomen.length < 2) {
//                 popularWomen.push(product);
//             }
//             if (product.category === "men" && popularMen.length < 2) {
//                 popularMen.push(product);
//             }
//             if (product.category === "kids" && popularMen.length < 2) {
//                 popularMen.push(product);
//             }
//         });
//         let popular = [...popularWomen, ...popularMen, ...popularKids];
//         console.log("Popular ");
//         res.send(popular);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// });

app.get("/popular", async (req, res) => {
    try {
        let products = await Product.find({ category: { $in: ["Nữ", "Nam", "Trẻ em"] } });
        let popularWomen = [];
        let popularMen = [];
        let popularKids = [];
        products.forEach(product => {
            if (product.category === "Nữ" && popularWomen.length < 2) {
                popularWomen.push(product);
            }
            if (product.category === "Nam" && popularMen.length < 2) {
                popularMen.push(product);
            }
            if (product.category === "Trẻ em" && popularKids.length < 1) {
                popularKids.push(product);
            }
        });
        let popular = [...popularWomen, ...popularMen, ...popularKids];
        console.log("Popular ");
        res.send(popular);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

//creating middleware to fetch user
const fetchUser = async(req,res,next) =>{
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"});
    }else{
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();            
        } catch (error) {
            res.static(401).send({errors:"please authenticate using a valid token"});
        }
    }
}

// Creating endpoint for adding products in cartdata
app.post("/addtocart",fetchUser,async(req,res)=>{
    console.log("Added",req.body.itemId);
   let userData = await Users.findOne({_id:req.user.id});
   userData.cartData[req.body.itemId] += 1;
   await Users.findByIdAndUpdate({_id:req.user.id},{cartData:userData.cartData});
   res.send("Đã thêm sản phẩm vào giỏ hàng");

})

app.delete('/removetocart', fetchUser, async (req, res) => {
    console.log("RemoveFromCart", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    delete userData.cartData[req.body.itemId]; // Xóa đơn hàng khỏi giỏ hàng
    await Users.findByIdAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Đã xóa khỏi giỏ hàng");
});





// Creating endpoint for remove products in cartdata
app.post("/removefromcart",fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
   let userData = await Users.findOne({_id:req.user.id});

   if (userData.cartData[req.body.itemId]>0) 
   userData.cartData[req.body.itemId] -= 1;
   await Users.findByIdAndUpdate({_id:req.user.id},{cartData:userData.cartData});
   res.send("Removed");

})

//Creating endpoint to get cartData
app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);

})


// const orderSchema = new mongoose.Schema({
//     email: String,
//     address: String,
//     phoneNumber: String,
//     cartItems: Object, // Chứa thông tin sản phẩm trong giỏ hàng
//     totalAmount: Number // Tổng số tiền thanh toán
//   });
  
//   const Order = mongoose.model('Order', orderSchema);
  
//   // Route để lưu đơn hàng
//   app.post('/api/order', async (req, res) => {
//     try {
//       const { email, address, phoneNumber, cartItems, totalAmount } = req.body;
      
//       // Tạo mới đơn hàng
//       const order = new Order({ email, address, phoneNumber, cartItems, totalAmount });
      
//       // Lưu đơn hàng vào cơ sở dữ liệu
//       await order.save();
      
//       res.status(201).send('Đơn hàng đã được lưu.');
//     } catch (error) {
//       console.error('Lỗi khi lưu đơn hàng:', error);
//       res.status(500).send('Đã xảy ra lỗi khi lưu đơn hàng.');
//     }
//   });

const orderSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phoneNumber: String,
    cartItems: Object, // Chứa thông tin sản phẩm trong giỏ hàng
    totalAmount: Number // Tổng số tiền thanh toán
});
  
const Order = mongoose.model('Order', orderSchema);
  
// Route để lưu đơn hàng
app.post('/api/order', async (req, res) => {
  try {
    const { name, email, address, phoneNumber, cartItems, totalAmount } = req.body;
      
    // Tạo mới đơn hàng
    const order = new Order({ name, email, address, phoneNumber, cartItems, totalAmount });
      
    // Lưu đơn hàng vào cơ sở dữ liệu
    await order.save();
      
    res.status(201).send('Đơn hàng đã được lưu.');
  } catch (error) {
    console.error('Lỗi khi lưu đơn hàng:', error);
    res.status(500).send('Đã xảy ra lỗi khi lưu đơn hàng.');
  }
});

app.get('/allorders', async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách đơn hàng:', error);
      res.status(500).send('Đã xảy ra lỗi khi lấy danh sách đơn hàng.');
    }
  });



  
  
  
  

app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port: http://localhost:"+ port)
    }
    else{
        console.log("Error: "+error)
    }
})

