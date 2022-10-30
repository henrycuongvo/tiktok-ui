import classNames from "classnames/bind";
import styles from "./Header.Module.scss";
const cx = classNames.bind(styles);
function Header() {
  return <header className={cx("wrapper")}></header>;
}

export default Header;
