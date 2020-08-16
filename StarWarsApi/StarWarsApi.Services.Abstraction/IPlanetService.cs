using System.Threading.Tasks;
using StarWarsApi.Services.Abstraction.Models;

namespace StarWarsApi.Services.Abstraction
{
    public interface IPlanetService
    {
        public Task<PlanetModel[]> GetPlanetsAsync(int page, int count);
    }
}