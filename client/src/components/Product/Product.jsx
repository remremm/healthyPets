import React from 'react';
import styles from './Product.css';

const Product = (props) => {

  const randomNumber = () =>{
    return Math.floor(Math.random(1) * 237);
  }

  return (
    <div key={props.id} className={styles.productContainer}>
      <div className={styles.productInfo}>
        <div style={{width: '220px', height: '220px', backgroundSize: 'cover', backgroundImage: `url(https://picsum.photos/id/${randomNumber()}/200/300)`}}></div>
        <div className={styles.productTitle}>{`${props.animal} - ${props.breed}`}</div>
        <div className={styles.productPriceContainer}>
          <div className={styles.productPrice}>${props.price}</div>
        </div>
      </div>
    </div>
  )
}

export default Product;