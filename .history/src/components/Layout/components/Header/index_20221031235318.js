import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);
console.log(images.logo);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <div className="search">
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <buton>{/* Clear */}</buton>
          {/* Loading */}
        </div>
      </div>
    </header>
  );
}

export default Header;
