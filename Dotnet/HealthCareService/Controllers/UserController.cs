using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using HealthCareService.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace HealthCareService.Controllers
{
    [Authorize]
    [ApiController]
    public class UserController : ControllerBase
    {
        public ApplicationDbContext _context;
        public UserController(ApplicationDbContext context){
            _context=context;
        }
        [AllowAnonymous]
        [HttpPost("register")]
        public object Register([FromBody]ApplicationUser user){
            if(ModelState.IsValid){
                _context.User.Add(user);
                _context.SaveChanges();

                var data= new {message="Registration successful"};
               // Console.WriteLine(data);
                return data;
                }
                else{
                var data = new {message="Password or username policy failed"};
               // Console.WriteLine(data);
                return data;
                }

        }
        [AllowAnonymous]
        [HttpPost("signin")]
        public object signin([FromBody]ApplicationUser user1){
            Console.WriteLine("hello"+user1.user_email);
            var user = _context.User.SingleOrDefault(u=>u.user_email==user1.user_email && u.password==user1.password);
            if(user==null){
             var data = new {message="Username or Password is Incorrect."};
             return data;
            }
            else{
                  var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Keepksdjhfjksdhfklsdfhsdkljsdlfnhlsd");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] 
                {
                    new Claim(ClaimTypes.Email, user.user_email),
                  
                    
                }),
               
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            // Console.WriteLine("hello"+ClaimTypes.Role+"hello1"+ClaimTypes.Name);
            var token = tokenHandler.CreateToken(tokenDescriptor);
           var token1 = tokenHandler.WriteToken(token);
           // var ApplicationUserId = _httpContextAccessor.HttpContext.ApplicationUser.FindFirst(ClaimTypes.NameIdentifier).Value;

            var data = new  { success = true,
          message = "Authentication successful!",
          token = token1,
          id=user.Id};
                  return data;
        
            }
        }
        [Authorize]
        [HttpGet("viewprofile/{userId}")]
        public ApplicationUser GetUser(string userId){
            Console.WriteLine("hello1");
        ApplicationUser user = _context.User.SingleOrDefault(y=>y.Id==userId);
        Console.WriteLine(user.Id);
        
        // var data = new {
        //     user_name=user.user_name,user_email=user.user_email,user_dob=user.user_dob,user_mobile=user.user_mobile
        // };
        // user.user_dob=user.user_dob.Date;
        return user;
        }
        [Authorize]
        [HttpPut("editprofile/{userId}")]
        public ApplicationUser EditUser(string userId,[FromBody] ApplicationUser user1){
                ApplicationUser user = _context.User.SingleOrDefault(y=>y.Id==userId);
                user.user_email=user1.user_email;
                user.user_name=user1.user_name;
                // user.user_dob=user1.user_dob;
                user.user_mobile= user1.user_mobile;
                user.location=user1.location;
                _context.SaveChanges();
                Console.WriteLine(user.user_mobile);
                return user;
        }
         [Authorize]
        [HttpPost("patients/register")]
        public object PatientRegister([FromBody]Patient patient){
            if(ModelState.IsValid){
                DateTime today= DateTime.UtcNow;
               patient.registeredDate=today;
               Console.WriteLine(patient);
                _context.Patients.Add(patient);
                _context.SaveChanges();

                var data= new {message="Registration successful"};
               // Console.WriteLine(data);
                return data;
                }
                else{
                var data = new {message="Password or username policy failed"};
               // Console.WriteLine(data);
                return data;
                }

        }
        [Authorize]
        [HttpGet("patients/list/")]
        public List<Patient> getAllPatients(){
            return _context.Patients.ToList();
        }
        [Authorize]
        [HttpGet("patients/view/{Id}")]
        public Patient getSinglePatient(string Id){
            return _context.Patients.SingleOrDefault(x=>x.Id==Id);
        }
         [Authorize]
        [HttpPost("appointment/register")]
        public object bookAppointment([FromBody]Appointment appointment){
        if(ModelState.IsValid){
                DateTime today=DateTime.UtcNow;
               appointment.bookingTime=today;
                _context.Appointments.Add(appointment);
                _context.SaveChanges();

                var data= new {message="Registration successful"};
                return data;
                }
                else{
                var data = new {message="Registration failed"};
                return data;
                }

        }
        [Authorize]
        [HttpGet("appointment/list")]
        public List<Appointment> getAllAppointments(){
            return _context.Appointments.ToList();
        }
        [Authorize]
        [HttpGet("/appointment/view/{appointmentId}")]
        public Appointment GetAppointment(string appointmentId){
            var appointment = _context.Appointments.SingleOrDefault(y=>y.bookingId==appointmentId);
            return appointment;
        }
        [Authorize]
        [HttpGet("/appointment/list/{patientid}")]
        public List<Appointment> getAllAppointmensOfPatient(string patientid){
            var patients = _context.Appointments.Where(x=>x.patientId==patientid).ToList();
            return patients;
        }
        [Authorize]
        [HttpDelete("/appointment/delete/{appointmentId}")]
        public void deleteappointment(string appointmentId ){
        var appointment = _context.Appointments.SingleOrDefault(y=>y.bookingId==appointmentId);
            _context.Remove(appointment);
            _context.SaveChanges();

        }

        [AllowAnonymous]
        [HttpGet("database")]
        public void emptyDatabase(){
            _context.Database.EnsureDeleted();
        }
        [AllowAnonymous]
        [HttpGet("diseases")]
        public List<String> diseases(){
            List<String> data = new List<string>{"Adenovirus Infection","Asthma","Flu","fever, pain","acid reflex"};
           
                 return data;
        }

      
    }
}