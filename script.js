function changeCategory(category) {
  var menuItems = document.querySelectorAll('#menu .col');
  switch (category) {
    case 'features':
      filterItems(menuItems, 'features');
      break;
    case 'promotion':
      filterItems(menuItems, 'promotion');
      break;
    case 'top-seller':
      filterItems(menuItems, 'top-seller');
      break;
    case 'top-rated':
      // Simulating top-rated items
      filterItems(menuItems, 'top-rated');
      break;
    case 'all':
      showAllItems(menuItems);
      break;
    default:
      break;
  }
}

function filterItems(menuItems, idName) {
  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].classList.contains(idName)) {
      menuItems[i].style.display = 'block';
    } else {
      menuItems[i].style.display = 'none';
    }
  }
}

function showAllItems(menuItems) {
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = 'block';
  }
}

function changeMenuInfo(modalId, contentTopic) {
  var modalBody = document.getElementById(modalId);
  //console.log(modalBody);
  if (contentTopic == 'cheeseburger') {
    const el = document.getElementById("exampleModalLabel");
    el.innerText = "Bacon Cheese Burger";
  }
}

var $orders = [];
var $order = [];
var $bread = [];
var $meat = [];
var $vegetables = [];
var $topping = [];
var $sauce = [];
$(document).ready(function () {

  $('#order').click(function () {
    var datas = document.querySelectorAll('#bread input[type="radio"]');
    datas.forEach(data => {
      if (data.checked) {
        // If checked, push its value to the checkedValues array
        $bread.push(data.value);
      }
    });
    $order.push($bread);

    var datas = document.querySelectorAll('#meat input[type="radio"]');
    datas.forEach(data => {
      if (data.checked) {
        // If checked, push its value to the checkedValues array
        $meat.push(data.value);
      }
    });
    $order.push($meat);

    var datas = document.querySelectorAll('#topping input[type="checkbox"]');
    datas.forEach(data => {
      if (data.checked) {
        // If checked, push its value to the checkedValues array
        if (data.value == 'doublecheese') {
          $topping.push('cheese');
          $topping.push('cheese');
        } else {
          $topping.push(data.value);
        }
      }
    });
    $order.push($topping);

    var datas = document.querySelectorAll('#vegetable input[type="checkbox"]');
    datas.forEach(data => {
      if (data.checked) {
        // If checked, push its value to the checkedValues array
        $vegetables.push(data.value);
      }
    });
    $order.push($vegetables);

    var datas = document.querySelectorAll('#sauce input[type="checkbox"]');
    datas.forEach(data => {
      if (data.checked) {
        // If checked, push its value to the checkedValues array
        $sauce.push(data.value);
      }
    });
    $order.push($sauce);

    $orders.push($order);
    $order = [];
    $meat = [];
    $bread = [];
    $vegetables = [];
    $topping = [];
    $sauce = [];
    $('#exampleModal').modal('hide');
    ListOrders();
  });
});


const data = {
  bread: "$value[0]",
  meat: "$value[1]",
  topping: "$value[2]",
  vegetable: "$value[3]",
  sauce: "$value[4]"
};
// Send data to PHP script using AJAX
fetch('insert_data.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(data)
}).then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
  .then(data => {
    console.log('Response from PHP:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function ListOrders() {
  var orders = $orders.toString();
  alert(orders);
  var container = document.getElementById("list-order");
  count = 0;
  orders.forEach(function (order) {
    var box = document.createElement("div");
    box.className = "row bg-danger";
    element = order;
    container.appendChild(element);
  });
}