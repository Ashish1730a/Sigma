import Product from "./Product";
import Price from "./Price";  

function ProductTab() {
    let styles ={
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      
    }
  return (
    <div style={styles}>
      
      <Product title="logitech MX Master" idx={0}/>
      <Product title="Apple" idx={1}/>
      <Product title="Banana" idx={2}/>
      <Product title="Cat" idx={3}/>
    </div>
  );
}

export default ProductTab;