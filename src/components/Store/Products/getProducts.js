import { useDispatch, useSelector } from "react-redux";

import { asyncAddProduct } from "../../../StoreFront/Products";

const ProductAPI = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state);
  console.log('product in getProducts:', product);

  return (
    <div>
      <button onClick={() => dispatch(asyncAddProduct())}>Get Items</button>
      {/* {product.map((el) => (
        <div key={el.name}>{el.name}</div>
      ))} */}
    </div>
  );
};

export default ProductAPI;
