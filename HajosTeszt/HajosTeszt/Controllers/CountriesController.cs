using HajosTeszt.JokeCountries;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/name")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        // GET: api/name
        [HttpGet]
        public IEnumerable<Country> Get()
        {
            CountriesContext context = new CountriesContext();
            return context.Countries.ToList();
        }

        // GET api/name/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            CountriesContext context = new CountriesContext();
            var keresettOrszag = (from x in context.Countries
                                  where x.CountriesSk == id
                                  select x.Name).FirstOrDefault();
            return keresettOrszag;
        }

        [HttpGet]
        [Route("countries/count")]
        public int M4() //Tetszőleges metódusnév
        {
            CountriesContext context = new CountriesContext();
            int orszagokSzama = context.Countries.Count();

            return orszagokSzama;
        }

        // POST api/name
        [HttpPost]
        public void Post([FromBody] Country ujOrszag)
        {
            CountriesContext context = new CountriesContext();
            context.Countries.Add(ujOrszag);
            context.SaveChanges();
        }

        // PUT api/<CountriesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/name/228
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            CountriesContext context = new CountriesContext();
            var torlendoOrszag = (from y in context.Countries
                                  where y.CountriesSk == id
                                  select y).FirstOrDefault();
            context.Remove(torlendoOrszag);
            context.SaveChanges();
        }
    }
}
