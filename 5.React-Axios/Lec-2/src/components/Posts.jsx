import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateApiData, setUpdateApiData] = useState({});

  useEffect(() => {
    const getPostData = async () => {
      try {
        const res = await getPost();
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPostData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      console.log(res);
      const updatedData = data.filter((curPost) => {
        return curPost.id !== id;
      });
      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateData = (curEle) => setUpdateApiData(curEle);

  return (
    <>
      <section className="form-section">
        <Form
          data={data}
          setData={setData}
          updateApiData={updateApiData}
          setUpdateApiData={setUpdateApiData}
        />
      </section>
      <section className="post-section">
        <ol>
          {data.map((curEle, index) => {
            const { id, title, body } = curEle;
            return (
              <li key={id}>
                <span className="post-number">{index + 1}</span>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button
                  onClick={() => {
                    handleUpdateData(curEle);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
