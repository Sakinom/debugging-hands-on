const tabs = document.querySelectorAll('.tabs li a');
const contents = document.querySelectorAll('.content');

tabs.forEach(clickedItem => {
  clickedItem.addEventListener('click', e => {
    e.preventDefault();

    tabs.forEach(item => {
      item.classList.remove('active');
    });
    clickedItem.classList.add('active');

    contents.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(clickedItem.dataset.id).classList.add('active');
  });
});
