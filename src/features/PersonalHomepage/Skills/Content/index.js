import React from "react";
import { skill, List, Section, Title, Bullet } from "./styled";

export const Content = ({ title, skills }) => {
    return (
        <Section>
            <Title>{title}</Title>
            <List>
                {skills.map(skill => (
                    <skill key={skill.id}>
                        <Bullet />
                        {skill.content}
                    </skill>
                ))}
            </List>
        </Section>
    )
}