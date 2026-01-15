// Level ☆: for文をforEachに置き換えてください
const tabs = document.querySelectorAll('.tabs li a');
const contents = document.querySelectorAll('.content');

tabs.forEach(clickedItem => {
  clickedItem.addEventListener('click', e => {
    e.preventDefault();

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    };
    clickedItem.classList.add('active');

    for (let i = 0; i < tabs.length; i++) {
      contents[i].classList.remove('active');
    };
    document.getElementById(clickedItem.dataset.id).classList.add('active');
  });
});
