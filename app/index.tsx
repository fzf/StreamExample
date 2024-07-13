import {
  Chat,
  OverlayProvider,
  ChannelList
} from 'stream-chat-expo'
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { StreamChat } from 'stream-chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const chatClient = StreamChat.getInstance('a6jvt562ymsm');

const user = {
  id: 'fzf',
  name: 'fzf',
}

export default function Index() {
  const [clientIsReady, setClientIsReady] = useState(false);

  useEffect(() => {
    const setupClient = async () => {
      try {
        chatClient.connectUser(user, "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZnpmIn0.Q4FDEN5eg4akGEUO1uOPTYsQrUYojwnajJxTEk5YAnQ");
        setClientIsReady(true);

        // connectUser is an async function. So you can choose to await for it or not depending on your use case (e.g. to show custom loading indicator)
        // But in case you need the chat to load from offline storage first then you should render chat components
        // immediately after calling `connectUser()`.
        // BUT ITS NECESSARY TO CALL connectUser FIRST IN ANY CASE.
      } catch (error) {
        if (error instanceof Error) {
          console.error(`An error occurred while connecting the user: ${error.message}`);
        }
      }
    };

    // If the chat client has a value in the field `userID`, a user is already connected
    // and we can skip trying to connect the user again.
    if (!chatClient.userID) {
      setupClient();
    }
  }, []);

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <OverlayProvider>
          <Chat client={chatClient}>
            <ChannelList />
          </Chat>
        </OverlayProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
