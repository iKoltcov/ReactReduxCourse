namespace StarWarsApi.Services.Abstraction.Models
{
    public class CharacterModel
    {
        public int Id { get; set; }
        
        public string Name { get; set; }

        public int? PlanetOfBirthId { get; set; }
    }
}