using System.Threading.Tasks;
using StarWarsApi.Services.Abstraction;
using StarWarsApi.Services.Abstraction.Models;

namespace StarWarsApi.Services
{
    public class PlanetService : IPlanetService
    {
        public Task<PlanetModel[]> GetPlanetsAsync(int page, int count)
        {
            return Task.FromResult(new[]
            {
                new PlanetModel()
                {
                    Id = 0, Age = "1000BBY", Name = "Nabu"
                }, 
            });
        }
    }
}