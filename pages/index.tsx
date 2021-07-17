import React from "react";
import {InsertTwitterStep} from "../components/steps/InsertTwitterStep";
import {WelcomeStep} from '../components/steps/WelcomeStep'
import {InsertNameStep} from "../components/steps/InsertNameStep";
import { InsertAvatarStep } from "../components/steps/InsertAvatarStep";
import styles from '../styles/Home.module.css'
import { InsertPhoneStep } from "../components/steps/InsertPhoneStep";
import { InsertcodeStep } from "../components/steps/InsertCodeStep";
import { NumberFormatValues } from "react-number-format";

const stepComponents = {
  0: WelcomeStep,
  1: InsertNameStep,
  2: InsertTwitterStep,
  3: InsertAvatarStep,
  4: InsertPhoneStep,
  5: InsertcodeStep
}

type MainContextProps = {
  onNextStep: ()=> void;
  step: number;
}

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps)

export default function Home () {
  const [step, setStep] = React.useState<number>(0);
  const Step = stepComponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  }

  return (
    <div className={styles.container}>
        <MainContext.Provider value={{step, onNextStep}}>
          <Step/>
        </MainContext.Provider>
    </div>
  )
}
