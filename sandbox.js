const addForm=document.querySelector('.add');
const List=document.querySelector('.todos');
const search=document.querySelector('.search input');

const generateHtml= todo =>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <i class="fa-solid fa-trash delete"></i>
    </li>
    `;
    // List.innerHTML(List.prepend(html));
    // const c=List.innerHTML;
    // List.innerHTML =html;
    // List.innerHTML+=c;
    List.insertAdjacentHTML('afterbegin', html);
};

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    if(todo.length)
    generateHtml(todo);
    addForm.add.value='';
});

List.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});

const filterTodos=(term)=>{
    // console.log(term);
    Array.from(List.children)
    .filter((todo)=>{
        return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
        todo.classList.add('filtered')
    })

    Array.from(List.children)
    .filter((todo)=>{
        return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
        todo.classList.remove('filtered')
    })
    
};

search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    filterTodos(term);
}); 