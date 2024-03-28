// Initialize employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee with key and value (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to destructively update employee with key and value
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to destructively delete property from employee
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  console.log("Original employee:", employee);
  
  // Non-destructive update
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Updated employee (non-destructive):", updatedEmployee);
  
  // Destructive update
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Updated employee (destructive):", employee);
  
  // Non-destructive deletion
  let deletedEmployee = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee after deleting name (non-destructive):", deletedEmployee);
  
  // Destructive deletion
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee after deleting streetAddress (destructive):", employee);
  