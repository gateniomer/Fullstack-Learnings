//Item controller
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
      {id:0, name:'Corn', calories: 100},
      {id:1, name:'Salmon', calories: 300},
      {id:2, name:'Eggs', calories: 200}
    ],
    currentItem: null,
    totalCalories: 0
  }

  //Public methods
  return {
    getItems: function(){ return data.items },
    logData: function(){ return data; }
  }
})();

//UI controller
const UICtrl = (function(){

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
      document.querySelector('#item-list').innerHTML = html;
    }
  }
})();

//App controller
const App = (function(ItemCtrl,UICtrl){

  //Public methods
  return{
    init: function(){

      //Fetch items from data structure
      const items = ItemCtrl.getItems();

      //Populate list with items
      UICtrl.populateItemList(items);
    }
  }
})(ItemCtrl,UICtrl);

App.init();