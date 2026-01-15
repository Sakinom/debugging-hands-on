// Level ☆☆
// ハンバーガーメニューの開閉アニメーションが正常に動作するように修正してください

// ◼︎ 推奨
// コメントアウトされているconsole.log()を必要に応じて活用してください
// 活用することで、どこまでコードが正常に動作しているか確認できます

// ◼︎ 完了条件
// - 初期表示時はメニューが閉じている
// - ハンバーガーボタンをクリックするとメニューが開く
// - ハンバーガーボタンを再度クリックするとメニューが閉じる

const menu = document.querySelector('.header-menu')
// console.log(menu)
const btn = document.querySelector('#hamburger')
// console.log(btn)

btn.addEventListener('click', () => {
  // console.log('clicked')
  btn.classList.remove('open')
  // console.log(btn.classList.contains("open"))
  menu.classList.toggle('open')
  // console.log(menu.classList.contains("open"))
  if (menu.classList.contains("open")) {
    // console.log('menu is open')
    menu.style.height = menu.scrollHeight + 'px'
  }else{
    // console.log('menu is closed')
    menu.height = "0"
  }
  // console.log(menu.style.height)
})

// ヒント!
// 修正箇所は3箇所あります
