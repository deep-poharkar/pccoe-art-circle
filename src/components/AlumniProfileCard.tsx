import { FunctionComponent } from "react";
import styles from "./AlumniProfileCard.module.css";

type AlumniProfileCardType = {
  starImageUrl?: string;
  starRatingImageUrl?: string;
  starRatingImageUrls?: string;
  starRatingImageUrls2?: string;
  starRatingImageUrls3?: string;
  starRatingImageUrls4?: string;
};

const AlumniProfileCard: FunctionComponent<AlumniProfileCardType> = ({
  starImageUrl,
  starRatingImageUrl,
  starRatingImageUrls,
  starRatingImageUrls2,
  starRatingImageUrls3,
  starRatingImageUrls4,
}) => {
  return (
    <div className={styles.clientCardMobile}>
      <div className={styles.clientCard}>
        <div className={styles.thisIsA}>
          I am an alumni who have worked in xyz series/movie. And I thank PCCOE
          Art Circle for it,
        </div>
        <div className={styles.clientInfo}>
          <img className={styles.authorImagesIcon} alt="" src={starImageUrl} />
          <div className={styles.rate}>
            <div className={styles.rateStars}>
              <img
                className={styles.starIcon}
                alt=""
                src={starRatingImageUrl}
              />
              <img
                className={styles.starIcon}
                alt=""
                src={starRatingImageUrls}
              />
              <img
                className={styles.starIcon}
                alt=""
                src={starRatingImageUrls2}
              />
              <img
                className={styles.starIcon}
                alt=""
                src={starRatingImageUrls3}
              />
              <img
                className={styles.starIcon}
                alt=""
                src={starRatingImageUrls4}
              />
            </div>
            <div className={styles.gemmaNolenGoogle}>XYZ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfileCard;
