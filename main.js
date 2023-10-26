fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => {
  userInfo(res)
});


function userInfo(userInfo) {
  const root = document.querySelector("#root");
  
  let userInfoData = "";

  userInfo.forEach(value => {
   userInfoData += htmlCode(value)
  })
  root.innerHTML = userInfoData;
   
};


function htmlCode(info) {
  const {name,email,website } = info;
  const html = `
    <div class="user">
       <p>${name}</p>
       <p>${email}</p>
       <p>${website}</p>
    </div>
  `;

  return html;
}

