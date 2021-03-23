import React, { useEffect, useState } from "react";
import PreLoader from "../layouts/PreLoader";
import LogItem from "./LogItem";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  useEffect(() => {
    getLogs();
    //exlint-disable-next-line
  }, []);

  if (loading) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
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
