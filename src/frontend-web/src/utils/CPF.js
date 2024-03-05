
// ATENCAO!! Precisamos atualizar essas funções vanilla js para melhor compatibilidade com react, estão causando diversos bugs. A melhor forma seria hooks.

// Formata o CPF, chamar no keyup
export const formatarCPF = function (event) {
        let input = event.target
        input.value = substituiCPF(input.value)

        function substituiCPF(value) {
                return value.replace(/\D/g, '')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1-$2')
                        .replace(/(-\d{2})\d+?$/, '$1')
        }
}
// Verifica se o cpf é possível
export const checaCPF = function () {
        let cpf = document.getElementById('cpf').value;

        function verificarCPF(cpf) {
                if (typeof cpf !== 'string') return false
                cpf = cpf.replace(/[^\d]+/g, '')
                if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
                cpf = cpf.split('').map(el => +el)
                const rest = (count) => (cpf.slice(0, count - 12)
                        .reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10
                return rest(10) === cpf[9] && rest(11) === cpf[10]
        }
        if (verificarCPF(cpf)) {
                document.getElementById('cpf').setAttribute('style', 'color: inherit')
        } else if (!verificarCPF(cpf) && cpf.length > 0 )  {
                document.getElementById('cpf').setAttribute('style', 'color: red');
                document.getElementById('cpf').value = "CPF Inexistente";
        }
}