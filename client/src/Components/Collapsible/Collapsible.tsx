import React, { useEffect, useRef, useState } from "react";
import "./Collapsible.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Collapse } from "bootstrap";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Collapsible = (props: Props) => {
  const collapsibleContainer = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (collapsibleContainer.current) {
      const bsCollapse = new Collapse(collapsibleContainer.current, {
        toggle: false,
      });
      open ? bsCollapse.show() : bsCollapse.hide();
    }
  }, [collapsibleContainer, open, setOpen]);

  return (
    <div
      role="button"
      className="mb-5"
      onClick={() => setOpen((toggle) => !toggle)}
    >
      <div className={`title${open ? " open" : ""}`}>
        {open ? <FaMinus /> : <FaPlus />}
        <h3>{props.title}</h3>
      </div>
      <div className="collapse" ref={collapsibleContainer}>
        {props.children}
      </div>
    </div>
  );
};
