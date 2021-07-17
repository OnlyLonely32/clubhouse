import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Button} from "../../Button";
import {Modal} from "../../Modal";
import clsx from "clsx";
import {StepInfo} from "../../StepInfo";
import React from 'react';
import { MainContext } from '../../../pages';

export const InsertNameStep: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const {onNextStep} = React.useContext(MainContext);
  const isDisable = !value;

  const onClickNextStep = () => {
    onNextStep();
  }
    return (
      <div className='flex-centered-block'>
            <StepInfo
                img="/img/person.svg"
                title="What's your full name"
                description="People use real names on Clubhouse:) Thnx!"
            />

            <Modal
                className={clsx('mt-20')}
                size="small"
            >
                <input
                className="textInput"
                value={value}
                onChange={e => setValue(e.target.value)}
                type="text"
                maxLength={30}
                placeholder="Insert name" />
                <Button disabled={isDisable} onClick={onClickNextStep}>
                    Next
                    <FontAwesomeIcon className='ml-10' icon={faArrowRight}/>
                </Button>
            </Modal>
        </div>
    )
}