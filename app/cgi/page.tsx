'use client'

import Navbar from '@/components/navbar';
import Masonry from 'react-masonry-css';

const videos = [
  "/images/bahamas.mp4",
  "/images/budweise.mp4",
  "/images/media.mp4",
  "/images/boatcgi.mp4",
  "/images/ganga.mp4",
  "/images/manforce.mp4",
];



const MyMasonryComponent = () => {
  return (
    <div>
        <Navbar/>
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text 
             bg-gray-100">
                    <span className="text-yellow-custom">Checkout our </span>
                    <br />
                    Amazing CGI Work by tapping ON!!
                </div>
    
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Include Navbar if it's required */}
        
        {videos.slice(0, 6).map((video, index) => (
  <div key={index} style={{ width: 'calc(33.33% - 20px)', margin: '10px' }}>
    <video controls width="100%" height="auto" className="object-cover w-full h-full">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
))}

    </div>
    </div>
  );
};

export default MyMasonryComponent;


