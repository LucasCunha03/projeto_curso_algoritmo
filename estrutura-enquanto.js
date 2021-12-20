function acaoBotao() {
    var nome, idade, limite, contador

limite = prompt("Digite a quantidade de vezes que será verificada a idade:")
contador = 0
while(contador < limite){
    nome = prompt("DIgite o nome da pessoa: ")
    idade = prompt("Digite a idade do", nome)
    if (idade > 18)
    document.getElementById("Paragrafo").innerText = nome + " você é maior de idade"
    else
    document.getElementById("Paragrafo").innerText = nome + " você é menor de idade"
    contador++
    }
}