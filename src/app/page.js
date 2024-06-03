import React from 'react';
import styles from './style/first.module.css'; 



const First = () => {
  return (
    <div className={styles.imageGallery}> 
      <div className={styles.topimage}>
        <img src="/images/top.jpg" alt="Bild 1" />
      </div>
      <div className={styles.imageContainer}> 
        <div className={styles.imageItem}>
          <img src="/images/sweater.jpg" alt="Bild 1" />
          <p>Sweaters</p>
        </div>
        <div>
        </div>
        <div className={styles.imageItem}>
          <img src="/images/pants.jpg" alt="Bild 2" />
          <p>Pants</p>
        </div>
        <div className={styles.imageItem}>
          <img src="/images/jacket.jpg" alt="Bild 3" />
          <p>Jackets</p>
        </div>
        <div className={styles.imageItem}>
          <img src="/images/shoe.jpg" alt="Bild 3" />
          <p>Shoes</p>
        </div>
        <div className={styles.imageItem}>
          <img src="/images/makeup.jpg" alt="Bild 3" />
          <p>Makeup</p>
        </div>
        <div className={styles.imageItem}>
          <img src="/images/bag.jpg" alt="Bild 3" />
          <p>Bags</p>
        </div>
        <div className={styles.imageItem}>
          <img src="/images/accessory.jpg" alt="Bild 3" />
          <p>accessory</p>
        </div>
      </div>
    </div>
  );
};

export default First;