"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../../../lib/supabaseClient';
import styles from '../../style/products.module.css';

const BagPage = () => {
  const [bag, setBag] = useState([]);

  useEffect(() => {
    async function fetchBag() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'bags');

        if (error) {
          console.error('Error fetching Bags:', error);
        } else {
          setBag(data);
        }
      } catch (error) {
        console.error('Error during data fetch:', error);
      }
    }

    fetchBag();
  }, []);

  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Bags</h1> 
      <ul className={styles.productRow}> 
        {bag.map((item) => (
          <li key={item.id} className={styles.productItem}> 
            <Image 
              src={`/bags/${item.image_url}`} 
              alt={item.name}
              width={300}
              height={300}
            />
            <h2 className={styles.productTitle}>{item.name}</h2> 
            <p className={styles.productDescription}>{item.description}</p> 
            <p className={styles.productPrice}>Price: {item.price}</p> 
          </li>
        ))}
      </ul> 
    </div> 
  );
};

export default BagPage;
