import { IoSearchOutline } from "react-icons/io5";
import style from "./Task.module.css";
import { SiFlipkart } from "react-icons/si";
import { FaPlane } from "react-icons/fa";
import { FaAngleDown, FaCartShopping, FaLocationDot } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";

const Task = () => {
  return (
    <main className={style.mainContainer}>
      <header className={style.header}>
        <nav className={style.nav}>
          <div className={style.topRow}>
            <div className={style.leftTop}>
              <div className={style.logoBox}>
                <SiFlipkart />
              </div>
              <div className={style.logoBox}>
                <FaPlane />
              </div>
            </div>

            <div className={style.location}>
              <FaLocationDot />
              <span>Location not set</span>
              <a href="#">Select delivery location</a>
            </div>
          </div>

          <div className={style.bottomRow}>
            <div className={style.searchBox}>
              <IoSearchOutline className={style.searchIcon} />
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
              />
            </div>

            <div className={style.actions}>
              <div className={style.actionItem}>
                <FaRegCircleUser />
                <span>Login</span>
                <FaAngleDown />
              </div>

              <div className={style.actionItem}>
                <span>More</span>
                <FaAngleDown />
              </div>

              <div className={style.actionItem}>
                <FaCartShopping />
                <span>Cart</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Task;