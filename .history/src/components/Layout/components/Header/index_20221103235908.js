import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
//import Tippy library
import Tippy from "@tippyjs/react";

import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "../../../AccountIem";
import styles from "./Header.module.scss";
import "tippy.js/dist/tippy.css"; // optional
import images from "~/assets/images";
import {
  faMagnifyingGlass,
  faPlusCircle,
  faPlusMinus,
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
  //Show Tippy
  const [searchResuilt, setSearchResuilt] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResuilt([]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />

        {/* Handle Resuilt Tippy */}
        <Tippy
          interactive
          visible={searchResuilt.length}
          render={(attrs) => (
            <div
              className={cx("search-resuilt")}
              tabIndex="-1"
              {...attrs}
              style={{ fontSize: "19px" }}
            >
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          {/* Creacte Header Ui */}
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button className={cx("loading")}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button text>
            <FontAwesomeIcon icon={faPlusMinus} />
            Upload
          </Button>
          <Button primary> Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
