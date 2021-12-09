const express = require("express");

const {
  getEmployees, getEmployeeById, deleteEmployee, addEmployee, updateEmployee , searchEmployee
} = require("../controllers/employee"); 

const router = express.Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);
router.delete("/employees/:id", deleteEmployee);
router.post("/employees", addEmployee);
router.put("/employees/:id", updateEmployee);
router.get("/searchEmployees/:query",searchEmployee);

module.exports = router;
