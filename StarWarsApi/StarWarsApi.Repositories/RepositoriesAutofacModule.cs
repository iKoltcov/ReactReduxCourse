using Autofac;
using StarWarsApi.Repositories.Abstraction;

namespace StarWarsApi.Repositories
{
    public class RepositoriesAutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<PlanetRepository>().As<IPlanetRepository>();
            builder.RegisterType<CharacterRepository>().As<ICharacterRepository>();
        }
    }
}