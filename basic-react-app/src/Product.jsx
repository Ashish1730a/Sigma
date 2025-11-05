import "./product.css";

function Product({ title, price }) {
    let isDiscount = price > 30000;
    let styles = {backgroundColor : isDiscount ? "pink" : null,
        color: "gray"
    }
    return (
      <div className="Product" style={styles}>
        <h2>{title}</h2>
        <h5>price: {price}</h5>
        {isDiscount ? <p>Discount of 5%</p> : null}

      </div>
    );
  

}

export default Product;
