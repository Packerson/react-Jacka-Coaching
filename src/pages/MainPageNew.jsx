import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { useNavigate} from 'react-router-dom'

import { getImage } from '../features/images/imagesSlice';
import PreFlopActionButtons1 from '../components/PreFlopActionButtons1'
import PreFlopActionButtons2 from '../components/PreFlopActionButtons2'
import BigBlindButtons from '../components/BigBlindButtons'
import Image from '../components/Image';


// display buttons and images, 
// Get value from buttons and insert user info to pushedBtn
// clicking on the button sends a query to the backend
const MainPageNew = () => {

  // unpack state.image
  const { images, isError, message } = useSelector(
    (state) => state.images
  )
  const {user} = useSelector((state)=>state.auth)

  // get value from pushed button and change classname(when clicked change color on blue) in 
  // activ button, init value for default charts
  const [pushedBtn, setPushedBtn] = useState(["30BB","3bet","HJ","MP", false])
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  useEffect(() => {
    // if error set message and display it
    if (isError) {
      toast.error(message);
    }
    // if no user redirect to loginPage
    if (!user) {
      return navigate("/login/");
    }

    // if user and buttons are not on init state dispatch getImage action and send data
    //  with value from buttons and user info
    if (user) {
      console.log(user.subscriber)
      // get images
      dispatch(getImage(pushedBtn));
    }
    
    // listing on change 
    }, [pushedBtn, user]);

    

  // list with buttons names to render components
  const BigBlindButtonsList = ['100BB', '60BB', '40BB', '30BB', "20BB"]
  const RangeViewerComponentPreflopActionPlayer1 = ['UTG', 'MP', 'HJ', 'CO', 'BTN', 'SB', 'BB']

  // get value and change class in list[0]
  const setBB = (e) => {
    setPushedBtn([e.target.innerText, pushedBtn[1], pushedBtn[2], pushedBtn[3], user.subscriber])
  }
  
  // get value and change class in list[1]
  const setRFIor3B = (e) => {
    setPushedBtn([pushedBtn[0],e.target.innerText, pushedBtn[2], pushedBtn[3], user.subscriber])
  }

  // get value and change class in list[2]
  const preFlopActionPlayer1 = (e) => {
    setPushedBtn([pushedBtn[0], pushedBtn[1], e.target.innerText, pushedBtn[3], user.subscriber])
  }

  // get value and change class in list[3]
  const preFlopActionPlayer2 = (e) => {
    setPushedBtn([pushedBtn[0], pushedBtn[1], pushedBtn[2], e.target.innerText, user.subscriber])
  }


// if user exists render components
if (user) {
  return (
    <>
          <div className="ContainerBoxNew">
            <div className='AllButtons'>
              <div className='StackSize'>
                  {/* Function for render the Big Blinds buttons */}
                {
                  BigBlindButtonsList.map((btn, idx)=> 
                  <BigBlindButtons btn={btn} idx={idx} pushedBtn={pushedBtn} setBB={setBB}  />
                )
                }
              </div>
            

                  {/* Render PreFlopActionbuttons */}
              <div className=" Rfi3Bet ">
              
                <button className={`${pushedBtn[1] === "RFI" ? "btnActiv" : "btnUnActiv"}`} onClick={setRFIor3B}> RFI </button>
                <button className={`${pushedBtn[1] === "3bet" ? "btnActiv" : "btnUnActiv"}`} onClick={setRFIor3B}> 3bet </button>
              </div>


                  {/* Function for render PreFlopAction1 */}
              <div className=" ActionPreFlop">
                {
                  RangeViewerComponentPreflopActionPlayer1.map((btn, idx)=> 
                    <PreFlopActionButtons1 btn={btn} idx={idx} pushedBtn={pushedBtn} preFlopActionPlayer1={preFlopActionPlayer1} />
                  )
                }
              </div>


                    {/* Function for render PreFlopAction2 */}
              <div className="ActionPreFlop ">
                {
                  RangeViewerComponentPreflopActionPlayer1.map((btn, idx)=> 
                    <PreFlopActionButtons2 btn={btn} idx={idx} pushedBtn={pushedBtn} preFlopActionPlayer2={preFlopActionPlayer2}/>
                  )
                }
              </div>
            </div>



            {/* display images , if images.images_url display charts else display message*/}      
            {images.images_url ?
              (
                <div className=" Charts">

                  {/* compoment to display charts */}
                  { 
                  images.images_url.map((image)=>
                    <Image image={image}/>)
                  }
                </div>
                
              ):
              <h2 style={{color:"white"}}>Charts not found</h2>
            }
            </div>
      
    </>
  );
            };
};

export default MainPageNew;
