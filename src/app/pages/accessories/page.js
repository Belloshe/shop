"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../../../lib/supabaseClient';
import styles from '../../style/products.module.css';

const AccessoryPage = () => {
  const [accessory, setAccessory] = useState([]);

  useEffect(() => {
    async function fetchAccessory() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'accessories');

        if (error) {
          console.error('Error fetching accessory:', error);
        } else {
          setAccessory(data);
        }
      } catch (error) {
        console.error('Error during data fetch:', error);
      }
    }

    fetchAccessory();
  }, []);

  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Accessory</h1> 
      <ul className={styles.productRow}> 
        {accessory.map((item) => (
          <li key={item.id} className={styles.productItem}> 
            <Image 
              src={`/accessory/${item.image_url}`} 
              alt={item.name}
              width={300}
              height={300}
              layout='responsive'
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

export default AccessoryPage;
