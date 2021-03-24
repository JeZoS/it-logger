import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from "../../actions/logActions";
import PreLoader from "../layouts/PreLoader";
import LogItem from "./LogItem";

const Logs = () => {
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  const log = useSelector((state) => state.log);

  const { logs, loading } = log;

  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/logs");
  //   const data = await res.json();
  //   // setLogs(data);
  //   setLoading(false);
  // };

  console.log(logs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogs());
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {logs === null || logs.length === 0 ? (
        <p className="center">No logs</p>
      ) : (
        logs.map((log) => (
          <LogItem key={log.id} log={log} />
        ))
      )}
    </ul>
  );
};

export default Logs;
