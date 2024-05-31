import React, { useState } from "react";
import styles from "./Info.module.css";
function Info({ title, desc }) {
  const shortDesc = desc.slice(0, 300) +`<p style="color:var(--grey)">Read More...</p>`;
  const longDesc = desc + `<p style="color:var(--grey)">Read Less...</p>`;

  const [toggle, setToggle] = useState(false);

  return (
    <div className={`grey-wrapper ${styles.infoComponent}`}>
       <h1>{title}</h1> 
       <p dangerouslySetInnerHTML={{
          __html: desc.length >= 300 ? (toggle ? longDesc : shortDesc) : desc,
        }}
        className={styles.infoP}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}

export default Info;