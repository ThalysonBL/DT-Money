import { Container } from "./style";
import Entradas from '../../assets/Entrada.svg'
import Saidas from '../../assets/saidas.svg'
import Total from '../../assets/Total.svg'

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>
                        Entradas
                    </p>
                    <img src={Entradas} alt="Entradas" />
                </header>
                <strong> R$1000</strong>
            </div>
            <div>
                <header>
                    <p>
                        Saídas
                    </p>
                    <img src={Saidas} alt="Saídas" />
                </header>
                <strong>- R$500</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>
                        Total
                    </p>
                    <img src={Total} alt="Total" />
                </header>
                <strong> R$500</strong>
            </div>
        </Container>
    )

}