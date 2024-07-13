import {
  Chat,
  useCreateChatClient,
  ChannelList
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = 'a6jvt562ymsm';
const userId = 'fzf';
const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZnpmIn0.Q4FDEN5eg4akGEUO1uOPTYsQrUYojwnajJxTEk5YAnQ";

export default function RootLayout() {
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: { id: userId },
  });

  if (!client) return <div>Loading...</div>;

  return (
    <Chat client={client}>
      <ChannelList />
    </Chat>
  );
};

