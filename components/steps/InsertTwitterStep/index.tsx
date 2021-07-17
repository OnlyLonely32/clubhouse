import {StepInfo} from '../../StepInfo';
import {Modal} from '../../Modal';
import {Button} from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import React from 'react';
import { MainContext } from '../../../pages';

export const InsertTwitterStep: React.FC = () => {
  const notFound = "/img/not-found.png";
  const {onNextStep} = React.useContext(MainContext);
	return(
		<div>
			<StepInfo
				img="/img/phone.svg"
				title="Do you wont import info from Twitter?"
			/>
			<Modal size="small">
				<div className="avatar">
					<Image 
          src={notFound} 
          alt="notFound"
          width="120px"
          height="120px" />
					<h3>Vlad Burko</h3>
				</div>
				<Button onClick={onNextStep}>
					<FontAwesomeIcon icon={faTwitter} />
					Import from Twitter
					<FontAwesomeIcon className='ml-10' icon={faArrowRight}/>
				</Button>
				<span className="link-btn">Import my info manually</span>
			</Modal>
		</div>
	)
}