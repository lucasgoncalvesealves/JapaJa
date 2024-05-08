'use client'

import { useContext, useState, useEffect } from "react";
import {titleContext} from "@/app/(content)/layout"

export default function AboutEffects({defineTitle}) {
  const context = useContext(titleContext);
  const [title, setTitle] = useState('');
  
  useEffect(() => {
    setTitle("Sobre");
    context.updateTitle(title);
  });
}