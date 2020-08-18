using System.Threading.Tasks;
using StarWarsApi.Services.Abstraction.Models;

namespace StarWarsApi.Services.Abstraction
{
    public interface ICharacterService
    {
        Task<CharacterModel[]> GetCharactersAsync(int pageNumber, int pageSize);

        Task<CharacterModel> PutCharacterAsync(CharacterModel character);
    }
}