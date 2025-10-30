import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
`   

export default HeaderContainer;