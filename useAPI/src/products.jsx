import { useState } from "react"
import { useEffect } from "react"

function Products() {

  // let [name,setName]=useState("IPhone 14")

  // let [price,setPrice] = useState(20000)

  /**
   
    1. By Default useEffect is called for every render and rerender
    2. if you pass a second param as a blank array it will be only called for first render
    3. if you pass variables in dependency array - 
    useeffect will still be called for first render-
    it will also be called if the value of the variable in the dependency array changes changes 
    4. You can have multiple useEffects in a single component 
  
  **/
  
  // useEffect(()=>{
  //     console.log("Component Mounted");

  //     return ()=>{
  //         console.log("Component gone");
  //     }

  // },[price])

  let [showProducts,setShowProducts] = useState([]);

  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setShowProducts(data);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])


  return(
    <div className="product">
      {
        showProducts.map((product)=>{
          return (
            <div className="pro" key={product.id}> 
              <div className="img-wrapper">
                <img className="p-img" src={product.images} alt="" />
              </div>
              <h2 className="p-name">{product.title}</h2>
              <h3>$ {product.price}</h3>
            </div>
          )
        })
      }
    </div>
  )

  // return (
  //   <div className="product">
  //     <h1>{name}</h1>
  //     <h3>{price}</h3>

  //     <button onClick={()=>{
  //       setName("Samsung F11")
  //     }}>Change Name</button>

  //     <button onClick={()=>{
  //       setPrice(39000)
  //     }}>Change Price</button>

  //   </div>
  // )
}

export default Products