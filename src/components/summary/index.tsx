import { Container } from "./style";
import Entradas from '../../assets/Entrada.svg'
import Saidas from '../../assets/saidas.svg'
import Total from '../../assets/Total.svg'
import { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";

export function Summary(){
    const transactions = useContext(TransactionContext)
    return(
        <Container>
            <div>
                <header>
                    <p>
                        Entradas
                    </p>
                    <img src={Entradas} alt="Entradas" />
                </header>
                <strong> R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>
                        Saídas
                    </p>
                    <img src={Saidas} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>
                        Total
                    </p>
                    <img src={Total} alt="Total" />
                </header>
                <strong> R$500,00</strong>
            </div>
        </Container>
    )

}

function TransactionsContext(TransactionsContext: any) {
    throw new Error("Function not implemented.");
}
