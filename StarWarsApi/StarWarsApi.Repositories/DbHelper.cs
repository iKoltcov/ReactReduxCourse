using System.Linq;
using StarWarsApi.Repositories.Abstraction.Projections;
using StarWarsApi.Repositories.DbModels;

namespace StarWarsApi.Repositories
{
    public static class DbHelper
    {
        public static IQueryable<TEntity> Paging<TEntity>(this IQueryable<TEntity> entities, int pageNumber, int pageSize)
        {
            return pageNumber < 1 
                ? entities.Take(pageSize) 
                : entities.Skip((pageNumber - 1) * pageSize).Take(pageSize);
        }
    }
}