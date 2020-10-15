"use strict";
{
  // ナビゲーションのリンクを指定
  const navLink = document.querySelectorAll("#nav li a");
  // console.log(navLink);
  // #header の高さを取得
  const headerHeight = document.getElementById("header").clientHeight;

  // 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
  const contentsArr = new Array();
  // console.log(navLink.length);
  for (let i = 0; i < navLink.length; i++) {
    // コンテンツのIDを取得
    const targetId = navLink[i].hash;

    // ページ内リンクでないナビゲーションが含まれている場合は除外する
    if (targetId.charAt(0) == "#") {
      const target_no_hash = targetId.slice(1);
      const clientRect = document.getElementById(target_no_hash).getBoundingClientRect();
      // ページ上部からコンテンツの開始位置までの距離を取得
      const targetContentsTop = window.pageYOffset + clientRect.top ;
      // ページ上部からコンテンツの終了位置までの距離を取得
      const targetContentsBottom = window.pageYOffset + clientRect.bottom - 1 ;
      // 配列に格納
      contentsArr[i] = [targetContentsTop, targetContentsBottom];
    }
  }

  // 現在地をチェックする
  function currentCheck() {
    // 現在のスクロール位置を取得
    const windowScrolltop = window.pageYOffset;
    for (let i = 0; i < contentsArr.length; i++) {
    // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
      if (
        contentsArr[i][0] <= windowScrolltop + headerHeight &&
        contentsArr[i][1] >= windowScrolltop + headerHeight
      ) {
        // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
        navLink[i].classList.add('current');
      } else {
        for (let j = i; j < contentsArr.length; j++) {
          navLink[j].classList.remove('current');

        }

      }
    }
  }

  // ページ読み込み時とスクロール時に、現在地をチェックする
  window.onscroll = function () {
    currentCheck();
  }
  window.onload = function () {
    currentCheck();
  }



}
