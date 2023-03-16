import React from "react";
import { Item, List, Section, Title } from "./styled";

export const Content = ({ title, itemSet }) => {
    return (
        <Section>
            <Title>{title}</Title>
            <List>
                {itemSet.map(item => (
                    <Item key={item.id}>{item.content}</Item>
                ))}
            </List>
        </Section>
    )
}