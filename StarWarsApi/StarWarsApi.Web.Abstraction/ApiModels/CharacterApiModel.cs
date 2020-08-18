namespace StarWarsApi.Web.Abstraction.ApiModels
{
    public class CharacterApiModel
    {
        public int Id { get; set; }

        public string Name { get; set; }
        
        public int? PlanetOfBirthId { get; set; }
    }
}