import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <div className={cx("search")}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cx("search-clear")}>{/* Clear */}</button>
          {/* Loading */}
          <button className={cx("search-btn")}>{/* Search */}</button>
        </div>
        <div className={cx("action")}>{/* Action */} Hello</div>
      </div>
    </header>
  );
}

export default Header;
