import React from "react";
import { skillset } from "./skillset";
import { toLearn } from "./toLearn";
import { Content } from "./Content/index.js";

export const Skills = (itemSet, title) => (
    <>
        <Content title="My skills includes 🛠️ " itemSet={skillset} />
        <Content title="WhatI want to learn next 🚀" itemSet={toLearn} />
    </>
);