import clsx from "clsx"
import styles from "./Avatar.module.scss";

interface avatarProps {
  src: string;
  width: string;
  height: string;
  className?: string;
  isVoice?: boolean;
}

export const Avatar: React.FC<avatarProps> = ({src, width, height, className, isVoice}) => {
  return(
    <div 
      style={{width, height, backgroundImage: `url(${ src==="" ? "/img/not-found.png" : src})`}}
      className={clsx(styles.avatar, isVoice ? styles.avatarBorder : '', className)}></div>
  )
}