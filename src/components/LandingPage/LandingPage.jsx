import React from 'react';
import styles from './LandingPage.module.css';
import Button from '../Common/Button/Button';
import iphone from '../../assets/iphone.png';
import gradient from '../../assets/gradient.png';
import { motion } from 'framer-motion';
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";


const LandingPage = () => {
	return (
		<div className={styles.flexInfo}>
			<div className={styles.leftComponent}>
				<motion.h1
					className={styles.trackCryptoHeading}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					Track Crypto.
				</motion.h1>
				<motion.h1
					className={styles.realTimeHeading}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}>
					Real time.
				</motion.h1>
				<motion.p
					className={styles.infoText}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1 }}>
					Track crypto through public api in real time. Visit the dashboard to
					do so!
				</motion.p>
				<motion.div
					className={styles.btnFlex}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 1.5 }}>
						<a href="/dashboard">
            <Button text={"Dashboard"} />
          </a>
          <RWebShare
            data={{
              text: "CryptoDashboard made by Swati Jha using React JS.",
            //   url: "https://crypto-dashboard-jan.netlify.app",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <Button text={"Share App"} outlined={true} />
          </RWebShare>
				</motion.div>
			</div>
			<div className={styles.phoneComponent}>
				<motion.img
                className={styles.iphone}
					src={iphone}
					initial={{ y: -10 }}
					animate={{ y: 10 }}
					transition={{
						type: 'smooth',
						repeatType: 'mirror',
						duration: 2,
						repeat: Infinity,
					}}
					
				/>
				<img
					src={gradient}
					className={styles.gradient}
				/>
			</div>
		</div>
	);
};
export default LandingPage;
