import { FunctionComponent } from "react";
import styles from "./CardStripe1.module.css";

type CardStripe1Type = {
  awardImageUrl?: string;
  awardName?: string;
  artistName?: string;
  awardImageUrl2?: string;
  awardCategory?: string;
  artistImageUrl?: string;
  awardImageUrl3?: string;
  awardCategory2?: string;
  artistName2?: string;
};

const CardStripe1: FunctionComponent<CardStripe1Type> = ({
  awardImageUrl,
  awardName,
  artistName,
  awardImageUrl2,
  awardCategory,
  artistImageUrl,
  awardImageUrl3,
  awardCategory2,
  artistName2,
}) => {
  return (
    <div className={styles.stripe1}>
      <div className={styles.workCard}>
        <img className={styles.imageIcon} alt="" src={awardImageUrl} />
        <div className={styles.headlineSubhead}>
          <div className={styles.projectTitle}>{awardName}</div>
          <div className={styles.uiArtDrection}>{artistName}</div>
        </div>
      </div>
      <div className={styles.workCard}>
        <img className={styles.imageIcon} alt="" src={awardImageUrl2} />
        <div className={styles.headlineSubhead}>
          <div className={styles.projectTitle}>{awardCategory}</div>
          <div className={styles.uiArtDrection}>{artistImageUrl}</div>
        </div>
      </div>
      <div className={styles.workCard}>
        <img className={styles.imageIcon} alt="" src={awardImageUrl3} />
        <div className={styles.headlineSubhead}>
          <div className={styles.projectTitle}>{awardCategory2}</div>
          <div className={styles.uiArtDrection}>{artistName2}</div>
        </div>
      </div>
    </div>
  );
};

export default CardStripe1;
