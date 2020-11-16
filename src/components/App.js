import React, {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import HomeProducts from './HomeProducts'
import './style.sass'

const App = () => {
    const [productData, setProductData] = useState({});
    useEffect(() => {
      fetch('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json')
      .then(response => {
          response.json();
        })
      .then(data => {
          setProductData(data);
        })
    }, [setProductData]);
    return (
      <React.Fragment>
        <h1 className="feature-header">
          West Elm Home products
        </h1>
        <Container>
          <Row>
            <HomeProducts products={productData.groups} />
          </Row>
        </Container>
      </React.Fragment>
    )
}
export default App
