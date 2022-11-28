let triangle = document.querySelector('.triangle');
n = 5
let string = ''
for (let i = 0 ; i < n ; i++){
    for(let j = 0; j<i+1; j++){
string+='  *  ' 
    }
    string+='<p>' + '\n'+ '</p>'
}
triangle.innerHTML = string
trianle.classList.add()