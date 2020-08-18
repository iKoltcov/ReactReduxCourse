using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StarWarsApi.Web.Abstraction.ApiModels;

namespace StarWarsApi.Controllers
{    
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {
        private static int currentId { get; set; } = 1;

        
        [HttpGet]
        public async Task<UserInfo> GetCurrentUser()
        {
            await HttpContext.Session.LoadAsync();
            var result = HttpContext.Session.GetString(nameof(UserInfo));

            if (string.IsNullOrWhiteSpace(result))
            {
                return null;
            }
            
            return JsonConvert.DeserializeObject<UserInfo>(result);
        }

        [HttpGet("login")]
        public async Task Login()
        {         
            HttpContext.Session
                .SetString(nameof(UserInfo), JsonConvert.SerializeObject(new UserInfo()
                    {
                        Id = currentId++,
                        Name = "admin"
                    }));

            await HttpContext.Session.CommitAsync();
        }
        
        [HttpGet("logout")]
        public async Task Logout()
        {         
            HttpContext.Session.SetString(nameof(UserInfo), "");
            await HttpContext.Session.CommitAsync();
        }
    }
}