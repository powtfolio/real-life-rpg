"use client";
import { useState } from "react";

type AttributeType = {
  name: string;
  descriptiion: string;
  icon: string;
  level: number;
};

const initialAttributes: AttributeType[] = [
  {
    name: "power",
    descriptiion: "ability to chuchu",
    icon: "I_Crystal01",
    level: 2,
  },
  {
    name: "speed",
    descriptiion: "ability to chuchu",
    icon: "I_Crystal02",
    level: 1,
  },
  {
    name: "agility",
    descriptiion: "ability to chuchu",
    icon: "I_Crystal01",
    level: 3,
  },
];

export default function useSetting() {
  const [attributes, setAttributes] =
    useState<AttributeType[]>(initialAttributes);

  const updateIcon = (index: number, icon: string) => {
    setAttributes((prev) => {
      const newAttributes = prev.slice();
      newAttributes[index].icon = icon;
      return newAttributes;
    });
  };

  return { attributes, updateIcon };
}
