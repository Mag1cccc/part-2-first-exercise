export const Total = (props) => {
  const total = props.course.parts.reduce((previous, current) => {
    return previous + current.exercises;
  }, 0);
  return <h2> total of {total} exercises </h2>;
};
