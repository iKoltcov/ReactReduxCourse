using Microsoft.EntityFrameworkCore;
using StarWarsApi.Configuration;
using StarWarsApi.Repositories.DbModels;

namespace StarWarsApi.Repositories
{
    internal class SqlContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlServer(ConfigurationManager.GetSqlConnectionString());

        public DbSet<DbPlanet> Planets { get; set; }
    }
}