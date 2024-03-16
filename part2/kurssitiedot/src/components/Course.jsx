const Course = ({ course }) => {
  let totalExercisesInCourse = course.parts.reduce((accumulator, exercise) => accumulator += exercise.exercises, 0)
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(value =>
        <p key={value.id}>{value.name} {value.exercises}</p>
      )}
      <b>total of {totalExercisesInCourse} exercises</b>
    </div>
  );
};

export default Course
