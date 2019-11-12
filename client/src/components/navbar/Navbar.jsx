import React from 'react';
import { FaPaw, FaShoppingCart } from 'react-icons/fa';
import { IoIosPaw } from "react-icons/io";
import { MdChatBubble } from "react-icons/md";
import styles from './Navbar.css';


const Navbar = (props) => {
  return(
    <div className={styles.navbar}>
        <span className={styles.navbarTitle}><h3><FaPaw className={styles.paws} style={{color: 'orange'}}/><IoIosPaw className={styles.paws} style={{color: 'orange'}}/>EntirelyPets</h3></span>
        <span className={styles.navbarSearchContainer}><input placeholder="Search all of Entirely Pets" className={styles.navbarSearch} onChange={props.searchForPets} type="search"></input></span>
        <span className={styles.navbarIcons}><MdChatBubble style={{color: 'white', marginRight: '5px'}}/><FaShoppingCart style={{color: 'white'}}/></span>
    </div>
  )
}

export default Navbar;