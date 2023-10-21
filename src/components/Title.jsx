const Title = (props) => {
  return (
    <div className="my-5">
      <h1 className="text-uppercase">{props.title}</h1>
      <p>{props.text}</p>
      <div className="d-flex justify-content-center">
        <hr className="border border-primary border-2 opacity-100 w-25 mb-4" />
      </div>
    </div>
  );
};

export default Title;
