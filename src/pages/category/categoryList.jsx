import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCategories, selectCategories, selectCategory, selectSelectedCategory,} from "./categorySlice";

export default function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const selected = useSelector(selectSelectedCategory);

  useEffect(() => {
    dispatch(fetchCategories());
}, [dispatch]);

  return (
    <div className="d-flex flex-wrap gap-2 my-3">
      <button
        onClick={() => dispatch(selectCategory(null))}
        className={`btn ${selected === null ? "btn-warning" : "btn-outline-warning"}`} style={{color:"#067f7b"}}>
        All
      </button>

      {categories.map((c) => (
        <button
          key={c}
          onClick={() => dispatch(selectCategory(c))}
          className={`btn ${selected === c ? "btn-warning" : "btn-outline-warning"}`} style={{color:"#067f7b"}}>
          {c}
        </button>
      ))}
    </div>
  );
}
