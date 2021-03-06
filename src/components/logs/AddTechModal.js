import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch } from "react-redux";
import { addTech } from "../../actions/techActions";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();
  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "All Fields Are Required" });
    } else {
      // console.log("bitch");
      dispatch(addTech({ firstName, lastName }));
    }
  };

  return (
    <div id="tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.currentTarget.value)
              }
            />
            <label htmlFor="firstname">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={(e) =>
                setLastName(e.currentTarget.value)
              }
            />
            <label htmlFor="firstname">Last Name</label>
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
    </div>
  );
};

export default AddTechModal;
