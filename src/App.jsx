import React,{useState,useEffect} from 'react';
import MemberInfo from './Components/MemberInfo/MemberInfo';

const App = () => {
const[showCard,setShowcard]=useState(false);

  useEffect(()=>{
    const setTimer = setTimeout(()=>{
      setShowcard(true);
    },3000);

    return ()=> clearTimeout(setTimer);
  },[])
  return (
    <div className="Main">
     
        <div className='card1'>
      {showCard &&
      <MemberInfo
      pic={'src/Images/pic2.jpg'} 
      name={"Mahlori Baloyi"}
      job={"Junior Web developer"}
      bio={"Hi There i am Mahlori Baloyi, i am a junior Web developer, i Am the defination of class on my own, nothing more"}
      contact={'Contact me here:0860010111'} 
      />
      }
       <h2>Profile Cards</h2> 
      <div className="second-card">
      {showCard &&
      <MemberInfo
      pic={'src/Images/pic3.jpg'} 
      name={"Shongani Baloyi"}
      job={"Junior Mobile app developer"}
      bio={"Hi There i am Shongani Baloyi, i am a junior Mobile App developer, aiii my body is tired"}
      contact={'Contact me here:shongsiamtired@gmail.com'} 
      />
    }
      </div>
    </div>
    </div>
  )
}

export default App;
