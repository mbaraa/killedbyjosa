import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ProductWithSlug } from 'types/Product';

import { SRT } from 'components';
import Item from 'components/List/Item';
import {
    ListItem,
} from 'components/List/Item.atoms';
import { ListContainer } from 'components/List/List.atoms';
import Link from 'next/link';

type Props = {
    items: ProductWithSlug[]
}

const List: React.FC<Props> = ({ items }) => (
    <ListContainer>
        {items.map(item => (
            <Item key={item.slug} {...item} />
        ))}
    </ListContainer>
);


export default List;
