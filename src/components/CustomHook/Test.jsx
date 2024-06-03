import useFetchCustomHook from "./Use-Fetch";

const URL = "https://dummyjson.com/products";
export default function TestUseFetchCustomHook() {
  const { data, loading, error } = useFetchCustomHook(URL);

  // console.log(data, loading, error);

  return (
    <div>
      <h1>Fetch Products</h1>
      {loading && <p>Loading</p>}
      {error && <p>There is some error</p>}
      {data &&
        data.products &&
        data.products.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}
