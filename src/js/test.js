
function creatEle(){
  let ele = document.createElement('div');
  ele.innerText = '123';
  ele.classList.add('test');
  document.body.appendChild(ele);
}

creatEle();