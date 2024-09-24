const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");
let array = []
const reverseString =(string)=>{

    let answer = string.split("").reverse().join('')
    todoList.innerHTML=" "
    array.push(answer)
    if (input.value.trim() === "") return alert("Напишите что нибудь");
    array.forEach((item ,index )=>{
        const paragraph = document.createElement("p");
        paragraph.innerText = item;
        paragraph.setAttribute("id", index);
        todoList.append(paragraph)
    })

    input.value= ""
}
createButton.onclick=()=>{
    reverseString(input.value)
}
input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") return reverseString(input.value);
});
