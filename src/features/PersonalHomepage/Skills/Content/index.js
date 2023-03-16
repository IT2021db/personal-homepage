import React from "react";
import { Item, List, Section, Title, Bullet } from "./styled";

export const Content = ({ title, skills }) => {
    return (
        <Section>
            <Title>{title}</Title>
            <List>
                {skills.map(skill => (
                    <Item key={skill.id}>
                        <Bullet />
                        {skill.content}
                    </Item>
                ))}
            </List>
        </Section>
    )
}