export default function showPicture() {
  var sourceOfPicture = "http://img.tesco.com/Groceries/pi/118/5000175411118/IDShot_90x90.jpg";
  var img = document.getElementById('bigpic')
  img.src = sourceOfPicture.replace('90x90', '225x225');
  img.style.display = "block";
} 