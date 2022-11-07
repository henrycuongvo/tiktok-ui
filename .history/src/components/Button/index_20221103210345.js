import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind("styles");

function Button(to, href, onClick, children) {
  let Comp = "button";
  return (
    <Comp>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
