import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImage } from '../features/images/imagesSlice';
import { toast } from "react-toastify";
import Image from '../components/Image';
import Spinner from '../components/Spinner';

const MainPage = () => {
  const { images, isLoading, isError, message } = useSelector(
    (state) => state.images
  );
 
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    
    dispatch(getImage());
  }, [dispatch, isError, message]);

  if (isLoading) {
		return <Spinner />;
	}

  return (
    <>
      <div className="ver1AppBox">
          <div className="RangeViewerComponentbox">
            <div>
              <button className="btnUnActiv"> 100bb </button>
              <button className='btnUnActiv'> 60bb </button>
              <button className='btnUnActiv'> 40bb </button>
              <button className='btnUnActiv'> 30bb </button>
              <button className='btnUnActiv'> 20bb </button>
            </div>
          </div>

          <div className="RangeViewerComponentPreflopAction">
            <div className="RangeViewerComponentPreflopActionAction">
              <button className='btnUnActiv'> RFI </button>
              <button className='btnUnActiv'> 3bet </button>
            </div>

            <div className="RangeViewerComponentPreflopActionPlayer">
              <button className='btnUnActiv'>UTG</button>
              <button className='btnUnActiv'>MP</button>
              <button className='btnUnActiv'>HJ</button>
              <button className='btnUnActiv'>CO</button>
              <button className='btnUnActiv'>BTN</button>
              <button className='btnUnActiv'>SB</button>
              <button disabled="" className='btnUnActiv'>BB</button>
            </div>

            <div className="RangeViewerComponentPreflopActionPlayer">
              <button className='btnUnActiv'>UTG</button>
              <button className='btnUnActiv'>MP</button>
              <button className='btnUnActiv'>HJ</button>
              <button className='btnUnActiv'>CO</button>
              <button className='btnUnActiv'>BTN</button>
              <button className='btnUnActiv'>SB</button>
              <button className='btnUnActiv'>BB</button>
            </div>
          </div>

          <div className="RangeViewerComponentRanges"><div>
            <div className='titleRange'> Title Range 1</div>
              <div className="RangeViewerComponentRangesRange">
                <img src={images} alt="Logo" className="rangeManual"/>
              </div>
            </div>
            
          <div>
          <div className='titleRange'> Title Range 2</div>
            <div className="RangeViewerComponentRangesRange">
              <img src={images} alt="Logo" className="rangeManual"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
