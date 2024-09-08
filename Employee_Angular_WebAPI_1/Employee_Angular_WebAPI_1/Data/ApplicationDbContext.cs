using Employee_Angular_WebAPI_1.Model;
using Microsoft.EntityFrameworkCore;

namespace Employee_Angular_WebAPI_1.Data
{
  public class ApplicationDbContext:DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }
    public DbSet<Employee> Employees { get; set; }
  }
}
