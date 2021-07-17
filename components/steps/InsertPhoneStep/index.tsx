import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Button} from "../../Button";
import {Modal} from "../../Modal";
import React from "react";
import NumberFormat from 'react-number-format';
import clsx from "clsx";
import {StepInfo} from "../../StepInfo";
import { MainContext } from '../../../pages';

type InputValueState = {
  formattedValue: string;
  value: string;
}

export const InsertPhoneStep: React.FC = () => {
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);
  const {onNextStep} = React.useContext(MainContext);
  const isDisabledBtn = !values.formattedValue || values.formattedValue.includes('_')
  return(
    <div className='flex-centered-block'>
            <StepInfo
                img="/img/phone.svg"
                title="Enter your phone #"
                description="We will send you a confirmation code"
            />

            <Modal
              className="mt-20"
              size="small">
                <NumberFormat 
                className="textInput" 
                format="+375 (##) ###-##-##"
                allowEmptyFormatting 
                mask="_"
                value={values.value}
                onValueChange={({formattedValue, value}) => setValues({formattedValue, value})} />
                <Button disabled={isDisabledBtn} onClick={onNextStep}>
                    Next
                    <FontAwesomeIcon className='ml-10' icon={faArrowRight}/>
                </Button>
            </Modal>
        </div>
  )
}