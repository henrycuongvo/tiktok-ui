import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
//import Tippy library
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
  //Show Tippy
  const [searchResuilt, setSearchResuilt] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResuilt([1, 2, 3]);
    }, 3000);
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
              Ket qua
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
        <div className={cx("action")}>{/* Action */} Hello</div>
      </div>
    </header>
  );
}

export default Header;
