var schedule = [];
schedule = JSON.parse(localStorage.getItem("schedules"));
if (schedule == null) {
    schedule = [];
};
// console.log(schedule, typeof schedule)
// console.log(localStorage.getItem("schedules"), typeof localStorage.getItem("schedules"))
// console.log(JSON.parse(localStorage.getItem("schedules")), typeof JSON.parse(localStorage.getItem("schedules")))

$(document).ready(function() {
    //Get time and set to variable
    var currenttime = moment().format("dddd MMMM Do");
    // Add date to currentDay
    $("#currentDay").text(currenttime);
    // Add color to text blocks
    $("textarea").each(function (){
        // Had to change attr to a number and time to a number to compare properly
        var timeblock = Number($(this).attr("value"));
        // console.log(this);
        // console.log(timeblock, typeof timeblock);
        currenthour = Number(moment().format("k"));
        // console.log(currenthour, typeof currenthour);

        if (currenthour < timeblock) {
            $(this).addClass("future");
        } else if (currenthour === timeblock) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    });

    $("textarea").each(function () {
        index = $(this).attr("value");
        // console.log("Index var is set to " + index);
        $(this).text(schedule[index]);
    });

$(".time-block").on("click", ".saveBtn", function () {
    // console.log("SaveClicked")
    // console.log($(this))
    // console.log($(this).prev().val())
    // console.log($(this).prev().attr("value"))

    arrayindex = $(this).prev().attr("value")
    // console.log("Var arrayindex is set to " + arrayindex)

    arraytextarea = $(this).prev().val()
    // console.log("Var arraytextarea is set to " + arraytextarea)

    schedule[arrayindex] = arraytextarea
    // console.log("Schedule array now looks like " + schedule)

    localStorage.setItem("schedules", JSON.stringify(schedule));

});
    





});