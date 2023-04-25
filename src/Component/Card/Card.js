import React from 'react'
import Data from '../Data/Data'
import './Card.css'


export default function Card({ image, designation, name, jobDescripton }) {
  return (
    <div>
      <div className='card1'>
        <Data
          image="https://media.istockphoto.com/id/1218087435/photo/little-girl-wet-by-rain-in-the-yard.jpg?s=170667a&w=0&k=20&c=z2SYKmUA5Xog5SU1KzwH428M-96y95Xstq0rPCwp-68="
          designation=" Teacher "
          name="Neha"
          jobDescripton="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor."


        />
      </div>
      <div className='card2'>
        <Data
          image="https://media.istockphoto.com/id/1285993433/photo/carefree-african-american-girl-in-studio.jpg?s=612x612&w=0&k=20&c=8IrWu7J3Odp7mwZxizKfUVbDC6dvw-ttIKwvVXVIDvA="
          designation=" Developer "
          name="Ashwini"
          jobDescripton="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor"


        />
      </div>
      <div className='card3'>
        <Data
          image="https://media.istockphoto.com/id/939108006/photo/portrait-of-cute-girl.jpg?s=170667a&w=0&k=20&c=YRkMlR-fz0acwcypsN8s87KH_MwWn8FM7uZe5X8BagY="
          designation=" Docter"
          name="Rani"
          jobDescripton="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, dolor."


        />
      </div>
    </div>
  )
}
