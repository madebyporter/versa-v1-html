import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 2,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20},
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      ease: "easeOut",
    }
  }
}

const NavbarLinks = () => {
  return (
    <>
      <motion.div className="nav-section" variants={container} initial="hidden" animate="show">

        <motion.h3 className="nav-section-header" variants={item}>Disciplines</motion.h3>
        <motion.div className="nav-link" variants={item}>
          <Link to="/design/">Design Engineering</Link>
        </motion.div>
        <motion.div className="nav-link nav-link-external" variants={item}>
          <a href="https://www.thebeatboxclub.com/producers/madebyporter" target="_blank" rel="noreferrer">Music Production</a>
        </motion.div>
        <motion.div className="nav-link nav-link-external" variants={item}>
          <a href="https://madebyporter.notion.site/Use-my-Project-Audit-System-550288c2c81b4628a806a0081e8bd601" target="_blank" rel="noreferrer">Project Audit System</a>
        </motion.div>
   
        <motion.h3 className="nav-section-header" variants={item}>Person</motion.h3>
        
        <motion.div className="nav-link" variants={item}>
          <Link to="/stack/">Stack</Link>
        </motion.div>
        <motion.div className="nav-link" variants={item}>
          <Link to="/about/">About</Link>
        </motion.div>

      </motion.div>
    </>
  )
}

export default NavbarLinks