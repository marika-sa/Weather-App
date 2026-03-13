using server.Base;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{

    // Setting the attribute for the API controller and defining the route for the API endpoints
    [ApiController]
    [Route("api/[controller]")]
    public class LocationsController : BaseController
    {
        public LocationsController(IHttpClientFactory httpClientFactory, IConfiguration config) : base(httpClientFactory, config)
        { }

        [HttpGet]
        public IActionResult GetLocations()
        {
            var locations = _locations.Select(location => new { key = location.Key, name = location.Value });
            return Ok(locations);
        }
    }
}