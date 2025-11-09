import "./product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["12,499", "699", "7999", "1231"];
  let newPrice = ["499", "399", "1299", "999"];
  let description = [
    ["8,000 DPI", "wireless mouse"],
    ["intutive surface", "designed for iPad Pro"],
    ["wireless mouse", "designed for iPad Pro"],
    ["wireless mouse", "designed for iPad Pro"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
