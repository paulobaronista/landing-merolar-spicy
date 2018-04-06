<?php
$nome     = $_POST['nome'];
$email    = $_POST['email'];
$phone    = $_POST['phone'];
$empreendimento  = $_POST['empreendimento'];
$mensagem = $_POST['mensagem'];
$headers  = "From: <contato@vempramerolar.com.br>"."\n";
$corpo    = "Nome: ".$nome."<br/>";
$corpo   .= "E-mail: ".$email."<br/>";
$corpo   .= "Telefone: ".$phone."<br/>";
$corpo   .= "Empreendimento: ".$empreendimento."<br/>";
$corpo   .= "Mensagem: ".$mensagem."<br/>";
$headers .= "MIME-Version: 1.0"."\n";
$headers .= "Content-type:text/html;charset=iso-8859-1"."\n";
mail("contato@vempramerolar.com.br, larissafernandes@merolar.com.br, caiodalfonso@merolar.com.br, sheila.sgarbi@natix.com.br, karina.laino@concima.com.br, felipe@spicycomm.com.br, leadsmerolar@gmail.com","Contato enviado pelo site www.vemparamerolar.com.br",$corpo,$headers);
?>

<!--
Larissa Fernandes larissafernandes@merolar.com.br
Caio Dalfonso caiodalfonso@merolar.com.br
'SHEILA SGARBI' sheila.sgarbi@natix.com.br
Karina Laino karina.laino@concima.com.br
Felipe felipe@spicycomm.com.br  
-->

<!--
contato@vempramerolar.com.br
@merolar_2016 
-->

<!-- 
leadsmerolar@gmail.com
-->