//method 1
window.addEventListener("keydown", (e) => {
  const insert = document.getElementById("insert");
  //Visit this site
  //toptal.com/developers/keycode

  insert.innerHTML = `
      <div class="key">
         ${e.key === ' ' ? 'Space' : e.key}
        <small>e.key</small>
        </div>
       <div class="key">
          ${e.keyCode}
     <small>e.keyCode</small>
        </div>
      <div class="key">
        ${e.code}
      <small>e.code</small>
</div>
    `;
});
