import React from "react";
import { Button, Text, Input, TextInput } from "@mantine/core";
import { modals } from "@mantine/modals";
import ConnectionForm from "./ConnectionForm";

function ConnectionButton() {
  const openModal = () => {
    modals.open({
      title: "Create Connection",
      centered: true,
      size: "xl",
      children: (
        <ConnectionForm />
      ),
      closeOnClickOutside: true,
    });
  };

  return <Button onClick={openModal}> Create Connection </Button>;
}

export default ConnectionButton;
