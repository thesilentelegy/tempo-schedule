// Data

// Monday
var mon = [
	{startTime: "7:30", endTime: "8:20", name: "Flag Ceremony", room: "Gym / Quad"},
	{startTime: "8:20", endTime: "9:10", name: "SCALE", room: "Research Lab"},
	{startTime: "9:10", endTime: "9:30", name: "Break", room: "No Room"},
	{startTime: "9:30", endTime: "10:20", name: "Free", room: "No Room"},
	{startTime: "10:20", endTime: "11:10", name: "Social Science 5", room: "Room 216"},
	{startTime: "11:10", endTime: "12:00", name: "Lunch", room: "No Room"},
	{startTime: "12:00", endTime: "12:50", name: "English 5", room: "Room 216"},
	{startTime: "12:50", endTime: "1:40", name: "Mathematics 5", room: "Room 216"},
	{startTime: "1:40", endTime: "2:30", name: "Biology 3 (Laboratory)", room: "Biology Lab"},
	{startTime: "2:30", endTime: "2:50", name: "Break", room: "No Room"},
	{startTime: "2:50", endTime: "3:40", name: "Biology 3 (Laboratory)", room: "Biology Lab"},
	{startTime: "3:40", endTime: "4:30", name: "Biology 3 (Laboratory)", room: "Biology Lab"}
];
// Tuesday
var tue = [
	{startTime: "7:30", endTime: "8:20", name: "Filipino 5", room: "Room 217"},
	{startTime: "8:20", endTime: "9:10", name: "English 5", room: "Speech Lab"},
	{startTime: "9:10", endTime: "9:30", name: "Break", room: "No Room"},
	{startTime: "9:30", endTime: "10:20", name: "Free", room: "No Room"},
	{startTime: "10:20", endTime: "11:10", name: "Free", room: "No Room"},
	{startTime: "11:10", endTime: "12:00", name: "Lunch", room: "No Room"},
	{startTime: "12:00", endTime: "12:50", name: "Mathematics 5", room: "Room 216"},
	{startTime: "12:50", endTime: "1:40", name: "Free", room: "No Room"},
	{startTime: "1:40", endTime: "2:30", name: "Free", room: "No Room"},
	{startTime: "2:30", endTime: "2:50", name: "Break", room: "No Room"},
	{startTime: "2:50", endTime: "3:40", name: "Free", room: "No Room"},
	{startTime: "3:40", endTime: "4:30", name: "Social Science 5", room: "Room 216"}
];
// Wednesday
var wed = [
	{startTime: "7:30", endTime: "8:20", name: "Social Science 5", room: "Room 216"},
	{startTime: "8:20", endTime: "9:10", name: "Free", room: "No Room"},
	{startTime: "9:10", endTime: "9:30", name: "Break", room: "No Room"},
	{startTime: "9:30", endTime: "10:20", name: "Free", room: "No Room"},
	{startTime: "10:20", endTime: "11:10", name: "Filipino 5", room: "Room 216"},
	{startTime: "11:10", endTime: "12:00", name: "Lunch", room: "No Room"},
	{startTime: "12:00", endTime: "12:50", name: "Chemistry 3 (Laboratory)", room: "Chemistry Lab"},
	{startTime: "12:50", endTime: "1:40", name: "Chemistry 3 (Laboratory)", room: "Chemistry Lab"},
	{startTime: "1:40", endTime: "2:30", name: "Chemistry 3 (Laboratory)", room: "Chemistry Lab"},
	{startTime: "2:30", endTime: "2:50", name: "Break", room: "No Room"},
	{startTime: "2:50", endTime: "3:40", name: "Free", room: "No Room"},
	{startTime: "3:40", endTime: "4:30", name: "SCALE", room: "Research Lab"}
];
// Thursday
var thu = [
	{startTime: "7:30", endTime: "8:20", name: "Free", room: "No Room"},
	{startTime: "8:20", endTime: "9:10", name: "Chemistry 3 (Lecture)", room: "Room 217"},
	{startTime: "9:10", endTime: "9:30", name: "Break", room: "No Room"},
	{startTime: "9:30", endTime: "10:20", name: "Chemistry 3 (Lecture)", room: "Room 217"},
	{startTime: "10:20", endTime: "11:10", name: "Free", room: "No Room"},
	{startTime: "11:10", endTime: "12:00", name: "Lunch", room: "No Room"},
	{startTime: "12:00", endTime: "12:50", name: "Mathematics 5", room: "Room 216"},
	{startTime: "12:50", endTime: "1:40", name: "STR 2", room: "MMC"}
];
// Friday
var fri = [
	{startTime: "7:30", endTime: "8:20", name: "Filipino 5", room: "Room 217"},
	{startTime: "8:20", endTime: "9:10", name: "English 5", room: "Room 216"},
	{startTime: "9:10", endTime: "9:30", name: "Break", room: "No Room"},
	{startTime: "9:30", endTime: "10:20", name: "Biology 3 (Lecture)", room: "Room 216"},
	{startTime: "10:20", endTime: "11:10", name: "Biology 3 (Lecture)", room: "Room 216"},
	{startTime: "11:10", endTime: "12:00", name: "Lunch", room: "No Room"},
	{startTime: "12:00", endTime: "12:50", name: "Free", room: "No Room"},
	{startTime: "12:50", endTime: "1:40", name: "STR 2", room: "MMC"},
	{startTime: "1:40", endTime: "2:30", name: "STR 2", room: "MMC"},
	{startTime: "2:30", endTime: "2:50", name: "Break", room: "No Room"},
	{startTime: "2:50", endTime: "3:40", name: "Free", room: "No Room"},
	{startTime: "3:40", endTime: "4:30", name: "SCALE", room: "Research Lab"}
];

// App Instance
var Tempo = new Vue({
	el: '#app',
	data: {
		navItems: [
			{id: 0, text: "M"},
			{id: 1, text: "T"},
			{id: 2, text: "W"},
			{id: 3, text: "T"},
			{id: 4, text: "F"}
		],
		currentDay: 0,
		dayList: [
			{
				id: 0,
				day: "Monday",
				eventList: mon
			},
			{
				id: 1,
				day: "Tuesday",
				eventList: tue
			},
			{
				id: 2,
				day: "Wednesday",
				eventList: wed
			},
			{
				id: 3,
				day: "Thursday",
				eventList: thu
			},
			{
				id: 4,
				day: "Friday",
				eventList: fri
			}
		]
	}
});

// Gestures
var gestureEl = document.querySelector('.events-list');
var gesture = new Hammer(gestureEl);

gesture.on('swipeleft', function() {
	Tempo.currentDay = Tempo.currentDay == 4 ? Tempo.currentDay : ++Tempo.currentDay;
});

gesture.on('swiperight', function() {
	Tempo.currentDay = Tempo.currentDay == 0 ? Tempo.currentDay : --Tempo.currentDay;
});
