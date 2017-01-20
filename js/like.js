function star(){
  var like = document.getElementById('star');
  if(like.className=='contenido__item__votacion__fav icon-star-empty'){
    like.classList.add('icon-star-full');
    like.classList.remove('icon-star-empty');
  }else{
    like.classList.add('icon-star-empty');
    like.classList.remove('icon-star-full');
  }
}
