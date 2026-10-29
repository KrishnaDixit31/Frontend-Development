import { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData, updateApiData, setUpdateApiData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateApiData).length == 0;

  useEffect(() => {
    updateApiData &&
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAddData({
        title: updateApiData.title || "",
        body: updateApiData.body || "",
      });
  }, [updateApiData]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // add new data
  const addPostData = async () => {
    const res = await postData(addData);
    console.log(res);

    if (res.status == 201) {
      setData([res.data, ...data]);
      setAddData({ title: "", body: "" });
    }
  };

  // update data
  const updatePostData = async () => {
    try {
      const res = await updateData(updateApiData.id, addData);
      console.log(res);
      if (res.status == 200) {
        setData((prev) => {
          return prev.map((curEle) => {
            return curEle.id == res.data.id ? res.data : curEle;
          });
        });

        setAddData({ title: "", body: "" });
        setUpdateApiData({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  // form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action == "Add") {
      addPostData();
    } else if (action == "Edit") {
      updatePostData();
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Add Title"
            autoComplete="off"
            value={addData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            id="body"
            name="body"
            placeholder="Add Body"
            autoComplete="off"
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" value={isEmpty ? "Add" : "Edit"}>
            {isEmpty ? "Add" : "Edit"}
          </button>
        </div>
      </form>
    </section>
  );
};
