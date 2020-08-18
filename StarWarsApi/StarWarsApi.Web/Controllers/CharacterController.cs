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
    [Produces("application/json")]
    public class CharacterController : ControllerBase
    {
        private ICharacterService CharacterService { get; }

        public CharacterController(ICharacterService characterService)
        {
            CharacterService = characterService;
        }
        
        [HttpGet]
        public async Task<CharacterApiModel[]> GetPlanets()
        {
            var result = await CharacterService.GetCharactersAsync(
                int.TryParse(Request.Query["page"], out var page) ? page : 1,
                int.TryParse(Request.Query["count"], out var count) ? count : 100);
            return result.Select(ToCharacterApiModel).ToArray();
        }

        [HttpPut]
        public async Task<CharacterApiModel> PutPlanet([FromBody] CharacterModel planet)
        {
            var result = await CharacterService.PutCharacterAsync(new CharacterModel()
            {
                Name = planet.Name,
                PlanetOfBirthId = planet.PlanetOfBirthId,
            });
            
            return ToCharacterApiModel(result);
        }

        private static CharacterApiModel ToCharacterApiModel(CharacterModel model)
        {
            return new CharacterApiModel()
            {
                Id = model.Id,
                Name = model.Name,
                PlanetOfBirthId = model.PlanetOfBirthId,
            };
        }
    }
}