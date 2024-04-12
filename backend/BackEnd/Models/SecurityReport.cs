namespace BackEnd.Models
{
    public class SecurityReport
    {
        public DateTime date { get; set; }
        public DateTime time { get; set; }
        public string eventDescription { get; set; }
        public string location { get; set; }
        public string severityLevel { get; set; }
    }
}