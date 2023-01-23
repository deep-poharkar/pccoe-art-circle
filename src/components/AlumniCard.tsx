import { FunctionComponent } from "react";
import AlumniProfileCard from "../components/AlumniProfileCard";
import styles from "./AlumniCard.module.css";

const AlumniCard: FunctionComponent = () => {
  return (
    <div className={styles.clientsSection}>
      <div className={styles.clientCards}>
        <div className={styles.clients}>Alumni</div>
        <div className={styles.clientsCards}>
          <AlumniProfileCard
            starImageUrl="../author-images@2x.png"
            starRatingImageUrl="../star.svg"
            starRatingImageUrls="../star.svg"
            starRatingImageUrls2="../star.svg"
            starRatingImageUrls3="../star.svg"
            starRatingImageUrls4="../star.svg"
          />
          <AlumniProfileCard
            starImageUrl="../author-images1@2x.png"
            starRatingImageUrl="../star5.svg"
            starRatingImageUrls="../star5.svg"
            starRatingImageUrls2="../star5.svg"
            starRatingImageUrls3="../star5.svg"
            starRatingImageUrls4="../star5.svg"
          />
          <AlumniProfileCard
            starImageUrl="../author-images2@2x.png"
            starRatingImageUrl="../star.svg"
            starRatingImageUrls="../star.svg"
            starRatingImageUrls2="../star.svg"
            starRatingImageUrls3="../star.svg"
            starRatingImageUrls4="../star.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
