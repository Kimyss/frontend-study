import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProductList, selectProductList } from "./productSlice";

function ProductList() {

   // Redux Store에 있는 state를 가져오는 함수
  // const count =  useSelector((state)=>{
  //   return state.counter.value;
  // }); 
  // const count = useSelector(selectCount);

  const productList = useSelector((state)=>{
    return state.product.productList;
  });

  // const productList = useSelector(selectProductList);

  const [productName, setProductName] = useState('');

  const dispatch = useDispatch();

  const handleAddProduct = ()=>{
    dispatch(addToProductList(productName));
    setProductName('');
  }

  return (
    <>
      <p>상품추가:
        <input 
          type="text"
          value={productName}
          onChange={(e)=>{setProductName(e.target.value)}}
          onKeyUp={()=>{

          }}
        />
        <button 
          type="button"
          onClick={handleAddProduct}
        >
          추가
        </button>
      </p>
      <p>상품목록</p>
      <ul>
        {/* 반복렌더링 */}
        {productList.map((product, index) => <li key={index}>{product}</li>)}
        
      </ul>
    </>
  );
};



export default ProductList;