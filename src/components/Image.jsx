import React from 'react'

const Image = ({images}) => {
  console.log(images)
  return (
    <div>
    <div className='titleRange'> Chart 1</div>
    <div className="RangeViewerComponentRangesRange">
      <img src={images.image_url_1} alt="Logo1" className="rangeManual"/>
    </div>
  </div>
  )
}

export default Image