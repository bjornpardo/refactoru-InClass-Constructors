// The Student Class

var Student =  function () {
	this.name = name;
	this.grades = [];

// Prompts the user for the student's grade
	this.takeTest = function () {
		var score = prompt('What did you receive on the test?');
	this.grades.push(score);
	};
	
// Returns the average of all grades	
	this.currentGrade = function() {
		var total = 0;
		for(var i=0; i<this.grades.length; i++) {
			total+= this.grades[i];
		}
		return total/this.grades.length;
	};
};

// 1. Define a classroom class which contains a list 
// of students, a subject, and a teacher.
// 2. Define a Teacher class which contains a name and 
// an array of subjects that they know how to teach.

var Classroom =  function (teacher, subject) {
	this.students = [];
	this.subject = subject;
	this.teacher = teacher;
};

var Teacher = function(name, subjects) {
	this.name = name;
	this.subjects = subjects;
};

var tom = new Student('Tom');
var sarah = new Student('Sarah');

tom.grades.push(95);
tom.grades.push(85);
tom.grades.push(100);

sarah.grades.push(100);
sarah.grades.push(101);
sarah.grades.push(100);

var t = new Teacher ('Raine', ['Java', 'C++', 'CSS' ]);

var refactoru = new Classroom(t, 'Web');






