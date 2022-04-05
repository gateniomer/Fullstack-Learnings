//***********Item controller***********

const ItemCtrl = (function(){
  //Item contructer
  const item = function(id,name,calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //Data Structure / State
  const data ={
    items:[
      // {id:0, name:'Corn', calories: 100},
      // {id:1, name:'Salmon', calories: 300},
      // {id:2, name:'Eggs', calories: 200}
    ],
    currentItem: null,
    totalCalories: 0
  }

  //Public methods
  return {
    getItems: function(){ return data.items },
    addItem: function(name,calories){
      let ID;

      //Create id
      if(data.items.length > 0){
        ID = data.items[data.items.length-1].id +1;
      } else{
        ID=0;
      }

      //Calories to number
      calories = parseInt(calories);

      //Create item
      newItem = new item(ID,name,calories);

      //Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function(id){
      let found =  null;
      //Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){return data.currentItem},
    getTotalCalories: function(){
      let total = 0;

      //Loop through items and add their cal
      data.items.forEach(function(item){
        total += item.calories;
      });

      //Set total calories
      data.totalCalories = total;

      //Return total
      return data.totalCalories;
    },
    logData: function(){ return data; }
  }
})();

//***********UI controller***********

const UICtrl = (function(){

  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn'
  }

  //Public methods
  return{
    populateItemList: function(items){
      let html ='';
      items.forEach(function(item){
        html += `
        <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>
        `;
      });

      //Insert to UI
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      //Show the UI list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      //Create li elemnt
      const li = document.createElement('li');
      //Add class
      li.className = 'collection-item';
      //Add ID
      li.id = `item-${item.id}`;
      //Add HTML
      li.innerHTML = `
      <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      //Insert Item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display= 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display= 'none';
      document.querySelector(UISelectors.deleteBtn).style.display= 'none';
      document.querySelector(UISelectors.backBtn).style.display= 'none';
      document.querySelector(UISelectors.addBtn).style.display= 'inline';
    },
    showEditState(){
      document.querySelector(UISelectors.updateBtn).style.display= 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display= 'inline';
      document.querySelector(UISelectors.backBtn).style.display= 'inline';
      document.querySelector(UISelectors.addBtn).style.display= 'none';
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();

//***********App controller***********

const App = (function(ItemCtrl,UICtrl){

  //Load event listeners
  const loadEventListeners = function(){
    //Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    //Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);

    //Edit icon clicl event
    document.querySelector(UISelectors.itemList).addEventListener('click',itemEditClick);
  };

  //Add item submit
  const itemAddSubmit = function(e){
    //Get form input from ui controller
    const input = UICtrl.getItemInput();
    
    //Check for blank
    if(input.name !== '' && input.calories !== ''){
      //Add item
      const newItem = ItemCtrl.addItem(input.name,input.calories);

      //Add item to UI
      UICtrl.addListItem(newItem);

      //Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      //Clear input fields
      UICtrl.clearInput();
    }
    

    e.preventDefault();
  };
  
  //Click edit item
  const itemEditClick = function(e){
    if(e.target.classList.contains('edit-item')){
      //Get list item id
      const listId = e.target.parentNode.parentNode.id;
      
      //Break into array
      const listIdArray = listId.split('-');

      //Get the actual Id
      const id = parseInt(listIdArray[1]);

      //Get Item
      const itemToEdit = ItemCtrl.getItemById(id);

      //Set Current Item
      ItemCtrl.setCurrentItem(itemToEdit);

      //Add item to form
      UICtrl.addItemToForm();

      console.log(itemToEdit);
    }
    e.preventDefault();
  };
 
  //Public methods
  return{
    init: function(){
      //Clear edit state / set initial state
      UICtrl.clearEditState();

      //Fetch items from data structure
      const items = ItemCtrl.getItems();

      //Check if any items 
      if(items.length === 0){
        UICtrl.hideList();
      }else{
        //Populate list with items
        UICtrl.populateItemList(items);
      }

      //Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      //Load event listeners
      loadEventListeners();
    }
  }
})(ItemCtrl,UICtrl);

App.init();