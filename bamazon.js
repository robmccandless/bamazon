const query = require("./products/queries");
const inq = require("inquirer");

inq.prompt([{
        type: "input",
        name: "command",
        message: "What do you want to do?"
    },
    {
        type: "list",
        name: "choice",
        message: "Pick one:",
        choices: ["Show all", "Update", "Delete"]
    }
]).then(answers => {
    console.log(answers);
    switch (answers.choice) {
        case "Show all":
            query.getAll();
            break;
        case "Update":
            console.log("Running update...");
            break;
        case "Delete":
            console.log("Delete logic...")
            break;
        default:
            console.log("More to come!")
            break
    }
});