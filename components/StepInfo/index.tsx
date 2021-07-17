/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './StepInfo.module.scss'

interface StepInfoProps {
  img?: string;
  title?: string;
  description?: string;
}

export const StepInfo:React.FC<StepInfoProps> = ({img, title, description}) =>{
    return(
        <div className={styles.stepInfo}>
            <img src={img} alt="img"/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}