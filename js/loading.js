document.addEventListener('DOMContentLoaded', function() {
    // 2.5秒待ってからドア開きアニメーション開始
    setTimeout(function() {
      var loading5 = document.getElementById('loading5');
      var overlay = document.getElementById('loading5-overlay');
      overlay.classList.add('opened');
  
      // ドア開きアニメーション(transition: 1s)終了後、さらに1秒待ってから非表示
      setTimeout(function(){
        overlay.style.display = 'none';
        loading5.style.display = 'none';
    }, 600);

}, 1000);
});