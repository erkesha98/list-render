import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const category = props.category;
  const itemList = props.items;

  //   fruits.sort((a, b) => b.name.localeCompare(a.name));REVERSE ALPHABETICAL ORDER
  // fruits.sort((a,b)=>a.name.localeCompare(b.name));
  // fruits.sort((a,b)=> a.calories-b.calories); ASCENDING ORDER OF CALORIES
  // fruits.sort((a,b)=> b.calories-a.calories);DESCENDING BY CALORIES

  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <div>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </div>
  );
};
List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
    category:"Category",
    items:[],
};
export default List;
