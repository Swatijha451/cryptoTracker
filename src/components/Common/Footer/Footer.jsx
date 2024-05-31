import React from "react";
import styles from "./Footer.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
<div className={styles.footer}>
    <h2 className={styles.logo} onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
    <div className={styles.socialLinks}>
        <a href="/">
          <FacebookIcon className={styles.socialLinks} />
        </a>
        <a href="/">
          <EmailIcon className={styles.socialLinks} />
        </a>
        <a href="/">
          <TwitterIcon className={styles.socialLinks} />
        </a>
        <a href="/">
          <InstagramIcon className={styles.socialLinks} />
        </a>
      </div>
    </div>
  );
}

export default Footer;

