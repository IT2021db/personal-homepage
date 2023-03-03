import React from "react";
import { skillset } from "./skillset";
import { toLearn } from "./toLearn";
import { ListSection } from "./ListSection/index.js";

export const Skills = (itemSet, title) => (
    <>
        <ListSection title="My skills includes 🛠️ " itemSet={skillset} />
        <ListSection title="WhatI want to learn next 🚀" itemSet={toLearn} />
    </>
);