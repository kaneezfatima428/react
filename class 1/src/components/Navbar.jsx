import React from 'react'
import styles from '../styles/Navbar.module.css'
import btnStyles from '../styles/Button.module.css'

const Navbar = () => {
  return (
    <>
    <nav className={`navbar ${styles.header} `}>
      Shopify
        <button className={`btn ${btnStyles.loginButton}`}>
        login
        </button>
      </nav>

  </>
  )
}

export default Navbar
