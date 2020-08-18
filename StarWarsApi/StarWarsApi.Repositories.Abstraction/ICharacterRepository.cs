using System.Threading.Tasks;
using StarWarsApi.Repositories.Abstraction.Projections;

namespace StarWarsApi.Repositories.Abstraction
{
    public interface ICharacterRepository
    {
        Task<CharacterProjection[]> GetCharactersAsync(int pageNumber, int pageSize);

        Task<CharacterProjection> InsertCharacterAsync(CharacterProjection projection);
    }
}