import logo from "./logo.svg";
import "./App.css";
import { Container, Text } from "@mantine/core";
import ConnectionButton from "./app/components/ConnectionButton";
import UpperStats from "./app/components/UpperStats";
import ConnectionsList from "./app/components/ConnectionsList";
import TopicsList from "./app/components/TopicsList";

function App() {
  return (
    <div className="p-4">
      <div className="flex mb-4 justify-between">
        <Text size="xl" weight={700}>
          Dashboard
        </Text>
        <ConnectionButton />
      </div>
      <UpperStats />
      <div className="flex mt-4 gap-4">
        <ConnectionsList className="flex-1" />
        <TopicsList className="flex-1"/>
      </div>
    </div>
  );
}

export default App;
