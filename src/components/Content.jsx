export const Content = (props) => {
  return (
    <>
      {props.course.parts.map((el, key) => {
        return (
          <div key={key}>
            {el.name} {el.exercises}
          </div>
        );
      })}
    </>
  );
};
