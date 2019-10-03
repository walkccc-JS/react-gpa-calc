const calculateGPA = courses => {
  let grade = 0.0;
  let credits = 0.0;

  courses.forEach(course => {
    if (course.counted) {
      grade += course.grade * course.credits;
      credits += course.credits;
    }
  });

  return { gpa: grade / credits || 0, credits };
};

export { calculateGPA };
