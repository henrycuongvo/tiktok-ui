import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ to, href, onClick, children }) {
    let Comp = "button";
    const props = {
        onClick
    }
    if(to) {
        props.to = to
    } else if() {
        
    }

  const classes = cx("wrapper");
  return (
    <Comp className={classes}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
