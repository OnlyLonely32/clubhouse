import clsx from "clsx";
import styles from './Modal.module.scss'

interface modalProps {
  className?: string;
  size?: string;
}

export const Modal: React.FC<modalProps>= ({children, className, size}) =>{
    const sizes ={
        small: styles.small
    };
  return(
      <div
          className={clsx(styles.modalBlock, className, sizes[size])}>
          {children}
      </div>
 )
}