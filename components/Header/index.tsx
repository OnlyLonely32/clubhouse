import { Avatar } from "../Avatar";
import Image from 'next/image'
import Link from "next/link";
import styles from "./Header.module.scss";
import clsx from "clsx";


interface headerProps {
  avatarUrl: string;
  fullname: string;
}

export const Header: React.FC<headerProps> = ({avatarUrl, fullname}) => {
  return(
    <div className={clsx("", styles.header)}>
      <div className="container d-flex justify-space-between">
        <div className="logo d-flex">
          <Image src="/img/hello.png" width="40px" height="40px" alt="hello.png" />
          <h3>Clubhouse</h3>
        </div>
        <Link href="/profile/1" passHref>
          <a>
            <div className="user-data pointer d-flex">
              <h3 className="mr-20">{fullname}</h3>
              <Avatar src={avatarUrl} width="40px" height="40px" />
            </div>
          </a>
        </Link> 
      </div>
    </div>
  )
}