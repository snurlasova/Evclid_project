const searchOpen = document.querySelector('.search-btn');
const search = document.querySelector('.search-form');
const searchClose = document.querySelector('.search-close');

searchOpen.addEventListener('click', function() {
    search.classList.add('search__show')
});

searchClose.addEventListener('click', function(){
    search.classList.remove('search__show')
});
