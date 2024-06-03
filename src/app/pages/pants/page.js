"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../../../lib/supabaseClient';
import styles from '../../style/products.module.css';

const PantsPage = () => {
  const [pants, setPants] = useState([]);

  useEffect(() => {
    async function fetchPants() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'pants');

        if (error) {
          console.error('Error fetching accessory:', error);
        } else {
          setPants(data);
        }
      } catch (error) {
        console.error('Error during data fetch:', error);
      }
    }

    fetchPants();
  }, []);

  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Pants</h1> 
      <ul className={styles.productRow}> 
        {pants.map((item) => (
          <li key={item.id} className={styles.productItem}> 
            <Image 
              src={`/pants/${item.image_url}`} 
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

export default PantsPage;
