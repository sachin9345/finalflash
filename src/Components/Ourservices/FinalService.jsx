import React from 'react'
import { CarWaxing } from './Carwaxing/Carwaxing';
import { CarWaxingProcess } from './Carwaxingprocess/Carwaxingprocess';
import { OdourRemoval} from './Odourremoval/Odouremoval';
import  OdourProcess  from './Odourremovlprocess/OdourProcess';
import  Ac  from './Acgas/Ac';
import Service from './Service/Service'
import Nav from '../Homepage/Nav/Nav';

const FinalService = () => {
  return (
    <div>
      <div className="navadjust">
      <Nav/> 
      </div>
      
      <Service/>
         <div className="carwaxhead">CAR WAXING SERVICES</div>
        <CarWaxing/>
       <CarWaxingProcess/>
        <div className="background">
         <OdourRemoval/>  
         </div>
         <OdourProcess/>
        <Ac/>
    </div>
  );
}

export default FinalService
