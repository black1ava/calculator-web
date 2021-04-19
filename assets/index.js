const btns = document.querySelector('#btns');
const screen = document.querySelector('#screen');

const initialState = {
  a: '',
  b: '',
  operator: '',
  state: ''
};

lbls.forEach(function(lbl){
  const button = document.createElement('button');
  button.innerHTML = lbl.name;
  
  switch(lbl.type){
    case 'chr':
      button.addEventListener('click', () => {
        
        if(initialState.state === 'done'){
          clear();
        }
        
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
        screen.innerHTML = (-1 * parseInt(screen.innerHTML)).toString();
      });
      break;
     
    case 'percentage':
      button.addEventListener('click', () => {
        screen.innerHTML = (parseInt(screen.innerHTML) / 100).toString();
      });
      break;
      
    default:
      console.log(`type ${lbl.type} is undefined`);
  }
  
  function calF(lbl){
    switch(lbl.sign){
      case 'equal':
        button.addEventListener('click', () => {
          cal();
        });
        break;
        
      default:
        button.addEventListener('click', () => {
         initialState.a = screen.innerHTML;
          initialState.operator = lbl.sign;
          screen.innerHTML = '';
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
      initialState.b = screen.innerHTML;
      screen.innerHTML = (parseFloat(initialState.a) + parseFloat(initialState.b)).toString();
      initialState.state = 'done';
      break;
        
    case 'minus':
      initialState.b = screen.innerHTML;
      screen.innerHTML = (parseFloat(initialState.a) - parseFloat(initialState.b)).toString();
      initialState.state = 'done';
      break;
      
    case 'multiply':
      initialState.b = screen.innerHTML;
      screen.innerHTML = (parseFloat(initialState.a) * parseFloat(initialState.b)).toString();
      initialState.state = 'done';
      break;
      
    case 'divide':
      initialState.b = screen.innerHTML;
      screen.innerHTML = (parseFloat(initialState.a) / parseFloat(initialState.b)).toString();
      initialState.state = 'done';
      break;
      
    default:
      console.log(`${ initialState.operator } operator is undefined`);
  }
}