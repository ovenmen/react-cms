import styled from '@emotion/styled';

export const NavigationStyled = styled.header({
    background: '#2f5bb7',
    '& ul': {
        listStyle: 'none',
        display: 'flex'
    },
    '& li': {
        padding: '0.5em 1em'
    },
    '& a': {
        textDecoration: 'none',
        fontSize: '1em',
        color: '#ffffff'
    }
});