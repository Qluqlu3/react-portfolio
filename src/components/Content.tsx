import React, { useState } from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
	width: 100%;
	height: 100vh;
	background: ${({ theme }) => theme.gray};
`;

export const Content = React.memo(() => {
  const items = [
    { id: 1, name: 'AAA' },
    { id: 2, name: 'BBB' },
    { id: 3, name: 'CCC' },
    { id: 4, name: 'DDD' },
  ];

  const [data, setData] = useState(items);

  //id 削除対象
  const deleteItem = (id: number) => {
    const newItem = items.filter((item) => (item.id = id));
    setData(newItem);
  };

  return <Wrapper onClick={() => deleteItem(1)}></Wrapper>;
});
