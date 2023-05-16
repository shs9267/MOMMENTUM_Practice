const toDoForm =document.getElementById("todo-form");
const toDoInput= document.querySelector("#todo-form input");
const toDoList =document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//JSON.stringify는 object나 array또는 어떤 코드도 다 문자로 만들어줌
}//localstorage에 아이템을 넣는 함수

function deleteToDo(event){
    const li = event.target.parentElement; //target은 클린된 HTML Element
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
} //(event)를 넣음으로써 클릭이 어디서 일어나는지 알 수 있게 됨

function paintToDo(newTodo){
    const li = document.createElement("li"); //const 뒤의 li는 아무 이름이나 상관없지만 createElement 뒤의 "li"는 무조건 li여야만 함
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = " X ";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li 안에 span을 추가함
    li.appendChild(button); //append는 항상 마지막에 있어야함
    toDoList.appendChild(li); //html의 todo-list안에 li를 넣음
}//이 function은 toDo를 그리는 역할을 담당 newToDo는 text가 될거임

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //작성 후 칸을 비움
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }; //array의 항목에 각각의 id를 추가해줌
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //array로 바꿈 각각에 있는 것을 item에 대해 function을 실행할 수 있게 해줌
    toDos = parsedToDos; //toDos에 전에 있던 toDo들을 복원하는 작업
    parsedToDos.forEach(paintToDo); //array의 각 item에 대해 하나의 function을 실행할 수 있음
}//만약 saveToDos가 localStorage에 존재한다면

 //(item) => console.log("this is the turn of", item)는 function 함수와 같은 역할을 함 =>(arrow function)
