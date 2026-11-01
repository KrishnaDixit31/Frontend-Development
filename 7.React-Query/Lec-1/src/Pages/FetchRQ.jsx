import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, fetchPost, updatePost } from "../api/Api";
import { Loading } from "../Components/UI/Loader";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRQ = () => {
  const [PageNumber, setPageNumber] = useState(0);
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", PageNumber],
    queryFn: () => fetchPost(PageNumber),
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", PageNumber], (curEle) => {
        return curEle?.filter((post) => post.id !== id);
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apiData, postId) => {
      console.log(apiData, postId);

      queryClient.setQueryData(["posts", PageNumber], (postsData) => {
        return postsData?.map((curPost) => {
          return curPost.id === postId
            ? { ...curPost, title: apiData.data.title }
            : curPost;
        });
      });
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {error.message || "Something Went Wrong!"}</p>;

  return (
    <>
      <section className="container">
        <h1>Fetching Using ReactQuery</h1>
        <ul className="items-container">
          {data?.map((curEle) => {
            const { id, title, body } = curEle;
            return (
              <li className="items" key={id}>
                <NavLink to={`/rq/${id}`}>
                  <div>
                    <p className="index">{id}</p>
                    <p className="title">{title}</p>
                    <p className="body">{body}</p>
                  </div>
                </NavLink>
                <div className="btn-section">
                  <button onClick={() => deleteMutation.mutate(id)}>
                    Delete
                  </button>
                  <button onClick={() => updateMutation.mutate(id)}>
                    Update
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="page-section">
          <button
            disabled={PageNumber === 0 ? true : false}
            onClick={() => setPageNumber(PageNumber - 3)}
          >
            Prev
          </button>
          <p>{PageNumber / 3 + 1}</p>
          <button onClick={() => setPageNumber(PageNumber + 3)}>Next</button>
        </div>
      </section>
    </>
  );
};
