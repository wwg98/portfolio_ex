import { useNavigate } from "react-router";
function Pagination({ maxid, id, onChangeMode }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        className="image-button"
        onClick={() => {
          if (Number(id) > 1) {
            const prevId = id - 1;
            onChangeMode(prevId);
            navigate(`/${prevId}`);
          }
        }}>
        <img src="images/left.png" alt="leftbtn" className="button-image" />
      </button>
      <button
        type="button"
        className="image-button"
        onClick={() => {
          if (Number(id) < maxid) {
            const nextId = id + 1;
            onChangeMode(nextId);
            navigate(`/${nextId}`);
          }
        }}>
        <img src="images/right.png" alt="rightbtn" className="button-image" />
      </button>
    </>
  );
}

export default Pagination;
