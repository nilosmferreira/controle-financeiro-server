# CONTROLE FINANCEIRO

1. Transação:
   Na entidade "Transação", você pode adicionar um atributo adicional chamado "status" para indicar o estado atual da transação. Por exemplo, você pode ter os seguintes valores possíveis para o status: "Pendente", "Recebido" e "Pago". Além disso, você pode adicionar um atributo de referência à conta associada à transação.

2. Conta:
   A entidade "Conta" pode ter um método para calcular o saldo atual, levando em consideração apenas as transações confirmadas (recebidas/pagas). Esse método iteraria sobre a lista de transações associadas à conta e somaria ou subtrairia os valores apenas das transações com status "Recebido" ou "Pago".

3. Confirmar transação:
   Você pode adicionar um método na entidade "Transação" para confirmar a transação, alterando o status de "Pendente" para "Recebido" ou "Pago". Quando a transação é confirmada, você atualiza o saldo da conta associada.

4. Baixa de transação:
   Após a confirmação da transação, você pode adicionar um método na entidade "Transação" para realizar a baixa da transação. Esse método alteraria o status para "Pago" (caso seja uma transação de saída) ou "Recebido" (caso seja uma transação de entrada). Novamente, você atualizaria o saldo da conta associada.
