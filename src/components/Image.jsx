import React from 'react'

const Image = ({images}) => {
  console.log(images)
  return (
    <div>Image
        <img src={images.image_url} alt="test1"/>
    </div>
  )
}

export default Image