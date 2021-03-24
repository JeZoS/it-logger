import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch, useSelector } from "react-redux";
import { updateLog } from "../../actions/logActions";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState("");
  const [tech, setTech] = useState("");

  const dispatch = useDispatch();

  const log = useSelector((state) => state.log);
  const { techs } = useSelector((state) => state.tech);

  const { current } = log;

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "All Fields Are Required" });
    } else {
      dispatch(
        updateLog({ message, attention, tech }, current.id)
      );
    }
  };

  useEffect(() => {
    console.log(current);
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  return (
    <div
      id="edit-log-modal"
      className="modal"
      style={modalStyle}
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) =>
                setMessage(e.currentTarget.value)
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tect"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Tech
              </option>
              {techs.map((t) => (
                <option value={t.firstName} key={t.id}>
                  {t.firstName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default EditLogModal;
