import { FunctionComponent } from "react";
import CardStripe1 from "../components/CardStripe1";
import styles from "./RecentWorkSection.module.css";

const RecentWorkSection: FunctionComponent = () => {
  return (
    <div className={styles.latestWorkSection} >
      <div className={styles.myLatestWork}>Our Recent Work</div>
      <div className={styles.workCards}>
        <CardStripe1
          awardImageUrl="../image1@2x.png"
          awardName="Best in Show"
          artistName="Lynyrd Skynyrd"
          awardImageUrl2="../image2@2x.png"
          awardCategory="Most Original"
          artistImageUrl="Jimi Hendrix"
          awardImageUrl3="../image3@2x.png"
          awardCategory2="People's Choice"
          artistName2="The Kinks"
        />
        <CardStripe1
          awardImageUrl="../image4@2x.png"
          awardName="Best in Medium"
          artistName="Tom Petty"
          awardImageUrl2="../image5@2x.png"
          awardCategory="Best in Theme"
          artistImageUrl="Led Zeppelin"
          awardImageUrl3="../image6@2x.png"
          awardCategory2="Best in Technique"
          artistName2="Queen"
        />
      </div>
    </div>
  );
};

export default RecentWorkSection;
