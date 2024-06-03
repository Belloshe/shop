"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../../../lib/supabaseClient';
import styles from '../../style/products.module.css';

const MakeupPage = () => {
  const [makeup, setMakeup] = useState([]);

  useEffect(() => {
    async function fetchMakeup() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'makeup');

        if (error) {
          console.error('Error fetching Makeup:', error);
        } else {
          setMakeup(data);
        }
      } catch (error) {
        console.error('Error during data fetch:', error);
      }
    }

    fetchMakeup();
  }, []);

  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Makeup</h1> 
      <ul className={styles.productRow}> 
        {makeup.map((item) => (
          <li key={item.id} className={styles.productItem}> 
            <Image 
              src={`/makeup/${item.image_url}`} 
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

export default MakeupPage;
