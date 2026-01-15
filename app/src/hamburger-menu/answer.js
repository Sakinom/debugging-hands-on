// ハンバーガーメニューを開いた時のメニュー内容を取得
const menu = document.querySelector('#header-menu')
// ハンバーガーメニューボタンの要素を取得
const btn = document.querySelector('#hamburger')

// ハンバーガーメニューボタンがクリックされたときの処理
btn.addEventListener('click', () => {
  // ボタンに'open'クラスをクリックするたびに追加と削除を交互に行う
  btn.classList.toggle('open')
  // メニューに'open'クラスをクリックするたびに追加と削除を交互に行う
  menu.classList.toggle('open')
  // クラス名に'open'が含まれているかを確認 (= ハンバーガーメニューが開いているかどうかの確認)
  if(menu.classList.contains("open")){
    // メニューが開いていれば高さを内容の高さに設定
    menu.style.height = menu.scrollHeight + 'px'
  }else{
    // メニューが閉じていれば高さを0に設定する
    menu.style.height = "0"
  }
})
