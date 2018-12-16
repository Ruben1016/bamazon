var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log("connected to database");
  
  start();
});

function start() {

    // query database and get all the products 
    connection.query ("SELECT * FROM products", function (err, res){
        if (err) {
            console.log(err);
        }
        // console.log(res);
        // TODO prettify
        askForProduct(res);
    })      

    // after display results, ask customer what to purchase


}
function askForProduct (inventory) {

    inquirer
    .prompt ([ {
        name: "product",
        type: "input",
        message: "Enter the id of the item you would like to purchase"

        }])
        .then(function(answer) {
        var productInfo = checkQuantity(inventory, answer.product)
        console.log(productInfo);

        if (!productInfo) {
            console.log("Please enter a valid product");
            askForProduct();
        }
        
          else if (productInfo.qty) {
              askForQuantity(inventory, answer.product)

          }
          else {
              console.log("Item is not available");
              start();
          }

         }      
    )};

    // prompt the customer and ask them the id the item they want to purchase

    // then get their choice from the prompts and what to check 

    // check if that item is available 

        // if it is available ask them what the quantity is
            // prompt 

        // if is not tell them they cannot order anything and show the product again


function askForQuantity (inventory, id) {

        inquirer
        .prompt ([{
         name:"quantity",
         type:"input",
         message:"Enter quantity"
         }]) 
        .then(function(answer){
        var productInfo = checkQuantity(inventory, id, answer.quantity)
        if(productInfo.qty >= answer.quantity) {
         makePurchase(id, productInfo, answer.quantity)
    }
    else {
        console.log("Quantity not available");
        start();
    }
        })
    // prompt for quantity

    // check to see if that qunatity is available

    // if it is available they need to make a purchase

    // if it is not available we shoudl tell the customer and load the prodcuts again



}
function checkQuantity (inventory, id) {
    
    
    for(var i = 0; i <inventory.length;i++){
        console.log(inventory[i]);
        
        if(inventory[i].id===parseInt(id)) {
            return {
                qty: inventory[i].stock_quantity, 
                price:inventory[i].price}
        }
    }
    
    // find the item and make sure it is available
}
function makePurchase (id, product, qty) {
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: product.qty - qty
          },
          {
            id: id
          }
        ],
        function(err, res) { 
          if (err) throw err;
          console.log("Purchase was successful, order total; "+ qty*product.price);
          start();
        }


      );
    
    
    // update inventory 

    // let the customer know the total

    // show the products again
    }
