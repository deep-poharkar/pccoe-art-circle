import { FunctionComponent } from "react";
import SkillCard from "../components/SkillCard";
import styles from "./ProfessionalDevelopmentCard.module.css";

const ProfessionalDevelopmentCard: FunctionComponent = () => {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skills}>
        <SkillCard
          artCircleImageUrl="../image-placeholder@2x.png"
          artCircleDescription="Professional development"
          artCircleBenefits="Art Circle help students develop skills and build a portfolio that can lead to future career opportunities."
        />
        <SkillCard
          artCircleImageUrl="../image-placeholder1@2x.png"
          artCircleDescription="Networking opportunities"
          artCircleBenefits="Art Circle provide a platform to meet and connect with other artists and professionals in the field."
        />
        <SkillCard
          artCircleImageUrl="../image-placeholder2@2x.png"
          artCircleDescription="Unllimited chances"
          artCircleBenefits="Art Cirlce offer students a chance to explore and express their creativity through various art forms."
        />
      </div>
    </div>
  );
};

export default ProfessionalDevelopmentCard;
