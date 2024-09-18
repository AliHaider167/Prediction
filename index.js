let input = ['input1', 'input2', 'input3', 'input4'];
let array = [];

let button = document.querySelector('.animated-button');

button.addEventListener('click', ()=>{

  let sum =0;

  for(let i = 0; i < 4; i++) {

    let inputValue = document.querySelector(`.${input[i]}`).value;
    console.log(inputValue);
    if(inputValue !== '') {
      array[i] = inputValue;
    }
  }

  for(let i=0 ; i<4 ; i++)
  {
    document.querySelector(`.${input[i]}`).value = '';
    sum += Number(array[i]);
  }

  console.log(sum);
  console.log(array.length);
  document.querySelector('.output').value=(sum/array.length).toFixed(3);
})

