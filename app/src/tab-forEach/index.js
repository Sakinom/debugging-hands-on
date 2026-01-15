// Level ☆: for文をforEachに置き換えてください

// ◼︎ 推奨
// コメントアウトされているconsole.log()を必要に応じて活用してください
// 活用することで、どこまでコードが正常に動作しているか確認できます

// ◼︎ 完了条件
// - for文がforEachに置き換えられている
// - タブの切り替え機能が正常に動作する
//   - 初期表示時は最初のタブがアクティブになっている
//   - タブをクリックすると対応するコンテンツが表示される
//   - クリックされたタブがアクティブになる
//   - 上記を繰り返し可能

const tabs = document.querySelectorAll('.tabs li a');
// console.log(tabs)
const contents = document.querySelectorAll('.content');
// console.log(contents)

tabs.forEach(clickedItem => {
  // console.log(clickedItem)
  clickedItem.addEventListener('click', e => {
    // console.log('clicked')
    e.preventDefault();

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
      // console.log(tabs[i].classList)
    };
    clickedItem.classList.add('active');
    // console.log(clickedItem.classList)

    for (let i = 0; i < tabs.length; i++) {
      contents[i].classList.remove('active');
      // console.log(contents[i].classList)
    };
    // console.log(clickedItem.dataset.id)
    // console.log(document.getElementById(clickedItem.dataset.id))
    document.getElementById(clickedItem.dataset.id).classList.add('active');
  });
});
