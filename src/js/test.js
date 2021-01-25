
function creatEle(){
  let ele = document.createElement('div');
  ele.innerText = '123';
  ele.classList.add('test');
  ele.addEventListener('click', () => {
    console.log(123);
    new Promise((resolve) => {
      console.log('click event');
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(res => console.log('click event resolved!'));
  });
  document.body.appendChild(ele);
} 

creatEle();