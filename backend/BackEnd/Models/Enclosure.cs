namespace BackEnd.Models
{
    public class Enclosure
    {
        public string enclosureName { get; set; }
        public string enclosureType { get; set; }
        public DateTime builtDate { get; set; }
        public DateTime cleaningScheduleStart { get; set; }
        public DateTime cleaningScheduleEnd { get; set; }
    }
}
