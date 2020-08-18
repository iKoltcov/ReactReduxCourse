using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StarWarsApi.Repositories.Abstraction;
using StarWarsApi.Repositories.Abstraction.Projections;
using StarWarsApi.Repositories.DbModels;

namespace StarWarsApi.Repositories
{
    public class CharacterRepository : ICharacterRepository
    {
        public async Task<CharacterProjection[]> GetCharactersAsync(int pageNumber, int pageSize)
        {
            using (var context = new SqlContext())
            {
                return await context.Characters
                    .Select(x => ToCharacterProjection(x))
                    .Paging(pageNumber, pageSize)
                    .AsNoTracking()
                    .ToArrayAsync();
            }
        }

        public async Task<CharacterProjection> InsertCharacterAsync(CharacterProjection projection)
        {
            using (var context = new SqlContext())
            {
                var character = await context.Characters.AddAsync(
                    new DbCharacter()
                    {
                        Name = projection.Name,
                        PlanetOfBirthId = projection.PlanetOfBirthId,
                    });

                await context.SaveChangesAsync();
                return ToCharacterProjection(character.Entity);
            }
        }
        
        private static CharacterProjection ToCharacterProjection(DbCharacter character)
        {
            return new CharacterProjection()
            {
                Id = character.Id,
                Name = character.Name,
                PlanetOfBirthId = character.PlanetOfBirthId,
            };
        }
    }
}