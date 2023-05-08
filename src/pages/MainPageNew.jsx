import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUser } from "../features/auth/authSlice";
import {
   getImage,
   getAllCharts,
   resetImage,
} from "../features/images/imagesSlice";
import Player1PostitionButtons from "../components/Player1PostitionButtons";
import ActionsPreFlop from "../components/ActionsPreFlop";
import Player2PostitionButtons from "../components/Player2PostitionButtons";
import BigBlindButtons from "../components/BigBlindButtons";
import Image from "../components/Image";

// display buttons and images,
// Get value from buttons and insert user info to pushedBtn
// clicking on the button sends a query to the backend
const MainPageNew = () => {
   // unpack state.image
   const { images, allCharts, message } = useSelector((state) => state.images);
   const { user } = useSelector((state) => state.auth);

   // get value from pushed button and change classname(when clicked change color on blue) in
   // activ button, init value for default charts
   const [pushedBtn, setPushedBtn] = useState([]);

   // bigBlindActivButtons available to click by user
   const [bigBlindActivButtons, setBigBlindActivButtons] = useState([]);
   // filtered buttons list with combinations
   const [bigBlindActivListButtons, setBigBlindActivListButtons] = useState([]);

   // riseActivButtons available to click by user
   const [riseActivButtons, setRiseActivButtons] = useState([]);
   // filtered by BigBlind and RiseActions, list with buttons combinations,
   const [riseActivListButtons, setRiseActivListButtons] = useState([]);

   // buttons avilable to click as a position Player1
   const [player1PositionsActivButtons, setPlayer1PositionsActivButtons] =
      useState([]);
   // filtered by BigBlind and RiseActions and player1position, list with buttons combinations,
   const [player1PositionsListButtons, setPlayer1PositionsListButtons] =
      useState([]);

   // buttons avilable to click as a position Player2
   const [player2PositionsActivButtons, setPlayer2PositionsActivButtons] =
      useState([]);
   // filtered by BigBlind and RiseActions and player1position and player2position list with buttons combinations,
   const [player2PositionsListButtons, setPlayer2PositionsListButtons] =
      useState([]);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
         return navigate("/login/");
      }
      dispatch(getUser()).then(() => {
         dispatch(getAllCharts(user));
      });
   }, []);

   // set BigBlindActivButtons
   useEffect(() => {
      setBigBlindActivButtons(() => allCharts.map((arr) => arr[0]));
   }, [allCharts]);

   // list with buttons names to render components
   const BigBlindButtonsList = ["100BB", "60BB", "40BB", "30BB", "20BB"];
   const PlayerPostitionsList = ["UTG", "MP", "HJ", "CO", "BTN", "SB", "BB"];
   const PlayersActions = ["RFI", "3bet"];

   // get value and change class in list[0]
   const setBB = (e) => {
      const updatedPushedBtn = [e.target.innerText];

      const activBigBlindList = allCharts.filter(
         (arr) => arr.find((btn) => btn === e.target.innerText) === arr[0]
      );
      dispatch(resetImage());
      setPushedBtn(updatedPushedBtn);
      setBigBlindActivListButtons(activBigBlindList);
      setRiseActivButtons(() => activBigBlindList.map((arr) => arr[1]));
      setPlayer1PositionsActivButtons([]);
      setPlayer2PositionsActivButtons([]);
   };

   // get value and change class in list[1]
   const setRFIor3B = (e) => {
      const updatedPushedBtn = [pushedBtn[0], e.target.innerText];

      let activRiseList = [];
      if (bigBlindActivListButtons.length > 1) {
         activRiseList = bigBlindActivListButtons.filter(
            (arr) => arr.find((btn) => btn === e.target.innerText) === arr[1]
         );
      } else {
         activRiseList = bigBlindActivListButtons;
      }
      dispatch(resetImage());
      setPushedBtn(updatedPushedBtn);
      setRiseActivListButtons(activRiseList);
      setPlayer1PositionsActivButtons(() => activRiseList.map((arr) => arr[2]));
      setPlayer2PositionsActivButtons([]);
   };

   // get value and change class in list[2]
   const postitionPlayer1 = (e) => {
      const updatedPushedBtn = [pushedBtn[0], pushedBtn[1], e.target.innerText];

      let activPlayer1PositionList = [];
      if (riseActivListButtons.length > 1) {
         activPlayer1PositionList = riseActivListButtons.filter(
            (arr) => arr.find((btn) => btn === e.target.innerText) === arr[2]
         );
      } else {
         activPlayer1PositionList = riseActivListButtons;
      }
      dispatch(resetImage());
      setPushedBtn(updatedPushedBtn);
      setPlayer1PositionsListButtons(activPlayer1PositionList);
      setPlayer2PositionsActivButtons(() =>
         activPlayer1PositionList.map((arr) => arr[3])
      );
   };

   // get value and change class in list[3]
   const postitionPlayer2 = (e) => {
      const updatedPushedBtn = [
         pushedBtn[0],
         pushedBtn[1],
         pushedBtn[2],
         e.target.innerText,
         user.subscriber,
      ];
      let activPlayer2PositionList = [];
      if (player1PositionsListButtons.length > 1) {
         activPlayer2PositionList = player1PositionsListButtons.filter((arr) =>
            arr.find((btn) => (btn === e.target.innerText) === arr[3])
         );
      } else {
         activPlayer2PositionList = player1PositionsListButtons;
      }

      setPushedBtn(updatedPushedBtn);
      setPlayer2PositionsListButtons(...activPlayer2PositionList);
      dispatch(getImage(updatedPushedBtn));
      console.log("activPlayer2PositionList", activPlayer2PositionList);
      console.log(
         "player2PositionsListButtons",
         player2PositionsListButtons.slice(4, 6)
      );
   };

   if (user) {
      return (
         <>
            <div className="ContainerBoxNew">
               <div className="AllButtons">
                  {/* Function for render the Big Blinds buttons */}
                  <div className="StackSize">
                     {BigBlindButtonsList.map((btn, idx) => (
                        <BigBlindButtons
                           bigBlindActivButtons={bigBlindActivButtons}
                           btn={btn}
                           idx={idx}
                           pushedBtn={pushedBtn}
                           setBB={setBB}
                        />
                     ))}
                  </div>

                  {/* Render PreFlopActionbuttons */}
                  <div className=" Rfi3Bet ">
                     {PlayersActions.map((btn, idx) => (
                        <ActionsPreFlop
                           riseActivButtons={riseActivButtons}
                           btn={btn}
                           idx={idx}
                           pushedBtn={pushedBtn}
                           setRFIor3B={setRFIor3B}
                        />
                     ))}
                  </div>

                  {/* Function for render player1 Postition */}
                  <div className=" ActionPreFlop">
                     {PlayerPostitionsList.map((btn, idx) => (
                        <Player1PostitionButtons
                           player1PositionsActivButtons={
                              player1PositionsActivButtons
                           }
                           btn={btn}
                           idx={idx}
                           pushedBtn={pushedBtn}
                           postitionPlayer1={postitionPlayer1}
                        />
                     ))}
                  </div>

                  {/* Function for render player2 postition */}
                  <div className="ActionPreFlop ">
                     {PlayerPostitionsList.map((btn, idx) => (
                        <Player2PostitionButtons
                           player2PositionsActivButtons={
                              player2PositionsActivButtons
                           }
                           btn={btn}
                           idx={idx}
                           pushedBtn={pushedBtn}
                           postitionPlayer2={postitionPlayer2}
                        />
                     ))}
                  </div>
               </div>

               {/* display images , if images.images_url display charts else display message*/}
               {images.images_url ? (
                  //  {[...player2PositionsListButtons.slice(4, 6)] ? (

                  <div className=" Charts">
                     {message}
                     {/* compoment to display charts */}
                     {images.images_url.map((image) => (
                        // {player2PositionsListButtons.slice(4, 6).map((image) => (
                        <Image image={image} />
                     ))}
                  </div>
               ) : (
                  <h2 style={{ color: "white" }}>{message}</h2>
               )}
            </div>
         </>
      );
   }
};

export default MainPageNew;
