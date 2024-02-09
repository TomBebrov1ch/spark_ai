import { HorizontalMenu } from "@features/HorizontalMenu/ui";
import { Navigation } from "@widgets/Navigation/ui";
import { ChatWindow } from "@widgets/ChatWindow/ui";

import "../../src/shared/styles/global.scss";

const ChatsPage = () => {
  return (
    <div className="flex">
      <Navigation />
      <ChatWindow />
    </div>
  );
};

export default ChatsPage;
