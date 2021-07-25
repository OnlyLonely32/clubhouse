import React from "react";
import { Header } from "../../components/Header";
import styles from "./Rooms.module.scss";
import {ConversationCard} from '../../components/ConversationCard'
import { Button } from "../../components/Button";
import Link from "next/link";
import Axios from "../../core/axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Rooms({rooms=[]}){
  // const [rooms, setRooms] = React.useState([]);

  // React.useEffect(()=>{
  //   (async () => {
  //     const {data} = await Axios.get('/rooms.json');
  //     setRooms(data);  
  //   })();
  // },[])

  return(
    <div className="container">
      <Header  
      avatarUrl="" 
      fullname="Vlad Burko" />
      <div className={styles.buttonRow} >
        <h1>All conversation</h1>
        <Button>New room<FontAwesomeIcon className='ml-10' icon={faPlus} /></Button>
      </div>
      <div className={styles.conversationGrid}>
        {rooms.map((room, index) => ( 
        <Link href={`/rooms/${room.id}`} key={index}>
          <a>
            <ConversationCard
              title={room.title} 
              listeners={room.listeners} 
              avatarsUrl={room.avatarsUrl} 
              speacersCount={room.speacersCount} 
              listenersCount={room.listenersCount} 
            />
          </a>
        </Link>
        ))}
      </div>
    </div>
  )
}


export const getServerSideProps = async() => {
  try {
    const {data} = await Axios.get('/rooms.json');
    return {
      props: {
        rooms: data
      }
    };
  } catch (error) {
    return {
      props: {
        rooms: []
      }
    };
  }
  return{
    props: {},
  }
}
