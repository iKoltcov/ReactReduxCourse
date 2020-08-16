using Autofac;
using StarWarsApi.Services;

namespace StarWarsApi
{
    public class WebAutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterModule(new ServicesAutofacModule());
        }
    }
}