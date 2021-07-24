import { useRouter } from 'next/router';
import { Profile } from "../../components/Profile";
import { Header } from "../../components/Header";

export default function ProfilePage() {
  const router = useRouter();
  const {id} = router.query;
  return(
    <div className="container">
      <Header  
      avatarUrl="" 
      fullname="Vlad Burko" />
      
      <Profile 
      avatarUrl="" 
      fullname="Vlad Burko" 
      username="onlylonely32" 
      description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure " />
    </div>
  )
}