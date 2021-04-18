const btns = document.querySelector('#btns');
const screen = document.querySelector('#screen');

const indicator = {
  a: '',
  b: '',
  operator: ''
};

lbls.forEach(function(lbl){
  const button = document.createElement('button');
  button.innerHTML = lbl.name;
  
  switch(lbl.type){
    case 'chr':
      button.addEventListener('click', () => {
        if(screen.innerHTML.length < 18){
          screen.innerHTML += lbl.name;
        }
      });
      break;
      
    case 'clr':
      button.addEventListener('click', () => {
        screen.innerHTML = '';
        indicator.a = indicator.b = indicator.operator = '';
      })
      break;
      
    case 'del':
      button.addEventListener('click', () => {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
      });
      break;
      
    case 'sgn':
      calF(lbl);
    break;
      
    default:
      console.log(`type ${lbl.type} is undefined`);
  }
  
  function calF(lbl){
    switch(lbl.sign){
      case 'plus':
        button.addEventListener('click', () => {
          indicator.a = screen.innerHTML;
          indicator.operator = lbl.sign;
          screen.innerHTML = '';
        });
        break;
        
      case 'equal':
        button.addEventListener('click', () => {
          console.log(indicator);
        });
        break;
        
      default:
        console.log(`${ lbl.sign } sign is undefined`);
    }
  }
  
  btns.appendChild(button);
});