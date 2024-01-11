import { Text } from "@mantine/core";
import React, { useState } from "react";
import myAxios from "../utils/axios";

const placeholder = [
  {name: "connection1", id: 1},
  {name: "connection2", id: 2},
  {name: "connection3", id: 3},
  {name: "connection4", id: 4},
  {name: "connection5", id: 5},
  {name: "connection6", id: 6},
  {name: "connection7", id: 7},
  {name: "connection8", id: 8},
  
]

function ConnectionsList() {
  const [connections, setConnections] = useState([]);

  useState(() => {
    myAxios.get("/api/connection-details/all").then((res) => {
      setConnections(res.data);
    });
  }, []);
  return (
    <div className="flex-1">
      <Text size="lg">Connections</Text>
      <ul>
        {connections.map((connection) => (
          <li key={connection.id}>{connection.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ConnectionsList;
