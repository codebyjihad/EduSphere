import React from "react";
import { FaTrophy } from "react-icons/fa";
import { categories, helpers } from "./rightPanel";
import Image from "next/image";


const RightPanel = () => {

  return (
    <div className="w-72 h-screen bg-background p-4 flex flex-col gap-4 overflow-y-auto border-l border-border">
      <section className="border border-border rounded-lg p-4 space-y-3">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li
              key={i}
              className="flex items-center justify-between text-sm text-foreground/90"
            >
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.color}`}></span>
                <span>{cat.label}</span>
              </div>
              <span className="text-muted-foreground text-xs">{cat.count}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Top Helpers */}
      <section className="border border-border rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <FaTrophy className="text-yellow-400" />
          <h3>Top Helpers</h3>
        </div>
        <ul className="space-y-2">
          {helpers.map((user, i) => (
            <li key={i} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <Image src={user.img} alt={user.name} width={32} height={32} className="rounded-full" />
                <span className="text-foreground/90">{user.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground text-xs">{user.points}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${user.color}`}></span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="border border-border rounded-lg p-4 space-y-2">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          Stats
        </h3>
        <div className="flex justify-between text-sm">
          <span>Total problems</span>
          <span>403</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Solved</span>
          <span className="text-green-400 font-medium">271</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Unsolved</span>
          <span className="text-amber-400 font-medium">132</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Active users</span>
          <span className="text-blue-400 font-medium">218</span>
        </div>
      </section>
    </div>
  );
};

export default RightPanel;