import React from "react";
import { FaRegBookmark, FaRegCommentDots } from "react-icons/fa";

const ProblemCard = () => {
  return (
    <div className="border border-border bg-[#111] rounded-md p-4 flex flex-col gap-2 hover:border-primary/50 transition-all duration-200">
      {/* Header row (user + Save button) */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h2 className="font-medium text-blue-400 hover:underline cursor-pointer">
            darklife/darkriscv
          </h2>
          <p className="text-sm text-foreground">
            <span className="font-semibold">opensource</span> RISC‑V CPU core implemented in Verilog from scratch in one night!
          </p>
        </div>

        <button className="flex items-center gap-1 text-xs border border-border px-2 py-1 rounded-md hover:bg-border/20 text-muted-foreground transition">
          <FaRegBookmark className="text-sm" />
          Save
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2 text-xs">
        {["fpga", "core", "riscv", "verilog", "risc-v"].map((tag, i) => (
          <span
            key={i}
            className="bg-muted text-muted-foreground px-2 py-0.5 rounded-md cursor-pointer hover:text-foreground hover:bg-border/50 transition"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer info */}
      <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400" />
          <span>Verilog</span>
          <span className="flex items-center gap-1 pl-3">
            <FaRegCommentDots />
            2.5k
          </span>
          <span className="pl-3">Updated 3 days ago</span>
        </div>
      </div>

      {/* Optional Subsection */}
      <div className="mt-3 border-t border-border pt-3 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="hover:text-foreground cursor-pointer">Like</span>
          <span className="hover:text-foreground cursor-pointer">Comments</span>
          <span className="hover:text-foreground cursor-pointer">Solutions</span>
        </div>
        <button className="flex items-center gap-1 border px-2 py-0.5 rounded-md border-border hover:bg-border/30 transition">
          <FaRegBookmark /> Save
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;