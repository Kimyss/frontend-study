import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedProduct, getAllProducts, getSelectedProduct, selectSelectproductList } from "../features/product/productSlice";
import styled, { keyframes } from "styled-components";
import { toast } from "react-toastify";

// 스타일드 컴포넌트를 이용한 애니메이션 속성 적용 자동완성이 안되네
const highlight = keyframes`
  from{background-color:#cff4fc}    //  === 0%
  50%{background-color:#484949}
  to{background-color:#cff4fc}      //  === 100%
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 2s linear infinite;
  /* 2s 동안 라--이너 일정하게 인피니트 무-한하게-- */
`

function ProductDetail() {

  const { productId } = useParams();
  console.log(productId);

  const dispatch = useDispatch();

  const product = useSelector(selectSelectproductList);

  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })

  const [alert, setAlert] = useState(true);         
  const [orderCount, setOrderCount] = useState('1');  //주문수량상태

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고 
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청 Main.jsx에서는 .then. catch사용
    // 여기선 async사용
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/kimyss/db-shop/products/${productId}`)
        // 프로미스객체 ↑
        console.log(response);
        dispatch(getSelectedProduct(response.data));
      } catch (err) {
        console.error(err);
      }
    }
    fetchProductById();
    // 상품 상세 페이지가 언마운트 될 때 전역 초기화 
    // 리듀서부터기기
    return () => {
      dispatch(clearSelectedProduct())
    }
  }, []);

  useEffect(()=>{
    // 타이머설정을 위한 useEffet, 가독성을 위해 새로 만들어주는거 좋아요
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    // 불필요하게 타이머 계속 쌓이는 것을 정리. timeout함수 사용시 세트처럼생각해
    return () =>{
      clearTimeout(timeout);
    }
  });

  const handleChangeOrderCount = (e) =>{
    // 숫자 외 입력 시 유효성 검사 후 경고 토스트 띄우기
    if(isNaN(e.target.value)){
      toast.error('💯숫자만 입력하세요');
      return;
    }
    setOrderCount(Number(e.target.value));
  };

  // if(!product){
  //   // 프로덕트가 없을때는 널을 리턴하겠다
  //   return null;
  // }


  return (
    <Container className="pt-5">
      {/* Alert을 띄우고 3초뒤에 사라지게 만들어 */}
      {/* 힌트: 처음 렌더링 됐을때 setTimeout로 타이머설정 + 조건부렌더링 */}
      {alert &&(
        <StyledAlert variant="info" onClose={() => setAlert(false)} dismissible>
          현재 000명이 보고 있어요!
        </StyledAlert>
      )}
      <Row>
        <Col md={6}>
          <img src={product?.imagePath} width="80%" />
        </Col>

        <Col md={6}>
          <h4>{product?.title}</h4>
          <p>{product?.content}</p>
          <p>{formatter?.format(product?.price)}원</p>

          <Col md={4} className="m-auto mb-3">
          {/* Quiz: text input을 제어 컴포넌트로 사용자 입력값이 들어가도록  */}
          <Form.Control type="text" value={orderCount} onChange={handleChangeOrderCount} />
          </Col>

          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;