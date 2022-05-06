import styled from '@emotion/styled';

export const NavigationStyled = styled.header({
    background: '#2f5bb7',
    '& ul': {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: 0
    },
    '& li': {
        padding: '1em 1em'
    },
    '& li:hover': {
        backgroundColor: '#357ae8'
    },
    '& a': {
        textDecoration: 'none',
        fontSize: '1.3em',
        color: '#ffffff'
    }
});