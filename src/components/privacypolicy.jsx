import Styles from "./privacy.module.scss";
import privacyimg from "./privacypolicy.jpg";
import CollapseCard from "./collapseCard";
import privacyData from "./privacyData";
const Privacypolicy = () => {
  return (
    <div className={Styles.mainContainer}>
      <img src={privacyimg} alt="" />
      {privacyData.map((item, index) => (
        <CollapseCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Privacypolicy;
