import { FunctionComponent } from "react";
import styles from "./ArtCircleHeader.module.css";

const ArtCircleHeader: FunctionComponent = () => {
  return (
    <main className={styles.header} >
      <div className={styles.header1}>
        <div className={styles.headlineSubhead}>
          <div className={styles.headlineSubhead}>
            <div className={styles.brandingImage}>Lights, Camera, Action!</div>
            <div className={styles.myAwesomePortfolioContainer}>
              <span className={styles.myAwesomePortfolioContainer1}>
                <p className={styles.unleashThe}>Unleash the</p>
                <p className={styles.creativity}>creativity!</p>
              </span>
            </div>
          </div>
          <div className={styles.andIMade}>
            join the art circle of PCCOE today
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="../image@2x.png" />
      </div>
    </main>
  );
};

export default ArtCircleHeader;
