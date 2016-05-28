

function displayWork()  {
for (job in work.jobs) {
        //create new div for work experience.
$("#workExperience").append(HTMLworkStart)
        //concat employer and title.
var formattedEmployer = "#HTMLworkEmployer".replace("%data%",work.jobs[job].employer);
var formattedTitle = "#HTMLworkTitle".replace("%data%",work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$("#.work-entry:last").append(formattedEmployerTitle);

var formattedDates = "#HTMLworkDates".replace("%data%",work.jobs[job].dates);
$("#.work-entry:last").append(formattedDates)

var formattedLocation = "#HTMLworkLocation".replace("%data",work.jobs[job].location);
$("#.work-entry:last").append(formattedLocation)

var formattedDescription = "#HTMLworkDescription".replace("%data",work.jobs[job].description);
$("#.work-entry:last").append(formattedDescription)
}








