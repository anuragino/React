function Product(props){
    console.log(props);
    // destructing
    let{name,price,category} = props;
    return(
        <div className="product">
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{category[0]}</h4>
        </div>
    )
}

export default Product;