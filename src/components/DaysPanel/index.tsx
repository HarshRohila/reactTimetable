import { IonContent, IonItem, IonLabel, IonList, IonRadioGroup, IonRadio } from '@ionic/react';
import React, { useState } from 'react';
import  ActionableModalCard  from '../ModalCards/ActionableModalCard'
import './style.scss';
import store from '../../store';





const DaysPanel : React.FC = () => {
    
    const[onHoldProps,setOnHoldProps] = useState( {showModal: false, days : [''], selectedDay:'' } );
  
    let timer = 0;
    let days;
    

    let handleOnMouseDown = ( day: string ) => 
      timer = new Date().getTime();   
    

    let handleOnMouseUp = (day: string) => {
        let totalTime = (new Date().getTime() - timer)/1000;  
        if(totalTime > 2)     
            setOnHoldProps({showModal: true ,days: onHoldProps.days, selectedDay: day});    
   }

    
    let markNonWorkingDay = (day: string)=> {
        store.getData().then(data => {
            data[day]['isWorkDay'] = false;
             store.save(data);
             setOnHoldProps({showModal: false, days: [''], selectedDay: ''});
         });

    } 

  let  displayWorkingDays = (workingDays: string[]) => {
       return workingDays
             .map(i => {

        return (
            
            <IonItem 
            key={i} 
            color="primary" 
            onMouseDown={() => handleOnMouseDown(i)}
            onMouseUp = {() => handleOnMouseUp(i)}
            onTouchStart = {() => handleOnMouseDown(i)}
            onTouchEnd = {() => handleOnMouseUp(i)}
            >
                <IonLabel>
                    {i}
                </IonLabel>
                <IonRadio value={i} />
            </IonItem>
            
        );
    });;

   }

   let getWorkingDays = () => {
       store.getData().then((data)=>{
        let workingDays = Object.keys(data)
        .filter(day => { return data[day]['isWorkDay']} );

         setOnHoldProps({showModal: false, days: workingDays, selectedDay: ''});                           
       }) 

       

   }

    
   let isLoadingTemplate = <h1>Loading......</h1>;
   
   if( !onHoldProps['days'][0] ) {
    days = isLoadingTemplate;
    getWorkingDays();
    }    
    else 
        days = displayWorkingDays(onHoldProps['days']);


    let modal = <ActionableModalCard 
                title = { "Are you sure you want to mark "+ onHoldProps.selectedDay +" Non-working day" }  
                onClose = {() => setOnHoldProps({showModal: false, days: onHoldProps.days, selectedDay: ''})} 
                onSave = {() => markNonWorkingDay(onHoldProps.selectedDay)}
                />;

                    
    return (
        
            <IonContent> 
                <IonList>
                    <IonRadioGroup>
                        {days}
                    </IonRadioGroup>   
                </IonList>
                {onHoldProps.showModal? modal : null}
            </IonContent>
        
        
    );
};

export default DaysPanel;