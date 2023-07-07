let input1 = document.getElementById('box1');
let input2 = document.getElementById('box2');
let btn = document.getElementById('btn');

btn.onclick = () =>{
    let inp = input1.value;
    input1.value = input2.value;
    input2.value = inp
}

let input3 = document.getElementById('box3');
let btn2 = document.getElementById('btn2');
let con = document.getElementById('con');
btn2.onclick = () =>{
    con.style.backgroundColor = input3.value
}
