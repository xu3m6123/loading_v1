'use strict';

$(document).ready(function () {

    // Load JSON file
    let bmc = document.querySelector('#bm');
    let openingAnimData = {
      container: bmc,
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      // path: 'json/download-icon.json'
      path: 'https://assets8.lottiefiles.com/packages/lf20_tQSHu2.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
    openingAnim.setSpeed(1);
   
    
});