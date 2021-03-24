import React from "react";
import { useDispatch } from "react-redux";
import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech }) => {
  const dispatch = useDispatch();

  const del = () => {
    dispatch(deleteTech(tech.id));
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i
            className="material-icons grey-text"
            onClick={del}
          >
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
