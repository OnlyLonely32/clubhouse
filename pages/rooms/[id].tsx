import React from "react";
import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { Room } from "../../components/Room";
import { BackButton } from "../../components/BackButton";
import Axios from "../../core/axios";

const RoomPage:React.FC = ({room}) => {
  const route = useRouter();
  const {id} = route.query;
  const obj=[]

  return(
    <>
      <div className="container">
        <Header  
        avatarUrl="" 
        fullname="Vlad Burko" />
        <BackButton href="/rooms" />
      </div>
      <Room title={room.title} users={obj}/>
    </>
  )
}

export default RoomPage;

export const getServerSideProps = async(ctx) => {
  try {
    const {data} = await Axios.get('/rooms.json');
    const roomId = ctx.query.id;
    const room = data.find((obj) => obj.id === roomId)
    return {
      props: {
        room: room
      }
    };
  } catch (error) {
    return {
      props: {
        room: []
      }
    };
  }
  return{
    props: {},
  }
}