import clsx from "clsx";
import styles from './Modal.module.scss'

interface modalProps {
  className?: string;
  size?: string;
}

export const Modal: React.FC<modalProps>= ({children, className, size}) =>{
    const sizes ={
        small: styles.small,
        card: styles.card,
    };
  return(
      <div
          className={clsx(className, styles.modalBlock, sizes[size])}>
          {children}
      </div>
 )
}