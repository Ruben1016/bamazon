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
        console.log(res);
        // TODO prettify

    })      

    // after display results, ask customer what to purchase
     askForProduct(res);

}
function askForProduct (inventory) {

    inquirer
    .prompt ([
        name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].item_id);
              }
              return choiceArray;
            },
            message: "What item_id would you like?"
          ,
          {
            name: "product",
            type: "input",
            message: "How many items do you want?"
          }
        ])
        .then(function(answer) {
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
            if (results[i].item_id === answer.choice) {
              chosenItem = results[i];
            }
            
          } 
    )};

    // prompt the customer and ask them the id the item they want to purchase

    // then get their choice from the prompts and what to check 

    // check if that item is available 

        // if it is available ask them what the quantity is
            // prompt 

        // if is not tell them they cannot order anything and show the product again



}
function askForQuantity (inventory) {
    inquirer
    .prompt ([
        name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].stock_quantity);
              }
              return choiceArray;
            },
            message: "Checking to see if product is available"
            ,
            {
              name: "quantity",
              type: "input",
              message: "would you like to make a purchase?"
    // prompt for quantity

    // check to see if that qunatity is available

    // if it is available they need to make a purchase

    // if it is not available we shoudl tell the customer and load the prodcuts again



}
function checkQuantity (inventory, id) {
    // find the item and make sure it is available
}
function makePurchase (prodcuts, quantity) {
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantitu: answer
          },
          {
            id: chosenItem.id
          }
        ],
        function(error) {
          if (error) throw err;
          console.log("Total of purchase");
        }
      );
    
    else {
      console.log("Here are some other products");
    // update inventory 

    // let the customer know the total

    // show the products again
    }
};