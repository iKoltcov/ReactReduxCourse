using System.Collections.Generic;
using System.Threading.Tasks;
using StarWarsApi.Repositories.Abstraction.Projections;

namespace StarWarsApi.Repositories.Abstraction
{
    public interface IPlanetRepository
    {
        Task<PlanetProjection[]> GetPlanetsAsync(int pageNumber, int pageCount);

        Task<PlanetProjection> InsertPlanetAsync(PlanetProjection projection);
    }
}