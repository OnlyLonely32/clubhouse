import {Modal} from "../../Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from './WelcomeStep.module.scss'
import {Button} from "../../Button";
import { MainContext } from "../../../pages";
import React from "react";

export const WelcomeStep: React.FC = () =>{
  const {onNextStep} = React.useContext(MainContext);

  return(
    <Modal>
      <h1 className={styles.welcome_title}>Welcome to Clubhouse</h1>
      <p className={styles.welcome_text}>
          We&apos;re working haed to get Clubhouse ready for everyone!
          while we wrap up the finishing youches, we&apos;re adding people gradually to make sure nothing breaks :&#41;
      </p>
      <Button onClick={onNextStep}>
        Import from Twitter
        <FontAwesomeIcon className='ml-10' icon={faArrowRight}/>
      </Button>
    </Modal>
  )}