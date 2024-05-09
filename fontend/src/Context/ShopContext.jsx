// import React, { createContext, useEffect, useState } from 'react'
// // import all_product from "../Components/Assets/all_product"

// export const ShopContext = createContext(null);

// const getDefaultCart = () =>{
//   let cart ={};
//   // for (let index = 0; index < all_product.length+1; index++) {
//   for (let index = 0; index < 300+1; index++) {
//      cart[index]=0;
    
//   }
//   return cart;
// }

// const ShopContextProvider = (props) => {

//     const[all_product,setAll_Product] = useState([]);
//     const [cartItems,setCartItems] = useState(getDefaultCart());
  
//     useEffect(()=>{
//       fetch('http://localhost:4000/allproducts')
//       .then((response)=>response.json())
//       .then((data)=>setAll_Product(data))

//       if (localStorage.getItem('auth-token')) {
//         fetch('http://localhost:4000/getcart',{
//           method:'POST',
//           headers:{
//             Accept:'application/form-data',
//             'auth-token':`${localStorage.getItem('auth-token')}`,
//             'Content-Type':'application/json',
//           },
//           body:"",
//         })
//         .then((response)=>response.json())
//         .then((data)=>setCartItems(data));
//       }
    
//     },[])

//     console.log(cartItems);

//     const addToCart = (itemId) =>{
//       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
//       console.log(cartItems);
//       if (localStorage.getItem('auth-token')) {
//         fetch('http://localhost:4000/addtocart',{
//           method:'POST',
//           headers:{
//             Accept:'application/form-data',
//             'auth-token':`${localStorage.getItem('auth-token')}`,
//             'Content-Type':'application/json',
//           },
//           body:JSON.stringify({"itemId":itemId}),
//         })
//         .then((response)=>response.json())
//         .then((data)=>console.log(data));

//       }
//     }

//     const remove_product = (itemId) => {
//       setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
      
//       if (localStorage.getItem('auth-token')) {
//           fetch('http://localhost:4000/removetocart', {
//               method: 'DELETE',
//               headers: {
//                   Accept: 'application/json',
//                   'auth-token': `${localStorage.getItem('auth-token')}`,
//                   'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ itemId: itemId }),
//           })
//           .then((response) => response.json())
//           .then((data) => console.log(data))
//           .catch((error) => console.error('Error:', error));
//       }
//   }
  

//     const minustoCart = (itemId) =>{

//       if (cartItems[itemId] > 1) {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/removeproduct', {
//                 method: 'DELETE',
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': `${localStorage.getItem('auth-token')}`,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ itemId: itemId }),
//             })
//             .then((response) => response.json())
//             .then((data) => console.log(data))
//             .catch((error) => console.error('Error:', error));
//         }
//     }
//     }

//     const getTotalCartAmout = () =>{
//       let totalAmout = 0;
//       for (const item in cartItems)
//       {
//         if(cartItems[item]>0)
//         {
//           let itemInfo = all_product.find((product) => product.id === Number(item))
//           totalAmout += itemInfo.new_price*cartItems[item];
//         }
//       }
//       return totalAmout;
//     }

//     const getTotalCartItems = () =>{
//       let totalItems = 0;
//       for (const item in cartItems)
//       {
//         if(cartItems[item]>0)
//         {
//           totalItems += cartItems[item];
//         }
//       }
//       return totalItems;
//     }



//     const contextValue = {getTotalCartItems,getTotalCartAmout,all_product,cartItems,addToCart,minustoCart,remove_product};
    
//   return (
//     <ShopContext.Provider value={contextValue}>
//         {props.children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContextProvider;



import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => setAll_Product(data));

    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: '',
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const remove_product = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const minustoCart = (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const getTotalCartAmout = () => {
    let totalAmout = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmout += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmout;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };


  //Payment
const [buyerInfo, setBuyerInfo] = useState({ name: '', email: '', address: '', phoneNumber: '' });

const handlePayment = async () => {
  try {
    // Tạo danh sách các tên sản phẩm từ cartItems
    const itemNames = Object.keys(cartItems).reduce((acc, itemId) => {
      const product = all_product.find((product) => product.id === Number(itemId));
      if (product && cartItems[itemId] > 0) {
        acc[product.name] = {
          quantity: cartItems[itemId],
          price: product.new_price, // Thêm giá mới vào đối tượng sản phẩm
          image: product.image, // Thêm giá mới vào đối tượng sản phẩm
        };
      }
      return acc;
    }, {});

    const response = await fetch('http://localhost:4000/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: buyerInfo.name,
        email: buyerInfo.email,
        address: buyerInfo.address,
        phoneNumber: buyerInfo.phoneNumber,
        cartItems: itemNames, // Gửi danh sách các tên sản phẩm
        totalAmount: getTotalCartAmout(),
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Lỗi khi thanh toán:', error);
  }
};




const handleChange = (e) => {
  const { name, value } = e.target;
  setBuyerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
};

const contextValue = {
  getTotalCartItems,
  getTotalCartAmout,
  all_product,
  cartItems,
  addToCart,
  minustoCart,
  remove_product,
  handlePayment,
  handleChange,
  buyerInfo
};


  
  

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
