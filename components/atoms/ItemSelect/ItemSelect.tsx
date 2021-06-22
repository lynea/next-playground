import { FunctionComponent } from 'react';
import * as styled from './ItemSelect.styles';
import { ItemSelectProps } from './types';
import Link from 'next/link';

const ItemSelect: FunctionComponent<ItemSelectProps> = ({ items }) => (
  <styled.Container>
    {items.map((item, index) => (
      <styled.Item key={item.text + index}>
        <Link href={item.path}> {item.text} </Link>
      </styled.Item>
    ))}
  </styled.Container>
);

export default ItemSelect;
