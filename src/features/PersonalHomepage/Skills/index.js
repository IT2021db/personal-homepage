import React from "react";
import { Item, List, Section, StyleHeader } from "./styled";

export const Skills = () => (
    <>
        <Section>
            <StyleHeader>My skillset includes 🛠️ </StyleHeader>
            <List>
                <Item>Semantic & accessible HTML</Item>
                <Item>Responsive Web Design</Item>
                <Item>Teamwork</Item>
                <Item>Markdown</Item>
                <Item>Immutability</Item>
                <Item>CSS BEM convention</Item>
                <Item>CSS Grid</Item>
                <Item>CSS Flexbox</Item>
            </List>

            <List>
                <Item>React Router</Item>
                <Item>Redux-Saga</Item>
                <Item>Redux (toolkit)</Item>
                <Item>React Hooks</Item>
                <Item>Error Handling</Item>
                <Item>Working with Api (fetch, axios)</Item>
                <Item>JavaScript: ES6+</Item>
            </List>
        </Section>
        <Section>
            <StyleHeader>What I want to learn next 🚀 </StyleHeader>
            <List>
                <Item>praca domowa</Item>
            </List>
        </Section>
    </>
);