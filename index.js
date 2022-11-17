const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    od = [];
    all.forEach((element) => {
      if (element.dueDate == yesterday) {
        od.push(element);
      }
    });
    return od;
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    dt = [];
    all.forEach((element) => {
      if (element.dueDate == today) {
        dt.push(element);
      }
    });
    return dt;
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    dl = [];
    all.forEach((element) => {
      if (element.dueDate == tomorrow) {
        dl.push(element);
      }
    });
    return dl;
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    const dsl = [];
    list.forEach((e) => {
      const a = " ";
      if (e.dueDate == today) {
        if (e.completed == true) {
          const a = "[X] " + e.title;
          dsl.push(a);
        } else {
          const a = "[ ] " + e.title;
          dsl.push(a);
        }
      } else {
        if (e.completed == true) {
          const a = "[X] " + e.title + " " + e.dueDate;
          dsl.push(a);
        } else {
          const a = "[ ] " + e.title + " " + e.dueDate;
          dsl.push(a);
        }
      }
    });
    return dsl.forEach((el) => {
      console.log(el);
    });
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
