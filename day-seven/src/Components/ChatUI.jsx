import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, LogOut } from "lucide-react";

export default function ChatUI(props) {
  console.log(props.messages)
  return (
    <Card className="flex flex-col w-[390px] bg-black text-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center  mr-3">
            <img src="src/assets/user.png" alt="User" />
          </div>
          <div>
            <p className="font-semibold">Chat room</p>
            <p className="text-sm text-gray-400">Develop by Yoni</p>
          </div>
        </div>
        <LogOut onClick={props.signOut} className="cursor-pointer" />
      </div>
      <CardContent className="flex-1 space-y-3 overflow-y-auto">
        {props.messages &&
          props.messages.map((msg, index) => (
            <div key={index} className="flex items-start">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center  mr-3">
                <img src={msg.avatar ?? `src/assets/user.png`} alt="User Avatar" className="rounded-full" />
              </div>
              <div className="flex-1 p-2 rounded-lg bg-gray-700">
                <p className="font-bold">{msg.name}</p>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        <span ref={props.scroll}></span>
      </CardContent>

      <div className="flex items-center mt-3">
        <Input
          className="flex-1 bg-gray-800 border-none text-white"
          placeholder="Type your message..."
          onChange={props.handleOnChange}
          value={props.inputMessage}
        />
        <Button variant="ghost" onClick={props.sendMessage}>
          <Send className="w-5 h-5 text-gray-400" />
        </Button>
      </div>
    </Card>
  );
}
