import React from "react";
import { Header } from "../../components/Header";
import styles from "./Rooms.module.scss";
import {ConversationCard} from '../../components/ConversationCard'
import { Button } from "../../components/Button";
import Link from "next/link";

const Rooms:React.FC = () => {
  let cards = [{
    title: "about more when you know",
    listeners: ["Vlad Burko", "Karolina Skro"],
    avatars:[
      "https://sun9-34.userapi.com/s/v1/ig1/tumjjJsnwAWVlGfJez1tHbByMh-f3ru6R9RyNbWQjlj05BzKgqrA3GdH8fSQ_G_AEaM1UfUq.jpg?size=50x0&quality=96&crop=4,4,854,854&ava=1", 
      "https://sun9-82.userapi.com/s/v1/ig2/AM9uyRh3cexnxuLV29WJfvYrDyMTUAjNC7OMNR9o4G21pJMZ9YzCROJtQYLEcp5hajrzXOVmyKBzR-zEUyvGLfrw.jpg?size=50x0&quality=96&crop=0,125,882,882&ava=1"
    ],
    speacersCount: 2,
    listenersCount:129
  }]

  return(
    <div className="container">
      <Header  
      avatarUrl="" 
      fullname="Vlad Burko" />
      <h1>All conversation</h1>
      <div className={styles.buttonRow} >
        <Button>New room</Button>
      </div>
      <div className={styles.conversationGrid}>
        {cards.map((card, index) => ( 
        <Link href="/rooms/test" key={index}>
          <a>
            <ConversationCard 
              title={card.title} 
              listeners={card.listeners} 
              avatarsUrl={card.avatars} 
              speacersCount={card.speacersCount} 
              listenersCount={card.listenersCount} 
            />
          </a>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default Rooms;