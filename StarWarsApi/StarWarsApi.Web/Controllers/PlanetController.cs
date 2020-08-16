using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StarWarsApi.Services.Abstraction;
using StarWarsApi.Services.Abstraction.Models;
using StarWarsApi.Web.Abstraction.ApiModels;

namespace StarWarsApi.Controllers
{    
    [ApiController]
    [Route("api/[controller]")]
    public class PlanetController : ControllerBase
    {
        private IPlanetService PlanetService { get; }

        public PlanetController(IPlanetService planetService)
        {
            PlanetService = planetService;
        }
        
        [HttpGet]
        public async Task<PlanetApiModel[]> GetPlanets()
        {
            return (await PlanetService.GetPlanetsAsync(
                int.TryParse(Request.Query["page"], out var page) ? page : 1,
                int.TryParse(Request.Query["count"], out var count) ? count : 100)
                ).Select(ToPlanetApiModel).ToArray();
        }

        private static PlanetApiModel ToPlanetApiModel(PlanetModel model)
        {
            return new PlanetApiModel()
            {
                Id = model.Id,
                Name = model.Name,
                Age = model.Age,
            };
        }
    }
}