import React, { useState } from 'react';
import './App.css';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App">
      {!isLoaded &&
        <img
          width='500'
          style={{position: 'absolute'}}
          src="https://urldefense.com/v3/__https:/forge-homework.s3.amazonaws.com/thumb.jpg__;!!KLCbKzk!2X9AQ7upNKFRgbu3u9eVA5PMYwFE_pebGqKAdBdCp3K7aNksynsOv6oJ8VkY7phs$"
        >
        </img>
      }
        <img
          width='500'
          style={{position: 'absolute'}}
          onLoad={() => setIsLoaded(true)}
          loading='lazy'
          src='https://urldefense.com/v3/__https:/forge-homework.s3.amazonaws.com/fullsize.jpg__;!!KLCbKzk!2X9AQ7upNKFRgbu3u9eVA5PMYwFE_pebGqKAdBdCp3K7aNksynsOv6oJ8VdeJfC7$'
          />
    </div>
  );
}

export default App;
