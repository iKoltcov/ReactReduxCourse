using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StarWarsApi.Repositories.DbModels
{
    [Table("tbl_planets")]
    internal class DbPlanet
    {
        [Key]
        public int Id { get; set; }
        
        [MaxLength(256)]
        public string Name { get; set; }
    }
}