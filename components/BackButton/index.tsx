import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import clsx from "clsx";
import Link from 'next/link';
import styles from "./BackButton.module.scss";

interface BackButtonProps {
  className?: string;
  href: string;
}

export const BackButton:React.FC<BackButtonProps> = ({className, href}) => {
  return(
    <Link href={href} >
      <a>
        <div className={clsx("d-flex pointer", className, styles.backButton)} >
          <FontAwesomeIcon className='mr-10' icon={faArrowLeft}/>
          <h3>Back</h3>
        </div>
      </a>
    </Link>
  )
}