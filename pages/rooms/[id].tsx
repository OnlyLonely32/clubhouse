import React from "react";
import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { Room } from "../../components/Room";
import { BackButton } from "../../components/BackButton";

const RoomPage:React.FC = ({}) => {
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
      <Room title="my first cinversation about..." users={obj}/>
    </>
  )
}

export default RoomPage;