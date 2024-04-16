// sélection des éléments du DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption= document.querySelector(".filter");

// Ajout des événements
todoButton.addEventListener('click', listAdd);
todoList.addEventListener('click',deletecheck);
filterOption.addEventListener('click',filterDo);

// Fonction pour ajouter un élément à la liste
function listAdd(event) {
    event.preventDefault();

    // création de la div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // création de l'élément li
    const newTodo = document.createElement('li');
    newTodo.classList.add('new-item');
    newTodo.innerText = todoInput.value; // correction de l'attribut innerText

    todoDiv.appendChild(newTodo);

    // appel de la fonction de Sauvegarde


    // création du bouton compléter
    const completeButton = document.createElement('button');
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>'; // assurez-vous que cette classe est correctement chargée

    todoDiv.appendChild(completeButton);

    // création du bouton supprimer
    const trashButton = document.createElement('button');
    trashButton.classList.add('supprime');
    trashButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'; // assurez-vous que cette classe est correctement chargée

    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    // libérer le champ après l'entrée des données
    todoInput.value = "";
}

// Processus de suppression et de checking

  function deletecheck(event){
      const idem = event.target;
      if(idem.classList[0]=== 'supprime'){
         idem.parentElement.remove();
      }

      if(idem.classList[0]=== 'complete'){
         const parentIdem = idem.parentElement;
         parentIdem.classList.toggle('completed');

      }
  }

  function filterDo(event){
          const todos = todoList.childNodes;
          todos.forEach(function(todo){

            switch(event.target.value){
                case 'Tout' :
                    break;

                 case 'complete' : 
                 
                 if(todo.classList.contains('complete')){
                    todo.style.display = 'flex';
                 }else{
                    todo.style.display ='none';
                 }
                 break;

                 case 'incomplet':
                    if(!todo.classList.contains('complete')){
                        todo.style.display = 'flex';
                    }else{
                        todo.style.display = 'flex';
                    }
                    break;

            }

          });

          }

          // insertion dans LocalStorage

          

          function savelocaltodo(todo){
            let todos;
            // verifier si ya des enregistremesnt dans la base 
            if(localStorage.getItem('todos')===null){
                 todos =[];
            }
            else{
                todos = Json.parse(localStorage.getItem('todos'));
            }

            todos.push(todo);
            localStorage.setItem('todos' , Json.stringify(todos));
          }

     
    
           
           
  


