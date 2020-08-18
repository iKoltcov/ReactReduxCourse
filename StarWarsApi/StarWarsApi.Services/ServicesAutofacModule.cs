using Autofac;
using StarWarsApi.Repositories;
using StarWarsApi.Services.Abstraction;

namespace StarWarsApi.Services
{
    public class ServicesAutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<PlanetService>().As<IPlanetService>();
            builder.RegisterType<CharacterService>().As<ICharacterService>();
            
            builder.RegisterModule(new RepositoriesAutofacModule());
        }
    }
}