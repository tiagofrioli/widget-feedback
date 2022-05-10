import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import React from "react";
import WidgetForm from "../widgetForm/WidgetForm";

function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>
        {" "}
        <WidgetForm />{" "}
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}

export default Widget;
