import React from "react";
import { Item, List, Wrapper, Title } from "./styled";

export const ListSection = ({ title, itemSet }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <List>
                {itemSet.map(item => (
                    <Item key={item.id}>{item.content}</Item>
                ))}
            </List>
        </Wrapper>
    )
}