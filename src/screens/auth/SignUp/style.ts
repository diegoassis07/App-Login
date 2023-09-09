import styled from 'styled-components/native';
import theme from '../../../global/theme';

export const Container = styled.SafeAreaView`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`;
export const Title = styled.Text`
    font-size: 35px;
    font-weight: ${({theme}) => theme.fonts.semiBold};
`;