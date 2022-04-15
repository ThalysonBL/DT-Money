import logoImg from '../../assets/Logo.svg'
import { Container } from './styles'
import { Content } from './styles'

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="de money" />
                    <button type="button">
                        Nova Transação
                    </button>
            </Content>
        </Container>
    )
} 