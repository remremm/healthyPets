import React from 'react';
import styles from './Products.css';
import Product from '../Product/Product.jsx';

const Products = (props) => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.products}>
        {props.searchedItem.length === 0 ? (
          props.products.map(product => {
            return <Product key={product.id} animal={product.animal} breed={product.breed} name={product.name} imageUrl={props.imageUrl} price={product.price}/>
          })
        ) : (
          props.products.filter(item => item.animal.includes(props.searchedItem)).map(product => {
            return <Product key={product.id} animal={product.animal} breed={product.breed} name={product.name} imageUrl={props.imageUrl} price={product.price}/>
          })
        )}
      </div>
    </div>
  )
}

export default Products;