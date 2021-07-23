import React from "react";
import { Avatar } from "../Avatar";
import { Modal } from "../Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import styles from "./ConversationCard.module.scss";
import avatarStyles from "../Avatar/Avatar.module.scss";

interface ConversationCardProps {
  title: string;
  users: string[];
  avatarsUrl: string[];
  speacersCount: number;
  listenersCount: number;
}

export const ConversationCard:React.FC<ConversationCardProps> = ({title, users, avatarsUrl, speacersCount, listenersCount}) => {
  
  
  return(
    <Modal className={styles.card} size="card" >
      <h3> {title} </h3>
      <div className={styles.detalis} >
        <div className={styles.avatars} >
        {
        avatarsUrl.map((url, index) => <Avatar key={url + index} className={ index === avatarsUrl.length-1 ? avatarStyles.last : "" } src={url} width="40px" height="40px" />)
        }
        </div>
        <div className={styles.info} >
          <ul className={styles.speacers} >
            {
              users.map((name, index) => <li key={name + index}>{name}</li>)
            }
          </ul>
          <ul className={styles.listeners}>
            <li> {speacersCount} <FontAwesomeIcon className="ml-10" icon={faVolumeUp} /></li>
            <li> {listenersCount} <FontAwesomeIcon className="ml-10" icon={faHeadphones} /></li>
          </ul>
        </div>
      </div>
    </Modal>
  )
}