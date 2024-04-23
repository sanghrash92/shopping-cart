import '../components/style/homepage.css';
import { useEffect, useState } from 'react';

function Homepage() {
  const [photos, setPhotos] = useState([]);

  const fetchDetails = async () => {
    const data = await fetch(
      'https://api.unsplash.com/search/photos/?client_id=FfSo8e9t5A7cYLWFbchPmsvKSPAIvGXvW9RBU9k3w5o&page=5&query=fashion&per_page=6'
    );
    const result = await data.json();
    setPhotos(result.results);
    console.log(photos)
  }

  useEffect(() => {
    fetchDetails()
  }, []);

  return (
    <div className="homepage">
      <h2>Home</h2>
      <div className='photos'>
          {photos.map((photo) => {
            return (
              <div className="photo" key={photo.id}>
                <img src={photo.urls.regular} alt={photo.description} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Homepage