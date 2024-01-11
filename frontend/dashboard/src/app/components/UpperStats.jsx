import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
  rem,
} from "@mantine/core";
import {
  IconAddressBook,
  IconArticle,
  IconCirclesRelation,
} from "@tabler/icons-react";
import { useState } from "react";
import myAxios from "../utils/axios";

const icons = {
  topic: IconArticle,
  host: IconAddressBook,
  connection: IconCirclesRelation,
};

const data1 = [
  {
    label: "Connections",
    stats: "55",
    progress: 100,
    color: "teal",
    icon: "connection",
  },
  {
    label: "Topics",
    stats: "2",
    progress: 100,
    color: "blue",
    icon: "topic",
  },
  {
    label: "Distinct Hosts",
    stats: "4",
    progress: 100,
    color: "red",
    icon: "host",
  },
];



export function StatsRing() {
  const [data, setData] = useState([]);
  useState(() => {
    myAxios.get("/api/connection-details/all").then((res) => {
      setData([...data, {
        label: "Connections",
        stats: res.data.length,
        progress: 100,
        color: "teal",
        icon: "connection",
      }])
    })
    myAxios.get("/api/connection-details/distinct-host-names").then((res) => {
      setData([...data, {
        label: "Distinct Hosts",
        stats: res.data.length,
        progress: 100,
        color: "red",
        icon: "host",
      }])
    })
    myAxios.get("/api/mqtt-data/distinct-topics").then((res) => {
      setData([...data, {
        label: "Topics",
        stats: res.data.length,
        progress: 100,
        color: "blue",
        icon: "topic",
      }])
    })
  }, []);
  const stats = data1.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={1.5}
                />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>;
}
export default StatsRing;
