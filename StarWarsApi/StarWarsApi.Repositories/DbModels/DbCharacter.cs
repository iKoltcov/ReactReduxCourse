using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StarWarsApi.Repositories.DbModels
{
    [Table("tbl_characters")]
    internal class DbCharacter
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(256)]
        public string Name { get; set; }

        [ForeignKey(nameof(PlanetOfBirth))]
        public int? PlanetOfBirthId { get; set; }

        public DbPlanet PlanetOfBirth { get; set; }
    }
}