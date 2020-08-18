using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StarWarsApi.Repositories.Abstraction;
using StarWarsApi.Repositories.Abstraction.Projections;
using StarWarsApi.Repositories.DbModels;

namespace StarWarsApi.Repositories
{
    public class PlanetRepository : IPlanetRepository
    {
        public async Task<PlanetProjection[]> GetPlanetsAsync(int pageNumber, int pageSize)
        {
            using (var context = new SqlContext())
            {
                return await context.Planets
                    .Select(x => ToPlanetProjection(x))
                    .Paging(pageNumber, pageSize)
                    .AsNoTracking()
                    .ToArrayAsync();
            }
        }

        public async Task<PlanetProjection> InsertPlanetAsync(PlanetProjection projection)
        {
            using (var context = new SqlContext())
            {
                var planet = await context.Planets
                    .AddAsync(new DbPlanet()
                    {
                        Name = projection.Name,
                    });

                await context.SaveChangesAsync();
                return ToPlanetProjection(planet.Entity);
            }
        }
        
        private static PlanetProjection ToPlanetProjection(DbPlanet planet)
        {
            return new PlanetProjection()
            {
                Id = planet.Id,
                Name = planet.Name,
            };
        }
    }
}