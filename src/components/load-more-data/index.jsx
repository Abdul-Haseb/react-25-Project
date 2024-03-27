import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMore() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  //   lets create a fetchdata function
  const handleFetchingProducts = async () => {
    try {
      setLoading(true);
      const resp = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await resp.json();

      //   Now set the Result to the products state
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchingProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) setDisableBtn(true);
  }, [products]);

  if (loading) {
    return (
      <div className="loading-content">The content is yet to be Loaded</div>
    );
  }

  console.log(products);

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <p className="title">{item.title}</p>
                <div className="product-other-content">
                  <p className="brand-name">{item.brand}</p>
                  <p className="prize">${item.price}</p>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableBtn} onClick={() => setCount(count + 1)}>
          Load More Data
        </button>
      </div>
      <div className="disableText">
        {disableBtn ? <p>You have Reached The end</p> : null}
      </div>
    </div>
  );
}

/* 

1.we need a state to store the products from the api in an array to map over them and show them...
2.Now we need another state to set the counting of the button click ... 
Because we have 100 products ... after 100 products we have to disable the button ....

*/
