using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using BackEnd.Models;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ZooDbController : ControllerBase
    {
        private IConfiguration _configuration;
        public ZooDbController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetTestTable")]
        public JsonResult GetTestTable()
        {

            string query = "select * from test";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ZooDBConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);

        }

        [HttpPost]
        [Route("NewUser")]
        public JsonResult NewUser([FromBody] UserDetails userDetails)
        {
            // Prepare the SQL query for inserting a new user
            string query = "INSERT INTO user_info (email, password, user_type) VALUES (@Email, @Password, @UserType)";

            // Create a new DataTable to store the result (although in this case, there's no result to store)
            DataTable table = new DataTable();

            // Get the connection string from appsettings.json
            string sqlDataSource = _configuration.GetConnectionString("ZooDBConnection");

            // Open a connection to the database and execute the query
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Add parameters to the command to prevent SQL injection
                    myCommand.Parameters.AddWithValue("@Email", userDetails.Email);
                    myCommand.Parameters.AddWithValue("@Password", userDetails.Password);
                    myCommand.Parameters.AddWithValue("@UserType", userDetails.UserType);

                    // Execute the query (which in this case is an INSERT operation)
                    myCommand.ExecuteNonQuery();
                }
            }

            // Return a response indicating success
            return new JsonResult("New user added successfully");
        }

        [HttpPost]
        [Route("NewUserProfile")]
        public JsonResult NewUserProfile([FromBody] UserProfile userProfile)
        {
            // Prepare the SQL query for inserting a new user must be same as database
            string query = "INSERT INTO customer (first_name, last_name, phone_number, email) VALUES (@firstName, @lastName, @phoneNumber, @email)";

            // Create a new DataTable to store the result (although in this case, there's no result to store)
            DataTable table = new DataTable();

            // Get the connection string from appsettings.json
            string sqlDataSource = _configuration.GetConnectionString("ZooDBConnection");

            // Open a connection to the database and execute the query
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Add parameters to the command to prevent SQL injection
                    myCommand.Parameters.AddWithValue("@firstName", userProfile.firstName);
                    myCommand.Parameters.AddWithValue("@lastName", userProfile.lastName);
                    myCommand.Parameters.AddWithValue("@phoneNumber", userProfile.phoneNumber);
                    myCommand.Parameters.AddWithValue("@email", userProfile.email);


                    // Execute the query (which in this case is an INSERT operation)
                    myCommand.ExecuteNonQuery();
                }
            }

            // Return a response indicating success
            return new JsonResult("New user profile added successfully");
        }

        [HttpPost]
        [Route("NewDiet")]
        public JsonResult NewDiet([FromBody] Diet newDiet)
        {
            // Prepare the SQL query for inserting a new user
            string query = "INSERT INTO diet (animal_id, diet_name, diet_type, schedule_start, schedule_end, schedule_days) VALUES (@animalID, @dietName, @dietType, @dietSchedule)";

            // Create a new DataTable to store the result (although in this case, there's no result to store)
            DataTable table = new DataTable();

            // Get the connection string from appsettings.json
            string sqlDataSource = _configuration.GetConnectionString("ZooDBConnection");

            // Open a connection to the database and execute the query
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Add parameters to the command to prevent SQL injection
                    myCommand.Parameters.AddWithValue("@animalID", newDiet.animalID);
                    myCommand.Parameters.AddWithValue("@dietName", newDiet.dietName);
                    myCommand.Parameters.AddWithValue("@dietType", newDiet.dietType);
                    myCommand.Parameters.AddWithValue("@dietSchedule", newDiet.dietSchedule);

                    // Execute the query (which in this case is an INSERT operation)
                    myCommand.ExecuteNonQuery();
                }
            }

            // Return a response indicating success
            return new JsonResult("New diet added successfully");
        }


        [HttpPost]
        [Route("NewVetRecords")]
        public JsonResult NewVetRecords([FromBody] VetRecords newVetRecords)
        {
            // Prepare the SQL query for inserting a new user
            string query = "INSERT INTO vet_records (animal_id, weight, height, diagnosis, medications) VALUES (@animalID, @Weight, @Height, @Diagnosis, @Medications)";

            // Create a new DataTable to store the result (although in this case, there's no result to store)
            DataTable table = new DataTable();

            // Get the connection string from appsettings.json
            string sqlDataSource = _configuration.GetConnectionString("ZooDBConnection");

            // Open a connection to the database and execute the query
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Add parameters to the command to prevent SQL injection
                    myCommand.Parameters.AddWithValue("@animalID", newVetRecords.animalID);
                    myCommand.Parameters.AddWithValue("@weight", newVetRecords.Weight);
                    myCommand.Parameters.AddWithValue("@height", newVetRecords.Height);
                    myCommand.Parameters.AddWithValue("@diagnosis", newVetRecords.Diagnosis);
                    myCommand.Parameters.AddWithValue("@medications", newVetRecords.Medications);

                    // Execute the query (which in this case is an INSERT operation)
                    myCommand.ExecuteNonQuery();
                }
            }

            // Return a response indicating success
            return new JsonResult("New Veterinarian Records added successfully");
        }


        [HttpPost]
        [Route("NewEnclosure")]
        public JsonResult NewEnclosure([FromBody] Enclosure newEnclosure)
        {
            // Prepare the SQL query for inserting a new user
            string query = "INSERT INTO enclosure (enclosure_name, enclosure_type, built_date, cleaning_schedule_start, cleaning_schedule_end) VALUES (@enclosureName, @enclosureType, @builtDate, @cleaningScheduleStart, @cleaningScheduleEnd)";

            // Create a new DataTable to store the result (although in this case, there's no result to store)
            DataTable table = new DataTable();

            // Get the connection string from appsettings.json
            string sqlDataSource = _configuration.GetConnectionString("ZooDBConnection");

            // Open a connection to the database and execute the query
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Add parameters to the command to prevent SQL injection
                    myCommand.Parameters.AddWithValue("@enclosureName", newEnclosure.enclosureName);
                    myCommand.Parameters.AddWithValue("@enclosureType", newEnclosure.enclosureType);
                    myCommand.Parameters.AddWithValue("@builtDate", newEnclosure.builtDate);
                    myCommand.Parameters.AddWithValue("@cleaningScheduleStart", newEnclosure.cleaningScheduleStart);
                    myCommand.Parameters.AddWithValue("@cleaningScheduleEnd", newEnclosure.cleaningScheduleEnd);

                    // Execute the query (which in this case is an INSERT operation)
                    myCommand.ExecuteNonQuery();
                }
            }

            // Return a response indicating success
            return new JsonResult("New Enclosure added successfully");
        }


        [HttpPost]
        [Route("NewAnimal")]
        public JsonResult NewAnimal([FromBody] Animal newAnimal)
        {
            // Prepare the SQL query for inserting a new user must be same as database
            string query = "INSERT INTO animal (animal_name, animal_species, animal_gender, animal_DoB, animal_endangered, animal_DoA, animal_origin, life_stage) VALUES (@animalName, @animalSpecies, @animalGender, @animalDoB, @animalEndangered, @animalDoA, @animalOrigin, @lifeStage)";

            // Create a new DataTable to store the result (although in this case, there's no result to store)
            DataTable table = new DataTable();

            // Get the connection string from appsettings.json
            string sqlDataSource = _configuration.GetConnectionString("ZooDBConnection");

            // Open a connection to the database and execute the query
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    //Add parameters to the command to prevent SQL injection
                    myCommand.Parameters.AddWithValue("@animalName", newAnimal.animalName);
                    myCommand.Parameters.AddWithValue("@animalSpecies", newAnimal.animalSpecies);
                    myCommand.Parameters.AddWithValue("@animalGender", newAnimal.animalGender);
                    myCommand.Parameters.AddWithValue("@animalDoB", newAnimal.animalDoB);
                    myCommand.Parameters.AddWithValue("@animalEndangered", newAnimal.animalEndangered);
                    myCommand.Parameters.AddWithValue("@animalDoA", newAnimal.animalDoA);
                    myCommand.Parameters.AddWithValue("@animalOrigin", newAnimal.animalOrigin);
                    myCommand.Parameters.AddWithValue("@lifeStage", newAnimal.animalLifeStage);




                    // Execute the query (which in this case is an INSERT operation)
                    myCommand.ExecuteNonQuery();
                }
            }

            // Return a response indicating success
            return new JsonResult("New animal added");
        }

    }

}
