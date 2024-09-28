"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ShatteredGlassTransition = () => {
  const pathname = usePathname();
  const [shards, setShards] = useState([]);

  useEffect(() => {
    const generateShards = () => {
      const newShards = [];
      const numShards = 20;
      for (let i = 0; i < numShards; i++) {
        newShards.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          rotation: Math.random() * 360,
          scale: Math.random() * 1 + 1,
        });
      }
      setShards(newShards);
    };

    generateShards();
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="fixed inset-0 pointer-events-none z-40">
          {shards.map((shard, index) => (
            <motion.div
              key={index}
              className="absolute bg-[#20777f] opacity-30"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                width: "200px",
                height: "200px",
                left: `${shard.x}%`,
                top: `${shard.y}%`,
              }}
              initial={{ opacity: 0, scale: shard.scale, rotate: shard.rotation }}
              animate={{
                opacity: [0, 1, 0],
                scale: [shard.scale, shard.scale * 1.2, 0],
                rotate: [shard.rotation, shard.rotation + 45, shard.rotation + 90],
                x: [0, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
                y: [0, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          ))}
        </div>
        <motion.div
          className="fixed inset-0 bg-black pointer-events-none z-30"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 1, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default ShatteredGlassTransition;