import React from 'react'
import banner from './banner-img.png'
function HeaderDetails() {
  return (
    <>
<div>
    <div className="single-product-main-content">
     <div className="layout">
       <div className="single-product-page">
         <div className="left">
 <img src={banner}alt="" srcset="" />
         </div>
        
         <div className="right">
         <span className="name">SonicWave Pro" Headphones</span> <br /> 
   <span className="price">$2500</span> <br />
     <span className="desc">
     Elevate your audio experience with our premium headphones on sale. Designed to perfection, they offer high-definition sound and a comfortable fit for extended wear. Seamlessly connect via Bluetooth and enjoy the freedom to move without tangling wires. Intuitive touch controls on the earcups provide easy navigation, while the long-lasting battery ensures hours of playback. Don't miss this chance to own top-notch headphones at an incredible price. Upgrade your listening journey today!
 </span>
  <button  >add to cart</button> 
           
         </div>
       </div>


     </div>
    </div>
     </div>

</>
  )
}

export default HeaderDetails
