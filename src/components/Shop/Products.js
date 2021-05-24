import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: 0,
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!"
    },
    {
      id: 2,
      title: "Test 2",
      price: 8,
      description: "This is a second product - amazing!"
    }
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(({ id, title, price, description }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={+price}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
