const wrapper = document.getElementById('page__video')
const card = document.querySelector('.card-body')
const scanner = new Instascan.Scanner({ video: wrapper });

Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    console.error('No cameras found.');
  }
}).catch(function (e) {
  console.error(e);
});

scanner.addListener('scan', function (content) {
  const data = JSON.parse(content)
  wrapper.style.display = 'none'
  card.classList.remove('scanning')
  card.innerHTML = '' +
    '<div class="page__name">Welcome, '+ data.name +'.</div>' + 
    '<div class="page__date">Attend on : '+ data.date +'</div>'
    '<div class="page__location">Your Position : '+ data.location +'</div>'
});