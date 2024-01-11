import { Button, Text, Input, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import { default as axios } from "../utils/axios";
import React from "react";

function ConnectionForm() {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      host: '',
      port: '',
    },
  });

  const submitted = (v) => {
    console.log(v);
    axios.post("/saveUser", v)
  }

  return (
    <form onSubmit={form.onSubmit((v) => submitted(v))}>
    <div className="">
      <div>
        <div className="flex gap-2 mt-3 justify-between flex-wrap">
          <TextInput label="Username" placeholder="ASD" className="flex-1" {...form.getInputProps('username')} />
          <TextInput label="Password" type="password" placeholder="***" className="flex-1" {...form.getInputProps('password')} />
        </div>

        <div className="flex gap-2 mt-3 justify-between flex-wrap">
          <TextInput label="Host" placeholder="127.0.0.1" className="flex-1" {...form.getInputProps('host')}/>
          <TextInput label="Port" type="number" placeholder="8080" className="flex-1" {...form.getInputProps('port')}/>
        </div>
      </div>
      <Button className="mt-3" color="green" type="submit">
        Create
      </Button>
    </div>
    </form>
  );
}

export default ConnectionForm;
