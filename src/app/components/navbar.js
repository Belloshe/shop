"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'; 
import styles from './navbar.module.css'; 
import { supabase } from '../../../lib/supabaseClient';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .ilike('name', `%${searchTerm}%`);
    
        if (error) {
            console.error('Error fetching products:', error);
            return;
        }
    
        setSearchResults(data);
    };
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.icons}>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                    <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
                </div>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>
                        <img src="/images/bellaflorashop.png" alt="MyShop Logo"/>
                    </Link>
                </div>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/pages/skincare" className={styles.navLink}>
                        Skincare
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/pages/accessories" className={styles.navLink}>
                        Accessories
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/pages/pants" className={styles.navLink}>
                        Pants
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/pages/dresses" className={styles.navLink}>
                        Dresses
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/pages/makeup" className={styles.navLink}>
                        Makeup
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/pages/bags" className={styles.navLink}>
                        Bags
                    </Link>
                </li>
            </ul>
            <div className={styles.searchfieldContainer}>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        className={styles.searchfield}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search products..."
                    />
                    <button type="submit" className={styles.searchButton}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <div className={styles.searchResults}>
                    {searchResults.map(product => (
                        <div key={product.id}>
                            <p>{product.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
