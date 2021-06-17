import styled from 'styled-components'; 

import Image from "next/image";


export const wrapper = styled.div`
height:100px; 
width:100px;
display:flex;
justify-content: center; 
align-items:center;
overflow:hidden;
`

export const Example = styled(Image)`

 clip-path: circle(40%);
`;