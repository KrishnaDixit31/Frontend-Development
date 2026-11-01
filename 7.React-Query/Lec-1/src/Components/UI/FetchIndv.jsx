import { useQuery } from "@tanstack/react-query";
import { Loading } from "./Loader";
import { NavLink, useParams } from "react-router-dom";
import { fetchInvPost } from "../../api/Api";

export const FetchIndv = () => {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchInvPost(id),
  });

  if (isPending) return <Loading />;
  if (isError) return <p>Error: {error.message || "Something Went Wrong!"}</p>;

  return (
    <div className="section-ind container">
      <h1>Post ID Number - {id}</h1>
      <div className="items">
        <p className="index">ID: {data.id}</p>
        <p className="title">Title: {data.title}</p>
        <p className="body">Body: {data.body}</p>
      </div>
      <NavLink to="/rq">
        <button>Go Back</button>
      </NavLink>
    </div>
  );
};
