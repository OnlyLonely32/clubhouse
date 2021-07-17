import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Button} from "../../Button";
import {Modal} from "../../Modal";
import clsx from "clsx";
import {StepInfo} from "../../StepInfo";
import React from 'react';
import Axios from '../../../core/axios';
import { useRouter } from 'next/router';

export const InsertcodeStep: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [code, setCode] = React.useState(['','','','']);

  const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const value = event.target.value;
    setCode((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr
    });

    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  }

  const onSubmit = async () =>{
    try {
      setIsLoading(true);
      await Axios.get('todos');
      router.push('/rooms');
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false);
  }

  const disableBtn: boolean = code.some((v)=>!v)

  return (
    <div className='flex-centered-block'>
      {!isLoading ? (
        <>
          <StepInfo
          img="/img/code.svg"
          title="Enter your actve code" />
          <Modal
          className={clsx('mt-20')}
          size="small" >
            <div className="codeRow">
              {
                code.map((code, index)=> (
                  <input
                  key={index}
                  className="codeInput"
                  type="tel"
                  maxLength={1}
                  placeholder="x"
                  id={String(index)}
                  value={code}
                  onChange={handleChangeCode} />
                ))
              }
            </div>
              
              <Button disabled={disableBtn} onClick = {onSubmit}>
                Next
                <FontAwesomeIcon className='ml-10' icon={faArrowRight}/>
              </Button>
          </Modal>
        </>
      ) : (
        <div className="loading">
          <div className="loading-circle"></div>
          <h3>Activation in progress...</h3>
        </div>
      )
      }
    </div>
  )
}