import React from "react";

interface EmojiPickerProps {
  children: React.ReactNode;
  getValue?: (emoji: string) => void;
}

const EmojiPicker = () => {
  return <div>EmojiPicker</div>;
};

export default EmojiPicker;
