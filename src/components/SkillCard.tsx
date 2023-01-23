import { FunctionComponent } from "react";
import styles from "./SkillCard.module.css";

type SkillCardType = {
  artCircleImageUrl?: string;
  artCircleDescription?: string;
  artCircleBenefits?: string;
};

const SkillCard: FunctionComponent<SkillCardType> = ({
  artCircleImageUrl,
  artCircleDescription,
  artCircleBenefits,
}) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skill1}>
        <img
          className={styles.imagePlaceholderIcon}
          alt=""
          src={artCircleImageUrl}
        />
        <div className={styles.headlineSubhead}>
          <div className={styles.mainTitle}>{artCircleDescription}</div>
          <div className={styles.thisIsA}>{artCircleBenefits}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
