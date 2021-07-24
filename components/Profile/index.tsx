import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import React from 'react';
import Link from "next/link";
import { BackButton } from "../BackButton";

interface ProfileProps  {
  avatarUrl: string;
  fullname: string;
  username: string;
  description: string;
  className?: string;
}

export const Profile: React.FC<ProfileProps> = ({avatarUrl, fullname, username, description}) => {
  return(
    <>
      <BackButton className="mt-40" href="/rooms"/>
      <div className="d-flex mt-10 mb-10">
        <Avatar src={avatarUrl} width="120px" height="120px" />
        <div className="d-flex flex-column ml-20">
          <h2>{fullname}</h2>
          <h3>@{username}</h3>
        </div>
        <Button className="ml-20" color="blue">Follow</Button>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </>
  )
}