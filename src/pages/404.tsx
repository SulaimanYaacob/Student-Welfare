import {  Button,Stack ,Text,Image , Title } from "@mantine/core";
import React from "react";

export default function ErrorPage () {
    return (
    <Stack h='100vh' align='center' justify='center'>
    <div style={{ width: 740, marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        radius="md"
        src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1921.jpg?w=996&t=st=1671520873~exp=1671521473~hmac=d247a83179c88cedbf282bacd33389e9532f9085cac5c942499146821cb4249d"
        alt="Random unsplash image"
      />
    </div>
        <Title>Oops...</Title>
        <Text>Sorry, the page not found</Text>
        <Button color="primary.0" component="a" href="/">Go back Home</Button>
    </Stack>
    // </Center>
    )
}