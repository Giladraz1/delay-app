using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Apimatrix.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ItemsController : ControllerBase
  {
    [HttpGet]
    public ActionResult<IEnumerable<Item>> GetItems()
    {
      var items = new List<Item>
            {
                new Item { Id = 1, Name = "Item 1" },
                new Item { Id = 2, Name = "Item 2" },
                new Item { Id = 3, Name = "Item 3" }
            };

      return Ok(items);
    }
  }

  public class Item
  {
    public int Id { get; set; }
    public string Name { get; set; }
  }
}
