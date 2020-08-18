using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StarWarsApi.Repositories.DbModels
{
    [Table("tbl_planets")]
    internal class DbPlanet
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [MaxLength(256)]
        public string Name { get; set; }
        
        [ForeignKey(nameof(DbCharacter.PlanetOfBirthId))]
        public ICollection<DbCharacter> BornCharacters { get; set; }
    }
}