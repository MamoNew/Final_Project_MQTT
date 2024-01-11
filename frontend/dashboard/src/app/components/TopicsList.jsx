import { Text } from "@mantine/core";
import React, { useState } from "react";
import myAxios from "../utils/axios";

const data1 = [
  "topic1",
  "topic2",
  "topic3",
  "topic4",
  "topic5",
  "topic6",
  "topic7",
  "topic8",
]

function TopicsList() {
  const [topics, setTopics] = useState([]);

  useState(() => {
    myAxios.get("/api/mqtt-data/distinct-topics").then((res) => {
      setTopics(res.data);
    });
  }, []);
  return (
    <div className="flex-1">
      <Text size="lg">Topics</Text>
      <ul>
        {topics.map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopicsList;
