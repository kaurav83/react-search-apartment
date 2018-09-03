import React, { Component } from 'react';
import Apartament from './Apartament';

class Apartaments extends Component {
  render() {
      let arrayStuff = this.props.apartaments.appa.stuff;
      let valueOfFilter = this.props.apartaments.selectedApartments;
      let chooseApartaments;
    
      if (arrayStuff.length > 0 && valueOfFilter === 1) {
          chooseApartaments = arrayStuff.map(item => {
              
            //   return (
            //     <Apartament 
            //         item={item.total__room === 1}
            //     />
            //   )
          })
      }
      
    return (
      <div>
        {
            arrayStuff.length > 0  ? 
            arrayStuff.map(item => {
                // console.log(item)
                    return (
                        <div key={item.id}>
                            {
                                (valueOfFilter == 1 && item.total_rooms == 1) 
                                    || 
                                (valueOfFilter == 2 && item.total_rooms == 2)
                                    ||
                                (valueOfFilter == 3 && item.total_rooms == 3) ? 
                                <Apartament 
                                    id={item.id}
                                    total_rooms={item.total_rooms}
                                    price={item.price}
                                />
                                : null
                            }
                            {
                                 
                            }
                        </div>
                        
                    )
                    
                
            }) : null

        }
      </div>
    )
  }
}

export default Apartaments;