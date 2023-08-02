'use client';
import FormField from "@/app/components/FormField";
import { Container } from './styles'
import CardProduto from "@/app/components/CardProduto";
import { WrapperCardProdutos } from "@/app/components/CardProduto/styles";

export default function PageProdutos() {

  return (
    <Container>
      <form >
        {/* <FormField /> */}
      </form>
      <WrapperCardProdutos>
        <CardProduto />
      </WrapperCardProdutos>
    </Container>
  )

}