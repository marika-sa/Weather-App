using Microsoft.AspNetCore.Mvc;

namespace server.Base
{
    public class BaseController : ControllerBase
    {
        protected readonly HttpClient _httpClient;
        protected readonly string _apiKey;
        protected readonly Dictionary<string, string> _locations = new()
    {
        { "london", "London" },
        { "tokyo", "Tokyo" },
        { "dublin", "Dublin" }
    };

        public BaseController(IHttpClientFactory httpClientFactory, IConfiguration config)
        {
            _httpClient = httpClientFactory.CreateClient();
            _apiKey = config["WeatherApiKey"] ?? throw new InvalidOperationException("WeatherApiKey is missing from appsettings.json");
        }

        protected async Task<IActionResult> ExecuteApiRequest(string endpoint, string city)
        {
            if (string.IsNullOrEmpty(endpoint))
                return BadRequest("Endpoint parameter is required.");

            if (string.IsNullOrEmpty(city))
                return BadRequest("Location parameter is required.");

            if (!_locations.ContainsKey(city))
                return BadRequest("Location not available.");

            if (string.IsNullOrEmpty(_apiKey))
                return StatusCode(500, "API key is not configured.");

            var url = $"https://weatherapi-com.p.rapidapi.com/{endpoint}.json?q={city}";

            var request = new HttpRequestMessage(HttpMethod.Get, url);
            request.Headers.Add("X-RapidAPI-Key", _apiKey);
            request.Headers.Add("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

            try
            {
                var response = await _httpClient.SendAsync(request);
                if (!response.IsSuccessStatusCode)
                {
                    return StatusCode((int)response.StatusCode, "Error fetching weather data.");
                }
                var data = await response.Content.ReadAsStringAsync();
                return Content(data, "application/json");
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(503, $"Service unavailable: {ex.Message}");
            }
            catch (TaskCanceledException ex)
            {
                return StatusCode(504, $"Request timed out: {ex.Message}");
            }
        }
    }
}