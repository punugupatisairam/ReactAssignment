// import React, { useEffect } from "react";
// import axios from "axios";

// function Fakedata(){
//     var [countries, setCountries] = React.useState([]);

//     console.log(countries);
//     useEffect(() => {
//       axios.get("https://fakestoreapi.com/products").then((res) => {
//         setCountries(res.data);

//     });

//     },[]);

//     return (<div className=" mdiv">
//       {

//           countries.map((e)=>{

//             return (
//               <div className="itediv">
//                 <img className="images" src={e.image} /><br />
//                 <span>{e.title}</span><br />
//                 <span>{e.price}</span> &nbsp; &nbsp;&nbsp;
//                 <span>{e.rating.rate}</span>

//             </div>  )
//                            })
//       }
//       </div>)
// }
// export default Fakedata

import React from "react";
import axios from "axios";
import Cart from "./cart";
function Fakedata() {
  var [products, setProducts] = React.useState();
  var [additem,setAdditem] = React.useState([]);
  var [prodqnt,setProdqnt] = React.useState();
  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
      setProducts([...res.data]);
    });
  }, []);

  function addToCart(product){


	if(product.quantity){
		setProdqnt(product.quantity++)
	}
	else{
		product.quantity = 1;
		setAdditem([...additem,{product}])
	}
	console.log("after quantity verification"+ product)
	

  }
  return (
	<div className="maindiv">
    <div className="productcard"  >
      {products?.map((product) => {
        return <ol className="list">
		<span> <img src={product.image} alt="" /></span>
		<li style={{listStyleType:'none'}}>{product.title}</li>
		<span>{product.price}</span> &nbsp; &nbsp;
		<span>{product.rating.rate}</span><br />
		<button className="btn btn-success" onClick={()=>{addToCart(product)}}>Add to Cart</button>
		</ol>
      })}
    </div > 
	<div className="cartdiv"> 
	<Cart additem={additem}/> 
	</div>
	
	</div>

  );
}
export default Fakedata;