import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTech } from "../../actions/techActions";
import TechItem from "./TechItem";

const TechListModal = () => {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const getTechs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/techs");
  //   const data = await res.json();
  //   setTechs(data);
  //   setLoading(false);
  // };

  const tech = useSelector((state) => state.tech);

  const { techs, loading } = tech;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTech());
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => (
              <TechItem key={tech.id} tech={tech} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
