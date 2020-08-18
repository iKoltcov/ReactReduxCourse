using System.Linq;
using System.Threading.Tasks;
using StarWarsApi.Repositories.Abstraction;
using StarWarsApi.Repositories.Abstraction.Projections;
using StarWarsApi.Services.Abstraction;
using StarWarsApi.Services.Abstraction.Models;

namespace StarWarsApi.Services
{
    public class PlanetService : IPlanetService
    {
        private IPlanetRepository PlanetRepository { get; }

        public PlanetService(IPlanetRepository planetRepository)
        {
            PlanetRepository = planetRepository;
        }

        public async Task<PlanetModel[]> GetPlanetsAsync(int pageNumber, int pageSize)
        {
            var result = await PlanetRepository.GetPlanetsAsync(pageNumber, pageSize);

            return result
                .Select(ToPlanetModel)
                .ToArray();
        }

        public async Task<PlanetModel> PutPlanetAsync(PlanetModel planet)
        {
            return ToPlanetModel(await PlanetRepository
                    .InsertPlanetAsync(new PlanetProjection()
                    {
                        Name = planet.Name,
                    })
                );
        }

        private static PlanetModel ToPlanetModel(PlanetProjection planet)
        {
            return new PlanetModel()
            {
                Id = planet.Id,
                Name = planet.Name,
            };
        }
    }
}