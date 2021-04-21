const btns = document.querySelector('#btns');
const screen = document.querySelector('#screen');

const initialState = {
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
        clear();
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
    
    case 'negative':
      button.addEventListener('click', () => {
        screen.innerHTML = (-1 * parseFloat(screen.innerHTML)).toString();
      });
      break;
     
    case 'percentage':
      button.addEventListener('click', () => {
        screen.innerHTML = (parseFloat(screen.innerHTML) / 100).toString();
      });
      break;
      
    default:
      console.log(`type ${lbl.type} is undefined`);
  }
  
  function calF(lbl){
    switch(lbl.sign){
      case 'equal':
        button.addEventListener('click', () => {
          initialState.b = screen.innerHTML;
          screen.innerHTML = cal();
          Object.keys(initialState).forEach(key => {
            initialState[key] = '';
          });
        });
        break;
        
      default:
        button.addEventListener('click', () => {
          if(initialState.a === ''){
            initialState.a = screen.innerHTML;
            initialState.operator = lbl.sign;
            screen.innerHTML = '';
          }else{
            initialState.b = screen.innerHTML;
            initialState.a = cal();
            initialState.operator = lbl.sign;
            screen.innerHTML = '';
          }
        });
    }
  }
  
  btns.appendChild(button);
});

function clear(){
  screen.innerHTML = '';
  Object.keys(initialState).forEach(key => {
    initialState[key] = ''
  });
  
}

function cal(){
  switch(initialState.operator){
    case 'plus':
      return (parseFloat(initialState.a) + parseFloat(initialState.b)).toString();
      break;
        
    case 'minus':
      return (parseFloat(initialState.a) - parseFloat(initialState.b)).toString();
      break;
      
    case 'multiply':
      return (parseFloat(initialState.a) * parseFloat(initialState.b)).toString();
      break;
      
    case 'divide':
      return (parseFloat(initialState.a) / parseFloat(initialState.b)).toString();
      break;
      
    default:
      console.log(`${ initialState.operator } operator is undefined`);
  }
}