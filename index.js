// Get a reference to the table


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);  
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css';
link2.integrity = 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T';
link2.crossOrigin = 'anonymous';
document.head.appendChild(link2);

// create a new link element
const link = document.createElement('link');
// set the rel and href attributes to the URL of the CSS file
link.rel = 'stylesheet';
link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css';

// append the link element to the document's head
document.head.appendChild(link);


const link4 = document.createElement('link');
link4.rel = 'stylesheet';
link4.type = 'text/css';
link4.href = 'index.css';
document.head.appendChild(link4);



// create a new script element
const script1 = document.createElement('script');

// set the source attribute to the URL of the CDN script
script1.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js';

// append the script element to the document's head
document.head.appendChild(script1);
function ZTdropdown(categories){
  $(document).ready(() => {

    var table = document.getElementById("tabledata");
    // Insert a new row at the end of the table
    var newRow = table.insertRow();
    for (var i = 0; i < categories.length; i++) {
      var category = categories[i];
  
      // Create a new row
      var newRow = table.insertRow();
  
      // Create cells for the id and name properties
      var idCell = newRow.insertCell();
      var nameCell = newRow.insertCell();
      var dataCell = newRow.insertCell();
  
      // Set the cell values
      idCell.innerHTML = category.id;
      nameCell.innerHTML = category.name;
      dataCell.setAttribute("id", "list");
      dataCell.setAttribute("class", "container");
  
      var dropdownSelect = document.createElement("div");
      dropdownSelect.setAttribute("class", "dropdown");
      var btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btn btn-secondary dropdown-toggle");
      btn.setAttribute("id", "dropdownMenuButton");
      btn.setAttribute("data-toggle", "dropdown");
      btn.setAttribute("aria-haspopup", "true");
      btn.setAttribute("aria-expanded", "false");
      btn.innerHTML = "<span id='count-display'>Select Template</span> <span class='caret'></span>";
  
  
      var dropdownMenu = document.createElement("form");
      dropdownMenu.style.width = "100%";
      dropdownMenu.style.height = "auto";
  
      dropdownMenu.setAttribute("class", "dropdown-menu");
      dropdownMenu.setAttribute("aria-labelledby", "dropdownMenuButton");
  
      // Serachbar
      // Create the input element
      var inputt = document.createElement("input");
      inputt.setAttribute("id", "myInput");
      inputt.setAttribute("type", "text");
      inputt.setAttribute("onkeyup", "myFunction()");
      inputt.setAttribute("aria-haspopup", "true");
      inputt.setAttribute("aria-expanded", "false");
      inputt.innerHTML = "Dropdown button";
      inputt.setAttribute("placeholder", "Serach for name...");
      dropdownMenu.appendChild(inputt);
      //  end
  
      var main = document.createElement("div");
      main.setAttribute("class","container")
  
  //    main row
      var rowDiv = document.createElement("div");
      rowDiv.setAttribute("class", "row");
  
      // col sm-4
      var col1Div = document.createElement("div");
      col1Div.setAttribute("class", "col-4");
  
      // col sm-0
      var col3Div = document.createElement("div");
      col3Div.setAttribute("class", "col-0");
      var line = document.createElement("div");
      line.setAttribute("class", "vl22");
      col3Div.appendChild(line);
  
      // col sm-7
      var col2Div = document.createElement("div");
      col2Div.setAttribute("class", "col-7");
  
  // create div for line
      var col5Div = document.createElement("div");
      col5Div.setAttribute("class", "col-12");
  
      var divb=document.createElement("div")
      divb.setAttribute=("id","divb")
      col5Div.appendChild(divb);
  
  
      var button6 = document.createElement("hr");
      button6.setAttribute("id","hr");
      col5Div.appendChild(button6);
  
      // End
  
        //sepration and buttons
        var col4Div = document.createElement("div");
        col4Div.setAttribute("class", "col-12");
    
        var button1 = document.createElement("a");
        button1.setAttribute("id","btn1");
        button1.innerHTML = "Cancel";
        button1.setAttribute("onclick", "reload()");
        col4Div.appendChild(button1);
  
        var button2 = document.createElement("a");
        button2.setAttribute("id","btn2");
        button2.innerHTML = "Reset selection";
        col4Div.appendChild(button2);
  
  
  
        var button3 = document.createElement("button");
        button3.setAttribute("id","btn3");
        button3.innerHTML = "Apply(38)+";
        col4Div.appendChild(button3);
        
        
        
      //   end
  
  
      // Show no item availvbl
      var errorr = document.createElement("div");
      errorr.setAttribute("id", "noItemsMessage");
      errorr.setAttribute("style", "isplay: none;");
      errorr.innerHTML = "No items Avialbel";
      var span = document.createElement("span");
      span.setAttribute("class", "etmkug-16 ctwFJG");
      span.innerHTML = "No items Avialbel";
      errorr.appendChild(span);
      col2Div.appendChild(errorr);
  
      // create lower div
      var lastrow = document.createElement("div");
      lastrow.setAttribute("class", "row");
  
      var divs = document.createElement("div");
      divs.setAttribute("class", "col-6");
      // Create Button
      
  
      var divs1 = document.createElement("div");
      divs1.setAttribute("class", "col-6");
  
      var listelement = document.createElement("ul");
      //   listelement.id = "categoryList";
      listelement.id = "categoryList" + category.id;
      listelement.setAttribute("class", "dropdown-item");
      col1Div.appendChild(listelement);
  
      var listelement1 = document.createElement("ul");
      //   listelement1.id = "itemList";
      listelement1.id = "itemList" + category.id;
      listelement1.setAttribute("class", "dropdown-item");
      col2Div.appendChild(listelement1);
  
      categories[i].Data.forEach((data) => {
        var list2 = document.createElement("ul");
        var a1 = document.createElement("li");
        const categoryList = $("#categoryList" + category.id);
        const itemList1 = $("#itemList" + category.id);
  
        category.Data.forEach((category) => {});
      });
  
      var a1 = document.createElement("a");
      a1.setAttribute("class", "dropdown-item");
      a1.innerHTML = "Action";
  
      var a2 = document.createElement("a");
      a2.setAttribute("class", "dropdown-item");
  
      // main.appendChild(rowDiv);
  
      col2Div.appendChild(a2);
      main.appendChild(rowDiv);
      rowDiv.appendChild(col1Div);
      rowDiv.appendChild(col3Div);
      rowDiv.appendChild(col2Div);
      rowDiv.appendChild(col5Div);
      rowDiv.appendChild(col4Div);
     
      dropdownMenu.appendChild(rowDiv);
      col2Div.appendChild(lastrow);
      dropdownSelect.appendChild(btn);
      dropdownSelect.appendChild(dropdownMenu);
  
      dataCell.appendChild(dropdownSelect);
  
      //   const categoryList = $("#categoryList");
      //   const itemList1 = $("#itemList");
      const categoryList = $("#categoryList" + category.id);
      const itemList1 = $("#itemList" + category.id);

let counttt=0;
      category.Data.forEach((category) => {
        
        const li = $("<li>")
        .text  (category.category + "(" + category.items.length + ")" + "")
          .on("click", () => {
            itemList1.empty();
            let count = 0;
            category.items.forEach((item) => {
              count++;
              var labelcheckboc = document.createElement("label");
  
              var checkbox = document.createElement("input");
              checkbox.setAttribute("type", "checkbox");
              checkbox.setAttribute("class", "form-check-input");
              checkbox.setAttribute("id", "flexCheckDefault");
              labelcheckboc.appendChild(checkbox);
              labelcheckboc.innerText = item.itemName;
  
              var newLi = $("<li class='form-check'>");
              var newCheckbox = $(
                `<input id="checkBox${item.itemId}+${item.itemName}">`
              ).attr("type", "checkbox");
              var newItemName = $("<span>").text(item.itemName);
  
              // Set the checkbox state based on the item status
              if (item.status === "unchecked") {
                newCheckbox.prop("checked", false);
              } else {
                newCheckbox.prop("checked", true);
              }
  
              // Add a click event listener to the checkbox element
              newCheckbox.on("click", function () {
                // Update the item status based on the checkbox state
                if ($(this).prop("checked")) {
                  item.status = "checked";
                } else {
                  item.status = "unchecked";
                }
  
                // Update the category array with the new item status
                updateCategoryArray();
              });
              // Append the checkbox and item name to the new li element
              var newAllLi = $("<li class='form-check'>");
              var newAllCheckbox = $(
                `<input id="SelectAllcheckBox${category.cId}">`
              ).attr("type", "checkbox");
              var newAllItemName = $("<span>").text("Select All");
              const checkedCount = category.items.filter(
                (item) => item.status === "checked"
              ).length;
              if (checkedCount == category.items.length) {
                newAllCheckbox.prop("checked", true);
              }
              newAllCheckbox.on("click", function () {
                // Update the item status based on the checkbox state
                if ($(this).prop("checked")) {
                  let length = this.length;
                  console.log("yes", length);
                  checkAllFunction();
                } else {
                  console.log("no");
                  uncheckAllFunction();
                }
              });
  
              function checkAllFunction() {
                for (var i = 0; i < category.items.length; i++) {
                  console.log(category.items[i].status);
                  category.items[i].status = "checked";
                  category.items[i].checked = true;
                  var checkboxitem = document.getElementById(
                    `checkBox${category.items[i].itemId}+${category.items[i].itemName}`
                  );
                  checkboxitem.checked = true;
                }
                console.log(category);
              }
              function uncheckAllFunction() {
                for (var i = 0; i < category.items.length; i++) {
                  category.items[i].status = "unchecked";
                  category.items[i].checked = true;
                  var checkboxitem = document.getElementById(
                    `checkBox${category.items[i].itemId}+${category.items[i].itemName}`
                  );
                  checkboxitem.checked = false;
                  count--;
                }
              }
  
  
              // try
  
              $(document).ready(function () {
                  var initialCount = 0;
                  // Attach a click event listener to all checkboxes, including SelectAllcheckBox
                  $("input[type='checkbox']").on("click", function () {
                    // Get the total number of regular checkboxes
                    var total = $("input[type='checkbox']").not("#SelectAllcheckBox").length;
                
                    // Get the number of checked regular checkboxes
                    var checked = $("input[type='checkbox']:checked").not("#SelectAllcheckBox").length;
                
                    // Update the count display on the HTML page
                    if (checked == 1) {
                      $("#count-display").text("1 template selected");
                    } else if (checked == total) {
                      $("#count-display").text("All templates selected");
                    } else {
                      $("#count-display").text(checked + " templates selected");
                    }
                  });
                
                  // Attach a click event listener to the SelectAllcheckBox checkbox
                  $("#SelectAllcheckBox").on("click", function () {
                    // Get the total number of regular checkboxes
                    var total = $("input[type='checkbox']").not("#SelectAllcheckBox").length;
                
                    if (this.checked) {
                      // If the SelectAllcheckBox checkbox is checked, check all the regular checkboxes
                      $("input[type='checkbox']").not("#SelectAllcheckBox").prop("checked", true);
                      $("#count-display").text("All templates selected");
                    } else {
                      // If the SelectAllcheckBox checkbox is unchecked, uncheck all the regular checkboxes
                      $("input[type='checkbox']").not("#SelectAllcheckBox").prop("checked", false);
                      $("#count-display").text("");
                    }
                  });
                
                  // Display the initial count on the HTML page
                  var initialCount = $("input[type='checkbox']:checked").not("#SelectAllcheckBox").length;
                  if (initialCount == 1) {
                    $("#count-display").text("1 template selected");
                  } else if (initialCount == $("input[type='checkbox']").not("#SelectAllcheckBox").length) {
                    $("#count-display").text("All templates selected");
                    $("#SelectAllcheckBox").prop("checked", true);
                  } else {
                    $("#count-display").text(initialCount + " templates selected");
                  }
                  
                  // Trigger the click event on the SelectAllcheckBox checkbox to update the count display
                  $("#SelectAllcheckBox").trigger("click");
                });
  
              // try
  
              newAllCheckbox.appendTo(newAllLi);
              newAllItemName.appendTo(newAllLi);
  
              newCheckbox.appendTo(newLi);
              newItemName.appendTo(newLi);
  
              // Append the new li element to an existing element
              if (count == 1) {
                itemList1.append(newAllLi);
              }
              itemList1.append(newLi);
  
              function updateCategoryArray() {
                // Loop through the items in the category and update the corresponding item
                for (var i = 0; i < category.length; i++) {
                  if (category[i].id === item.id) {
                    category[i].status = item.status;
                    break;
                  }
                }
  
                const checkedCount1 = category.items.filter(
                  (item) => item.status === "checked"
                ).length;
                var selectAllcheckbox = document.getElementById(
                  `SelectAllcheckBox${category.cId}`
                );
                if (checkedCount1 == category.items.length) {
                  selectAllcheckbox.checked = true;
                } else {
                  selectAllcheckbox.checked = false;
                }
                console.log(category);
              }
            });
          });
          if(counttt==0){
          li.click();
          }
        categoryList.append(li);
        counttt++;
      });
    }
  
    //   count cheak box count
  });
  
 
  
}
function myFunction() {
  debugger;
  var input, filter, ul, li, span, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("itemList1");
  noItems = document.getElementById("noItemsMessage"); // New line to get the no items message element

  li = ul.getElementsByTagName("li");
  var matchingItems = 0; // Counter for matching items

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("span")[0];
    txtValue = a.textContent || span.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      matchingItems++;
    } else {
      li[i].style.display = "none";
    }
  }

  // Show or hide the no items message based on the number of matching items
  if (matchingItems === 0) {
    noItems.style.display = "block";
  } else {
    noItems.style.display = "none";
  }
}

function reload(){
    window.location.reload();
}
//ZTdropdown(categories)
 export default ZTdropdown;




