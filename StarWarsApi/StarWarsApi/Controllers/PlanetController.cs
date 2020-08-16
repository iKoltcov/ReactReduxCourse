using Microsoft.AspNetCore.Mvc;
using StarWarsApi.Models;

namespace StarWarsApi.Controllers
{    
    [ApiController]
    [Route("[controller]")]
    public class PlanetController : ControllerBase
    {
        [HttpGet]
        public PlanetModel[] GetPlanets()
        {
            return new PlanetModel[]{};
        }
    }
}