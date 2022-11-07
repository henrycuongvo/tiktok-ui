import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1667534400&x-signature=Yt2SSxGmO1Cma9h7QrQBmpw%2BzIY%3D"
        alt=" avatar"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span> Nguyen Van A</span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </h4>
        <div className={cx("username")}>nguyenvana</div>
      </div>
    </div>
  );
}

export default AccountItem;
