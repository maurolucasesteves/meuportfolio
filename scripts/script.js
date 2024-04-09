document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton'); // Obtém referência ao botão de alternância
    const textoEscondido = document.querySelector('.texto-escondido'); // Obtém referência ao texto escondido

    if (toggleButton && textoEscondido) { // Verifica se o botão e o texto existem
        toggleButton.addEventListener('click', function () { // Adiciona um listener de evento de clique ao botão de alternância
            // Alterna a classe 'esconder' no texto escondido
            textoEscondido.classList.toggle('esconder');
        });
    }

    // Função para enviar o email
    function sendEmail() {
        // Obtém os valores dos campos do formulário
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;

        // Monta os parâmetros do email
        var subject = "Contato via Formulário de Contato";
        var body = "Nome: " + name + "%0D%0A" +
            "Email: " + email + "%0D%0A" +
            "Telefone: " + phone + "%0D%0A" +
            "Mensagem: " + message;

        // Cria o link para enviar o email
        var mailtoLink = "mailto:contato@maurolucasteves.com.br;maurolucasesteves@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        // Redireciona para o cliente de email padrão do usuário
        window.location.href = mailtoLink;
    }

    // Aplica a máscara de telefone ao campo de entrada do telefone
    var phoneInput = document.getElementById('phone');
    if (phoneInput) { // Verifica se o campo existe
        var phoneMask = IMask(phoneInput, { // Aplica a máscara de telefone
            mask: '(00) 0000-00009'
        });

        // Adiciona validação personalizada ao campo de telefone
        phoneInput.addEventListener('input', function () {
            if (!phoneInput.checkValidity()) { // Verifica se o valor do campo é válido
                phoneInput.setCustomValidity('Telefone inválido'); // Define uma mensagem de erro personalizada
            } else {
                phoneInput.setCustomValidity(''); // Limpa a mensagem de erro
            }
        });
    }
    function validacaoEmail(field) {
        usuario = field.value.substring(0, field.value.indexOf("@"));
        dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
        
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML="E-mail válido";
        alert("E-mail valido");
        }
        else{
        document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
        alert("E-mail invalido");
        }
        }
});
