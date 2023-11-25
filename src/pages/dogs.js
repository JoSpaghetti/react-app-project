import { useEffect, useState } from 'react';

const dogImageURL = "https://dog.ceo/api/breeds/image/random";
function Idea () {
  const [image, setImage] = useState([]);
  
  const fetchImage = async() => {
    fetch(dogImageURL)
    .then((response) => response.json())
    .then((json) => {
      setImage(json);
    })
  }
    
    useEffect(() => {
      fetchImage()
    }, [])
  
  return (
    <img src={image.message} width = "400"></img>
  )
}

const Dogs = () => {
    return (
        <>
        <div>
            <h1>Dog Images</h1>
        </div>

        <div>
            <Idea />
        </div>
        </>
    )
    ;
  };
  
  export default Dogs;

  
  