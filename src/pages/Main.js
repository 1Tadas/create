import React from 'react';



export default function Main() {

  const showPicture = () => {
  var sourceOfPicture = "https://assets.codepen.io/5313250/tadascvnew.pdf";
  var img = document.getElementById('bigpic')
  img.src = sourceOfPicture.replace('300x300', '225x225');
  img.style.display = "block";
} 


 
  return (
    <>
<header class="bg-white w-full h-12 flex justify-center items-center shadow-sm fixed z-50">
<img class="w-16" src="https://raw.githubusercontent.com/1Tadas/img/5b3c8363ebc7293696a0c44826d51378b2738d1b/tklogo.svg" alt=""></img>
</header>
<div class="bg-green-400 w-screen h-screen">

  </div>

    </>
  );
};

