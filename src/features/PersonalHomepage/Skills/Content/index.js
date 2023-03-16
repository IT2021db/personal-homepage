import React from "react";
import { Item, List, Section, Title, Bullet } from "./styled";

export const Content = ({ title, skills }) => {
    return (
        <Section>
            <Title>{title}</Title>
            <List>
                {skills.map(item => (
                    <Item key={item.id}>
                        <Bullet/>
                        {item.content}
                        </Item>
                ))}
            </List>
        </Section>
    )
}