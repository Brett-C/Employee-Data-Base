const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Boudreaux050722!',
        database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);
console.log(`

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
//                                                                              //
//    ███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗     //
//    ██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝     //
//    █████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗       //
//    ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝       //
//    ███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗     //
//    ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝     //
//                                                                              //
//    ██████╗  █████╗ ████████╗ █████╗ ██████╗  █████╗ ███████╗███████╗██╗      //
//    ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝██║      //
//    ██║  ██║███████║   ██║   ███████║██████╔╝███████║███████╗█████╗  ██║      //
//    ██║  ██║██╔══██║   ██║   ██╔══██║██╔══██╗██╔══██║╚════██║██╔══╝  ╚═╝      //
//    ██████╔╝██║  ██║   ██║   ██║  ██║██████╔╝██║  ██║███████║███████╗██╗      //
//    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝      //
//                                                                              //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
`)
function homeScreen() {
    console.log("-----------------------------------------------------------------------------------------------------------------")
    inquirer.prompt([
        {
            name: "homeScreen",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role',
                'Exit'
            ]
        }
    ])
        .then((answer) => {
            if (answer.homeScreen == "View All Employees") {
                db.query("SELECT * FROM employees", function (err, result, fields) {
                    if (err) throw err;
                    console.table(result);
                    return homeScreen();
                })
            } else if (answer.homeScreen == "View All Departments") {
                db.query("SELECT * FROM departments", function (err, result, fields) {
                    if (err) throw err;

                    console.table(result);

                    return homeScreen();
                })
            } else if (answer.homeScreen == "View All Roles") {
                db.query("SELECT * FROM roles", function (err, result, fields) {
                    if (err) throw err;
                    console.table(result);
                    return homeScreen();
                })
            } else if (answer.homeScreen == "Add a Department") {
                inquirer.prompt([
                    {
                        name: "_id",
                        type: "input",
                        message: "What is the Department id?",
                    },
                    {
                        name: "department_name",
                        type: "input",
                        message: "What is the department name?",
                    }
                ]).then((answer) => {
                    console.log(`INSERT INTO departments (id, department_name) VALUES (${answer._id}, '${answer.department_name}');`)
                    db.query(`INSERT INTO departments (id, department_name) VALUES (${answer._id}, '${answer.department_name}');`, function () {

                    });
                    return homeScreen();
                });

            } else if (answer.homeScreen == "Add a Role") {
                inquirer.prompt([
                    {
                        name: "_id",
                        type: "input",
                        message: "What is the Roles id?",
                    },
                    {
                        name: "title",
                        type: "input",
                        message: "What is the Roles title?",
                    },
                    {
                        name: "salary",
                        type: "number",
                        message: "What is the Roles salary? use only numbers, no characters",
                    },
                    {
                        name: "department_id",
                        type: "list",
                        message: "What what department does this Role belong to?",
                        choices: [
                            {
                                name: 'Grocery',
                                value: 1
                            },

                            {
                                name: 'Toys',
                                value: 2,
                            },
                            {
                                name: 'Style',
                                value: 3,
                            },
                            {
                                name: 'Electronics',
                                value: 4,
                            },
                            {
                                name: 'Beauty',
                                value: 5
                            },
                            {
                                name: 'Essentials',
                                value: 6
                            }
                        ]
                    }


                ]).then((answer) => {
                    db.query(`INSERT INTO roles (id, title, salary, department_id) VALUES (${answer._id}, '${answer.title}', ${answer.salary}, ${answer.department_id});`, function () {

                    });
                    return homeScreen();
                });

            } else if (answer.homeScreen == "Add an Employee") {
                inquirer.prompt([
                    {
                        name: "_id",
                        type: "input",
                        message: "What is the employees id?",
                    },
                    {
                        name: "first_name",
                        type: "input",
                        message: "What is the employees first name?",
                    },
                    {
                        name: "last_name",
                        type: "input",
                        message: "What is the employees last name?",
                    },
                    {
                        name: "role_id",
                        type: "list",
                        message: "What is the employees role id?",
                        choices: [
                            {
                                name: "Team Member",
                                value: 1
                            },
                            {
                                name: "Team Leader",
                                value: 2
                            },
                            {
                                name: "Executive Team Leader",
                                value: 3
                            }
                        ]
                    },
                    {
                        name: "manager_id",
                        type: "list",
                        message: "Who does this person report to?",
                        choices: [
                            {
                                name: "Justin",
                                value: 1,
                            },
                            {
                                name: "Blake",
                                value: 2,
                            },
                            {
                                name: "Nick",
                                value: 3,
                            },
                        ]
                    }


                ]).then((answer) => {
                    console.log(`INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (${answer._id}, '${answer.first_name}', '${answer.last_name}', ${answer.role_id}, ${answer.manager_id});`)
                    db.query(`INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES (${answer._id}, '${answer.first_name}', '${answer.last_name}', ${answer.role_id}, ${answer.manager_id});`, function () {

                    });
                    return homeScreen();
                });
            } else if (answer.homeScreen == "Update an Employee Role") {

                db.query(`SELECT id, first_name, last_name, role_id FROM employees`, function (err, result, fields) {
                    console.table(result);
                    inquirer.prompt([
                        {
                            name: 'employee_id',
                            type: "list",
                            message: "Who's role do you want to update?",
                            choices: [
                                {
                                    name: 'Brett Cannon',
                                    value: 1
                                },
                                {
                                    name: 'Justin Hathaway',
                                    value: 2
                                },
                                {
                                    name: 'Anthony Davis',
                                    value: 3
                                },
                                {
                                    name: 'Cole Schmirbeck',
                                    value: 4
                                },
                                {
                                    name: 'Rich Douglas',
                                    value: 5
                                },
                                {
                                    name: 'Zack Smith',
                                    value: 6
                                },
                                {
                                    name: 'Shiloh Ballard',
                                    value: 7
                                },
                                {
                                    name: 'Allen Cannon',
                                    value: 8
                                }
                            ]
                        },
                        {
                            name: "updated_role",
                            type: "list",
                            message: "What is their new role?",
                            choices: [
                                {
                                    name: "Team Member",
                                    value: 1
                                },
                                {
                                    name: "Team Leader",
                                    value: 2
                                },
                                {
                                    name: "Executive Team Leader",
                                    value: 3
                                }
                            ]
                        }
                    ]).then((answer2) => {
                        console.log(`UPDATE employees SET role_id = ${answer2.updated_role} WHERE id = ${answer2.employee_id};`)
                        db.query(`UPDATE employees SET role_id = ${answer2.updated_role} WHERE id = ${answer2.employee_id};`, function (err, result, fields) {
                            if (err);
                            console.log(err)
                            db.query(`SELECT id, first_name, last_name, role_id FROM employees`, function (err, result, fields) {
                                console.clear();
                                console.log('Table updated!')
                                console.table(result);
                                return homeScreen();
                            })
                            
                        })


                    })




                });


            } else if (answer.homeScreen == "Exit") {
                console.clear()
                console.log("Goodbye!")
                process.exit()
            }
        })
}
homeScreen();
