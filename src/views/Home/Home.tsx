import { ReactElement } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Container from "@/components/Container";
import { Button, IconButton, TextField } from "@mui/material";
import ChatItem from "@/components/ChatItem";
import MoonIcon from "@/assets/icons/moon.svg?react";
import ThemedIcon from "@/components/ThemedIcon";

function Home(): ReactElement {
  const buttonValue = "Hi there! How can I help you?";
  return (
    <section className="flex w-full">
      <Container>
        <div className="flex flex-col justify-end w-full">
          <ThemeToggle className="flex flex-row justify-end w-full " />
          <div className="flex flex-col gap-6 items-start">
            <TextField placeholder="Write a question..." />
            <ChatItem className="cursor-pointer p-4">
              {buttonValue}
              <ThemedIcon icon={<MoonIcon />} />
            </ChatItem>
            <Button>New chat</Button>
            <IconButton>
              <ThemedIcon icon={<MoonIcon />} />
            </IconButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Home;
