using Microsoft.EntityFrameworkCore.Migrations;

namespace StarWarsApi.Repositories.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tbl_planets",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_planets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "tbl_characters",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    PlanetOfBirthId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_characters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tbl_characters_tbl_planets_PlanetOfBirthId",
                        column: x => x.PlanetOfBirthId,
                        principalTable: "tbl_planets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tbl_characters_PlanetOfBirthId",
                table: "tbl_characters",
                column: "PlanetOfBirthId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tbl_characters");

            migrationBuilder.DropTable(
                name: "tbl_planets");
        }
    }
}
