import style from "./Card.module.css";
import { FaUserAlt } from "react-icons/fa";

const Card = () => {
  return (
    <section id={style.cardContainer}>
      <div className={style.userImage}><FaUserAlt/></div>
      <h1 className={style.userName}>Jhon Doe</h1>
      <p className={style.desig}>Frontend Developer</p>
      <p className={style.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        dolor obcaecati eaque eum libero dolorum.
      </p>
      <button className={style.btn}>Hire Me</button>
    </section>
  );
};

export default Card;
