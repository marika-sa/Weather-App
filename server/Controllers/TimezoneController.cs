using server.Base;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{

    // Setting the attribute for the API controller and defining the route for the API endpoints
    [ApiController]
    [Route("api/[controller]")]
    public class TimezoneController : BaseController
    {
        public TimezoneController(IHttpClientFactory httpClientFactory, IConfiguration config) : base(httpClientFactory, config)
        { }

        [HttpGet("{location}")]
        public async Task<IActionResult> GetTimezone(string location)
        {
            return await ExecuteApiRequest("timezone", location);
        }
    }
}