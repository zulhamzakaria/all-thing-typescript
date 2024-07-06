type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = ({ status }: StatusProps) => {
  let message = "";

  switch (status) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data fetched successfully...";
      break;
    default:
      message = "Error while fetching data...";
      break;
  }

  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};
