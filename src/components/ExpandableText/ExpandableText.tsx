import React, { useState } from "react";
interface Props {
  maxCount?: number;
  children: string;
}

const ExpandableText = ({ children, maxCount = 20 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxCount) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxCount);

  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
