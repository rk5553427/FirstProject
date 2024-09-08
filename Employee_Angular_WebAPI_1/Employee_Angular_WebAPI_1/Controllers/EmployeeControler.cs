using Employee_Angular_WebAPI_1.Data;
using Employee_Angular_WebAPI_1.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Employee_Angular_WebAPI_1.Controllers
{
  [Route("api/employee")]
  [ApiController]
  public class EmployeeControler : Controller
  {
    private readonly ApplicationDbContext _context;
    public EmployeeControler(ApplicationDbContext context)
    {
       _context = context;
    }
    [HttpGet]
    public IActionResult GetAllEmployee()
    {
      return Ok(_context.Employees.ToList());
    }
    [HttpPost]
    public IActionResult SaveEmployee([FromBody]Employee employee)
    {
      if (employee == null) return NotFound();
      if(!ModelState.IsValid) return BadRequest(ModelState);
      _context.Employees.Add(employee);
      _context.SaveChanges();
      return Ok();
    }
    [HttpPut]
    public IActionResult UpdateEmployee([FromBody]Employee employee)
    {
      if (employee == null) return NotFound();
      if (!ModelState.IsValid) return BadRequest(ModelState);
      _context.Employees.Update(employee);
      _context.SaveChanges();
      return Ok();
    }
    [HttpDelete("{id:int}")]
    public IActionResult DeleteEmployee(int id)
    {
      var employeeInDb = _context.Employees.Find(id);
      if(employeeInDb == null) return NotFound();
      _context.Employees.Remove(employeeInDb);
      _context.SaveChanges();
      return Ok();
    }
  }
}
