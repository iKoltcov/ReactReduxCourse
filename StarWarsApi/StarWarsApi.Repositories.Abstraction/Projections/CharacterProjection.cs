namespace StarWarsApi.Repositories.Abstraction.Projections
{
    public class CharacterProjection
    {
        public int Id { get; set; }
        
        public string Name { get; set; }

        public int? PlanetOfBirthId { get; set; }
    }
}