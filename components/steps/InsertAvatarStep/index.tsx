import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Button} from "../../Button";
import {Modal} from "../../Modal";
import {Avatar} from "../../Avatar";
import clsx from "clsx";
import {StepInfo} from "../../StepInfo";
import { MainContext } from '../../../pages';

export const InsertAvatarStep:React.FC = () => {  
  const [avatarUrl, setAvatarUrl] =  React.useState<string>('')
  const {onNextStep} = React.useContext(MainContext);
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handleChangeImage = (e: Event): void => {
    const file = (event.target as HTMLInputElement).files[0];
    if ( file ){
      const imageUrl: string = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  }

  React.useEffect(()=>{
    if( inputFileRef.current){
      inputFileRef.current.addEventListener('change', handleChangeImage)
    }
  },[])

  return (
    <div className='flex-centered-block'>
      <StepInfo
        img="/img/plug.svg"
        title="Ok, Burko Vlad!"
        description="How's this photo?"/>

      <Modal
        size="small">
          <div className="d-flex flex-column mb-20">
            <Avatar 
            src={avatarUrl}
            width='120px'
            height='120px'/>
            <label htmlFor="avatar" className="link-btn">Choouse the different photo</label>
            <input type="file" name="avatar" id="avatar" ref={inputFileRef} style={{display: "none"}}/>
          </div>
        <Button onClick={onNextStep}>
          Next
          <FontAwesomeIcon className='ml-10' icon={faArrowRight}/>
        </Button>
      </Modal>
    </div>
  )
}