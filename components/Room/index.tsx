import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from "./Room.module.scss";

interface RoomProps  {
  title: string;
  users: Array<string>;
}

export const Room: React.FC<RoomProps> = ({title, users}) => {
  return(
    <div className={styles.roomWrapper}>
      <div className="container">
        <div className={styles.titleRow} >
          <h2>{title}</h2>
          <Link href="/rooms">
            <a>
              <Button color="gray">
                <div>
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-10"/>Leave quietly
                </div>                
              </Button>
            </a>
          </Link>
        </div>
        <div className="usersGrid">
          {
            users.map((obj, index) => (
              <Avatar 
                key={index}
                src=""
                width="40px"
                height="40px"
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}