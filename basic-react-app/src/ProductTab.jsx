import Product from "./Product";

function ProductTab() {
    
  return (
    <>
      <Product title="phone" price={30100} />
      <Product title="laptop" price={25000} />
      <Product title="pen" price={50000} />
    </>
  );
}

export default ProductTab;