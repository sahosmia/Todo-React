export function HeadingTitle(props) {
  return (
    <h4 className="title">
      {props.title} ({props.length})
    </h4>
  );
}
