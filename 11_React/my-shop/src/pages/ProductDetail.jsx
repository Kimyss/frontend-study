import axios from "axios";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getSelectedProduct } from "../features/product/productSlice";


function ProductDetail() {

  const {productId} =  useParams();
  console.log(productId);

  const dispatch = useDispatch();

  useSelector

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 
  // 그 결과를 리덕스 스토어에 저장

  useEffect(()=>{
    // 서버에 특정 상품의 데이터 요청 Main.jsx에서는 .then. catch사용
    // 여기선 async사용
    const fetchProductById = async ()=>{
      try {
        const response =  axios.get(`https://my-json-server.typicode.com/kimyss/db-shop/products/${productId}`)
        // 프로미스객체 ↑
        console.log(response);
        dispatch(getSelectedProduct(response.data));
      } catch (err) {
        console.error(err);
      }
    }
    fetchProductById();
  },[])


  return (
    <Container className="pt-5">
      <Row>
        <Col md={6}>
          <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
        </Col>

        <Col md={6}>
          <h4>{getAllProducts.title}</h4>
          <p>{getAllProducts.content}</p>
          <p>{getAllProducts.price}</p>
          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;