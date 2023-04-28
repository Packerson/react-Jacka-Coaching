import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImage } from '../features/images/imagesSlice';
import { toast } from "react-toastify";
import { useNavigate} from 'react-router-dom'
import { Container} from "react-bootstrap";


import PreFlopActionButtons1 from '../components/PreFlopActionButtons1'
import PreFlopActionButtons2 from '../components/PreFlopActionButtons2'
import BigBlindButtons from '../components/BigBlindButtons'
import backgroundImage from '../images/background.jpg';


// display buttons and images, 
// Get value from buttons and insert user info to pushedBtn
// clicking on the button sends a query to the backend
const MainPage = () => {

  // unpack state.image
  const { images, isLoading, isError, message } = useSelector(
    (state) => state.images
  )
  const {user} = useSelector((state)=>state.auth)

  // actBtn for change classname(when clicked change color on blue) in activ button
  const initState = [["","","",""]]
  const [actBtn, setActBtn] = useState(initState)

  // get value from pushed button
  const [pushedBtn, setPushedBtn] = useState(["","","",""])
  
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

    // if user and buttons are not on init state dispatch getImage action and send data with value from buttons and user info
    if (user && actBtn !== initState) {
      console.log(user.subscriber)
      // get images
      dispatch(getImage([pushedBtn]));
    }
    
    // listing on change 
    }, [dispatch, isError, message, pushedBtn, user]);

    

  // list with buttons names to render components
  const BigBlindButtonsList = ['100BB', '60BB', '40BB', '30BB', "20BB"]
  const RangeViewerComponentPreflopActionPlayer1 = ['UTG', 'MP', 'HJ', 'CO', 'BTN', 'SB', 'BB']

  // get value and change class in list[0]
  const setBB = (e) => {
    setPushedBtn([e.target.innerText, pushedBtn[1], pushedBtn[2], pushedBtn[3], {user}])
    setActBtn([e.target.innerText, actBtn[1], actBtn[2], actBtn[3]])
  }
  
  // get value and change class in list[1]
  const setRFIor3B = (e) => {
    setPushedBtn([pushedBtn[0],e.target.innerText, pushedBtn[2], pushedBtn[3], {user}])
    setActBtn([actBtn[0], e.target.innerText, actBtn[2], actBtn[3]])
  }

  // get value and change class in list[2]
  const preFlopActionPlayer1 = (e) => {
    setPushedBtn([pushedBtn[0], pushedBtn[1], e.target.innerText, pushedBtn[3], {user}])
    setActBtn([actBtn[0], actBtn[1], e.target.innerText, actBtn[3]])
  }

  // get value and change class in list[3]
  const preFlopActionPlayer2 = (e) => {
    setPushedBtn([pushedBtn[0], pushedBtn[1], pushedBtn[2], e.target.innerText, {user}])
    setActBtn([actBtn[0], actBtn[1], actBtn[2], e.target.innerText])
  }

// main style for Container
const ContainerBox = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: "auto",
    padding: "2rem",
    textAlign: "center",
    maxWidth: "100%",
    maxHeight: "130%",
}
// if user exists render components
if (user) {
  return (
    <>
      <Container style={ContainerBox}>


          <div className="RangeViewerComponentbox">
            <div>
                {/* Function for render the Big Blinds buttons */}
              {
                BigBlindButtonsList.map((btn)=> 
                <BigBlindButtons btn={btn} actBtn={actBtn} setBB={setBB}  />
               )
              }
            </div>
          </div>


                {/* Render buttons */}
          <div className="RangeViewerComponentPreflopAction">
            <div className="RangeViewerComponentPreflopActionAction">
              <button className={`${actBtn[1] === "RFI" ? "btnActiv" : "btnUnActiv"}`} onClick={setRFIor3B}> RFI </button>
              <button className={`${actBtn[1] === "3bet" ? "btnActiv" : "btnUnActiv"}`} onClick={setRFIor3B}> 3bet </button>
            </div>

                {/* Function for render PreFlopAction1 */}
            <div className="RangeViewerComponentPreflopActionPlayer">
              {
                RangeViewerComponentPreflopActionPlayer1.map((btn)=> 
                  <PreFlopActionButtons1 btn={btn} actBtn={actBtn} preFlopActionPlayer1={preFlopActionPlayer1} />
                 )
              }
            </div>

                  {/* Function for render PreFlopAction2 */}
            <div className="RangeViewerComponentPreflopActionPlayer">
              {
                RangeViewerComponentPreflopActionPlayer1.map((btn)=> 
                  <PreFlopActionButtons2 btn={btn} actBtn={actBtn} preFlopActionPlayer2={preFlopActionPlayer2}/>
                 )
              }
            </div>
          </div>
              

                {/* display images */}
          <div className="RangeViewerComponentRanges">
                {/* display image1 */}
            <div>
            <div className='titleRange'> Title Range 1</div>
              <div className="RangeViewerComponentRangesRange">
                <img src={images.image_url_1} alt="Logo1" className="rangeManual"/>
              </div>
            </div>

                {/* display image2 */}
            <div>
            <div className='titleRange'> Title Range 2</div>
                <div className="RangeViewerComponentRangesRange">
                <img src={images.image_url_2} alt="Logo2" className="rangeManual"/>
                </div>
            </div>
        </div>
      </Container>
    </>
  );
            };
};

export default MainPage;