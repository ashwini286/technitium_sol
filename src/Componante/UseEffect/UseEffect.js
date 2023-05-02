import React, { useEffect, useRef, useState } from "react";
import pic1 from './img/work-1.png'
import pic2 from './img/work-2.png'
import pic3 from './img/work-3.png'


export default function UseEffect() {
    const Allpic = [pic1,pic2,pic3]
  const [photo,setPhoto] = useState([pic2])
  const photoRef = useRef(null);
 const handleButton = () => {
    const imageUrl = Allpic;
    const imageindex = Allpic.indexOf(imageUrl);
    const nextindex = (imageindex + 1) % Allpic.length;
    const nextimageUrl = Allpic[nextindex];
    setPhoto(nextimageUrl);
  } 

  useEffect(()=>{
    console.log(photoRef.current)
  },[])

  
  
  return (
    <div className="App">
      <img src={photo} ></img>
    <br />  <button  onClick={handleButton} ref={photoRef}>Click Me To Change Pic</button>
    </div>
  );
}


