import { FunctionComponent, useCallback } from "react";
import ArtCircleHeader from "../components/ArtCircleHeader";
import RecentWorkSection from "../components/RecentWorkSection";
import ProfessionalDevelopmentCard from "../components/ProfessionalDevelopmentCard";
import AlumniCard from "../components/AlumniCard";
import styles from "./PxPortfolioTemplate.module.css";

const PxPortfolioTemplate: FunctionComponent = () => {
  const onWorkTextClick = useCallback(() => {
    window.open(
      "http://www.pccoepune.com/"
    );
  }, []);

  const onContactTextClick = useCallback(() => {
    window.open(
      "http://www.pccoepune.com/"
    );
  }, []);

  return (
    <div className={styles.pxPortfolioTemplate}>
      <div className={styles.navigation} >
        <div className={styles.navNavMenu}>
          <div className={styles.about}>About</div>
          <div className={styles.work} onClick={onWorkTextClick}>
            Work
          </div>
          <div className={styles.contact} onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.logo1}>Art Circle</div>
        </div>
      </div>
      <ArtCircleHeader />
      <RecentWorkSection />
      <ProfessionalDevelopmentCard />
      <AlumniCard />
    </div>
  );
};

export default PxPortfolioTemplate;
