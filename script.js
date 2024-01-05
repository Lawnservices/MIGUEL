const canviar = document.getElementById('titulo');
const acanbie = document.getElementById('corte');

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 300){
    titulo.style.backgroundColor = '#003349';

  } else{
    titulo.style.backgroundColor = '#333';
  }
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 800){
     corte.style.display = 'none';
    
  } else{
     corte.style.display = 'block';
  }
})