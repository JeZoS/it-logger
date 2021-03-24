import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import {
  deleteLogs,
  setCurrent,
} from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log }) => {
  const dispatch = useDispatch();

  const del = () => {
    dispatch(deleteLogs(log.id));
    M.toast({ html: "Log Deleted" });
  };

  const cur = () => {
    dispatch(setCurrent(log));
  };

  return (
    <li className="collection-item">
      <div>
        <a
          onClick={cur}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span>{" "}
          last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">
            {log.date}
          </Moment>
        </span>
        <a
          href="#!"
          className="secondary-content"
          onClick={del}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.shape({}).isRequired,
};

export default LogItem;
