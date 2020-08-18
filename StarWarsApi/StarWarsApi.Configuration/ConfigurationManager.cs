using System;
using Microsoft.Extensions.Configuration;

namespace StarWarsApi.Configuration
{
    public class ConfigurationManager
    {
        private static IConfigurationRoot Configuration { get; set; }

        public static void SetConfigurationRoot(IConfigurationRoot configuration)
        {
            if (Configuration == null)
            {
                Configuration = configuration;
            }
        }
        
        public static string GetSqlConnectionString()
        {
            return Configuration["SqlConnectionString"] ?? throw new ArgumentException("There isn't sql connection string");
        }

        public static string GetAllowedHosts()
        {
            return Configuration["AllowedHosts"];
        }
    }
}