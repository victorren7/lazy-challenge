
//Overall: I feel good with the end result of this challenge but I also feel like I maybe oversimplified it.
// If I did oversimplify it I am more than happy to get my hands diry on the challenge.

import React, { useState } from 'react';
import './App.css';

function App() {
  
  // Added state so I can set it to know if image has been loaded
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App">
      {/* Wrapped the thmbnail around a conditional that will only show it if the other image isn't loaded */}
      {!isLoaded &&
        <img
        width='500'
        // Added absolute position on both images, so that they noth don't show up in different sections of the page. In a bigger component this wouldn't be sufficient and would need more styling
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
