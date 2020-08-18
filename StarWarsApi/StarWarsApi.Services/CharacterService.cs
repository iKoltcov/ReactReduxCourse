using System.Linq;
using System.Threading.Tasks;
using StarWarsApi.Repositories.Abstraction;
using StarWarsApi.Repositories.Abstraction.Projections;
using StarWarsApi.Services.Abstraction;
using StarWarsApi.Services.Abstraction.Models;

namespace StarWarsApi.Services
{
    public class CharacterService : ICharacterService
    {
        private ICharacterRepository CharacterRepository { get; }

        public CharacterService(ICharacterRepository characterRepository)
        {
            CharacterRepository = characterRepository;
        }
        
        public async Task<CharacterModel[]> GetCharactersAsync(int pageNumber, int pageSize)
        {
            return (await CharacterRepository.GetCharactersAsync(pageNumber, pageSize))
                .Select(ToCharacterModel)
                .ToArray();
        }

        public async Task<CharacterModel> PutCharacterAsync(CharacterModel character)
        {
            var result = await CharacterRepository.InsertCharacterAsync(new CharacterProjection()
            {
                Name = character.Name,
                PlanetOfBirthId = character.PlanetOfBirthId,
            });
            return ToCharacterModel(result);
        }

        private static CharacterModel ToCharacterModel(CharacterProjection character)
        {
            return new CharacterModel()
            {
                Id = character.Id,
                Name = character.Name,
                PlanetOfBirthId = character.PlanetOfBirthId,
            };
        }
    }
}