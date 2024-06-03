"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../../../lib/supabaseClient';
import styles from '../../style/products.module.css';

const SkincarePage = () => {
  const [skincare, setSkincare] = useState([]);

  useEffect(() => {
    async function fetchSkincare() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category', 'skincare');

        if (error) {
          console.error('Error fetching Skincare:', error);
        } else {
          setSkincare(data);
        }
      } catch (error) {
        console.error('Error during data fetch:', error);
      }
    }

    fetchSkincare();
  }, []);

  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Skincare</h1> 
      <ul className={styles.productRow}> 
        {skincare.map((item) => (
          <li key={item.id} className={styles.productItem}> 
            <Image 
              src={`/skincare/${item.image_url}`} 
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

export default SkincarePage;
