const Employee = require("../Models/employee");
// const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const getEmployees = (req, res)=> {
    Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
};

const getEmployeeById = (req, res) => {
    let id = req.params.id;
    Employee.findById(id, function(err, employee) {
        res.json(employee);
    });
}


const deleteEmployee = (req, res) => {
   Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json('Employee deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}


const addEmployee = (req, res) => {
   const name = req.body.name;
   const date_of_birth = Date.parse(req.body.date_of_birth);
  const gender = req.body.gender;
  const salary = Number(req.body.salary);
  

  const employee = new Employee({
    name,
    date_of_birth,
    gender,
    salary,
  });

  employee.save()
  .then(() =>  res.status(201).json({
                body: employee,
                message: `Employee added successfully`
            }))
  .catch(err => res.status(400).json('Error: ' + err));
}


const updateEmployee = function (req, res) {
    console.log(req.body);
     Employee.findById(req.params.id)
    .then(employee => {
      employee.name = req.body.name;
      employee.gender = req.body.gender;
      employee.salary = Number(req.body.salary);
      employee.date_of_birth = Date.parse(req.body.date_of_birth);

      employee.save()
  .then(() =>  res.status(201).json({
                body: employee,
                message: `Employee updated successfully`
            }))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}

const searchEmployee= async function(req,res){
    const query=req.params.query

    const employees= await Employee.fuzzySearch(query,function(err, result) {
        if (err) {
          return res.status(404).json({message:err})
          
        } else {
            return res.status(200).send(result);
          
        }
    });
   
    
}





module.exports = { getEmployees, getEmployeeById, deleteEmployee, addEmployee, updateEmployee , searchEmployee}; 