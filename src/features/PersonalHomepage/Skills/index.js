import React from "react";
import { skillset } from "./skillset";
import { toLearn } from "./toLearn";
import { Content } from "./Content/index.js";

export const Skills = (skills, title) => (
    <>
        <Content title="My skills includes 🛠️ " skills={skillset} />
        <Content title="WhatI want to learn next 🚀" skills={toLearn} />
    </>
);