let employees = [];
let employeeId = 1;

function addEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const message = document.getElementById('message');

    if (name && profession && age) {
        const employee = {
            id: employeeId++,
            name,
            profession,
            age: parseInt(age)
        };

        employees.push(employee);
        displayEmployees();
        message.textContent = 'Success : Employee Added!';
        message.className = 'success';
        document.getElementById('employeeForm').reset();
    } else {
        message.textContent = 'Error : Please Make sure All the fields are filled before adding in an employee !';
        message.className = 'error';
    }
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <span>${employee.id}. ${employee.name}, ${employee.profession}, ${employee.age} years old</span>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}