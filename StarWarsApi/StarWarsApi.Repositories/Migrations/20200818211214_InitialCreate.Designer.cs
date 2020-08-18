﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StarWarsApi.Repositories;

namespace StarWarsApi.Repositories.Migrations
{
    [DbContext(typeof(SqlContext))]
    [Migration("20200818211214_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("StarWarsApi.Repositories.DbModels.DbCharacter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PlanetOfBirthId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PlanetOfBirthId");

                    b.ToTable("tbl_characters");
                });

            modelBuilder.Entity("StarWarsApi.Repositories.DbModels.DbPlanet", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.ToTable("tbl_planets");
                });

            modelBuilder.Entity("StarWarsApi.Repositories.DbModels.DbCharacter", b =>
                {
                    b.HasOne("StarWarsApi.Repositories.DbModels.DbPlanet", "PlanetOfBirth")
                        .WithMany("BornCharacters")
                        .HasForeignKey("PlanetOfBirthId");
                });
#pragma warning restore 612, 618
        }
    }
}
