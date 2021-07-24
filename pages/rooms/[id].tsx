import React from "react";
import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { Room } from "../../components/Room";

const RoomPage:React.FC = () => {
  const route = useRouter();
  const {id} = route.query;
  const obj=[]

  return(
    <div className="container">
      <Header  
      avatarUrl="" 
      fullname="Vlad Burko" />
      <Room title="my first cinversation about..." users={obj}/>
    </div>
  )
}

export default RoomPage;