import { Avatar } from "../Avatar";
import Image from 'next/image'
import Link from "next/link";

interface headerProps {
  avatarUrl: string;
  fullname: string;
}

export const Header: React.FC<headerProps> = ({avatarUrl, fullname}) => {
  return(
    <div className="d-flex justify-space-between mt-20 mb-20">
      <div className="logo d-flex">
        <Image src="/img/hello.png" width="40px" height="40px" alt="hello.png" />
        <h3>Clubhouse</h3>
      </div>
      <Link href="/profile/1" passHref>
        <div className="user-data pointer d-flex">
          <h3 className="mr-20">{fullname}</h3>
          <Avatar src={avatarUrl} width="40px" height="40px" />
        </div>
      </Link>
    </div>
  )
}