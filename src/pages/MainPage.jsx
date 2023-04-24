import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImage } from '../features/images/imagesSlice';
import { toast } from "react-toastify";
import Image from '../components/Image';
import Spinner from '../components/Spinner';
import PreFlopActionButtons1 from '../components/PreFlopActionButtons1'
import PreFlopActionButtons2 from '../components/PreFlopActionButtons2'
import BigBlindButtons from '../components/BigBlindButtons'

const MainPage = () => {

  // unpack state.image
  const { images, isLoading, isError, message } = useSelector(
    (state) => state.images
  )
  const {user} = useSelector((state)=>state.auth)

  // actBtn for change classname in activ button
  const [actBtn, setActBtn] = useState(["","","",""])

  // get value from pushed button
  const [pushedBtn, setPushedBtn] = useState(["","","",""])


  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user) {
      // get image
    // dispatch(getImage(JSON.stringify(pushedBtn)));
      dispatch(getImage(pushedBtn));
    }
    
    // listing on change 
  }, [dispatch, isError, message, pushedBtn]);


  // list with buttons names to render components
  const BigBlindButtonsList = ['100BB', '60BB', '40BB', '30BB', "20BB"]
  const RangeViewerComponentPreflopActionPlayer1 = ['UTG', 'MP', 'HJ', 'CO', 'BTN', 'SB', 'BB']

  // get value and change class in list[0]
  const setBB = (e) => {
    setPushedBtn([e.target.innerText, pushedBtn[1], pushedBtn[2], pushedBtn[3]])
    setActBtn([e.target.innerText, actBtn[1], actBtn[2], actBtn[3]])
  }
  
  // get value and change class in list[1]
  const setRFIor3B = (e) => {
    setPushedBtn([pushedBtn[0],e.target.innerText, pushedBtn[2], pushedBtn[3]])
    setActBtn([actBtn[0], e.target.innerText, actBtn[2], actBtn[3]])
  }

  // get value and change class in list[2]
  const preFlopActionPlayer1 = (e) => {
    setPushedBtn([pushedBtn[0], pushedBtn[1], e.target.innerText, pushedBtn[3]])
    setActBtn([actBtn[0], actBtn[1], e.target.innerText, actBtn[3]])
  }

  // get value and change class in list[3]
  const preFlopActionPlayer2 = (e) => {
    setPushedBtn([pushedBtn[0], pushedBtn[1], pushedBtn[2], e.target.innerText,])
    setActBtn([actBtn[0], actBtn[1], actBtn[2], e.target.innerText])
  }

  // if isLoading = True, spinner is activ , ususaly sth is wrong when you see it
  // if (isLoading) {
	// 	return <Spinner />;
	// }


  if (!user) {
    return <h1>Please create an account on https://jakacoaching.com/</h1>
  } 



  return (
    <>
      <div className="ver1AppBox">
          <div className="RangeViewerComponentbox">
            <div>
              {
                BigBlindButtonsList.map((btn)=> 
                <BigBlindButtons btn={btn} actBtn={actBtn} setBB={setBB} />
               )
              }
              
            </div>
          </div>

          <div className="RangeViewerComponentPreflopAction">
            <div className="RangeViewerComponentPreflopActionAction">
              <button className={`${actBtn[1] === "RFI" ? "btnActiv" : "btnUnActiv"}`} onClick={setRFIor3B}> RFI </button>
              <button className={`${actBtn[1] === "3bet" ? "btnActiv" : "btnUnActiv"}`} onClick={setRFIor3B}> 3bet </button>
            </div>

            <div className="RangeViewerComponentPreflopActionPlayer">
              {
                RangeViewerComponentPreflopActionPlayer1.map((btn, idx)=> 
                  <PreFlopActionButtons1 btn={btn} actBtn={actBtn} preFlopActionPlayer1={preFlopActionPlayer1}/>
                 )
              }
              
            </div>

            <div className="RangeViewerComponentPreflopActionPlayer">
              {
                RangeViewerComponentPreflopActionPlayer1.map((btn, idx)=> 
                  <PreFlopActionButtons2 btn={btn} actBtn={actBtn} preFlopActionPlayer2={preFlopActionPlayer2}/>
                 )
              }
              
            </div>
          </div>

          <div className="RangeViewerComponentRanges"><div>
            <div className='titleRange'> Title Range 1</div>
              <div className="RangeViewerComponentRangesRange">
                <img src={images.image_url_1} alt="Logo1" className="rangeManual"/>
              </div>
            </div>

          <div>
          <div className='titleRange'> Title Range 2</div>
            <div className="RangeViewerComponentRangesRange">
              <img src={images.image_url_2} alt="Logo2" className="rangeManual"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;