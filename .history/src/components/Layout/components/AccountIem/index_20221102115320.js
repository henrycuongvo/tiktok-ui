import classNames from "classnames/bind";
import styles from "./Account.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("account")}>
        <div className={cx("item")}>
          <div className={cx("name")}></div>
        </div>
      </div>
    </div>
  );
}

export default AccountItem;
