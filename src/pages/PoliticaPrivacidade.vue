<script setup>
defineProps({

})
</script>

<template>
    <main>
        <section>
        <h1>Política de privacidade e cookies</h1>

        <article class="privacidade">
        <h2>Privacidade</h2>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.
        Cevadis im ampola pa arma uma pindureta.Nullam volutpat risus nec leo commodo,
        ut interdum diam laoreet. Sed non consequat odio.Casamentiss faiz malandris se pirulitá.
        Copo furadis é disculpa de bebadis, arcu quam euismod magna.Mé faiz elementum girarzis, nisi eros vermeio.
        Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
        Viva Forevis aptent taciti sociosqu ad litora torquent.
        Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
        Nam vulputate dapibus.Não sou faixa preta cumpadi, sou preto inteiris,
        inteiris.Leite de capivaris, leite de mula manquis sem cabeça.In elementis mé pra quem é amistosis quis leo.
        Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Posuere libero varius.
        Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Cevadis im ampola pa arma uma pindureta.
        Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
        Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.
        Cevadis im ampola pa arma uma pindureta.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.
        Sed non consequat odio.Casamentiss faiz malandris se pirulitá. Copo furadis é disculpa de bebadis,
        arcu quam euismod magna.Mé faiz elementum girarzis, nisi eros vermeio.Em pé sem cair, deitado sem dormir,
        sentado sem cochilar e fazendo pose.Viva Forevis aptent taciti sociosqu ad litora torquent.
        Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
        Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Leite de capivaris, leite de mula manquis sem cabeça.
        In elementis mé pra quem é amistosis quis leo.
        Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Posuere libero varius.
        Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Cevadis im ampola pa arma uma pindureta.
        Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.</p>
        </article>

        <article class="cookies">
        <h2>Cookies</h2>
        <p>Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
        Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Leite de capivaris,
        leite de mula manquis sem cabeça.In elementis mé pra quem é amistosis quis leo
        Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Posuere libero varius.
        Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Cevadis im ampola pa arma uma pindureta.
        Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
        Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé,
        boa gentis num é.Cevadis im ampola pa arma uma pindureta.Nullam volutpat risus nec leo commodo,
        ut interdum diam laoreet. Sed non consequat odio.Casamentiss faiz malandris se pirulitá.
        Copo furadis é disculpa de bebadis, arcu quam euismod magna.Mé faiz elementum girarzis, nisi eros vermeio.
        Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
        Viva Forevis aptent taciti sociosqu ad litora torquent. Praesent malesuada urna nisi,
        quis volutpat erat hendrerit non. Nam vulputate dapibus.Não sou faixa preta cumpadi, sou preto inteiris,
        inteiris.Leite de capivaris, leite de mula manquis sem cabeça.In elementis mé pra quem é amistosis quis leo.
        Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Posuere libero varius.
        Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Cevadis im ampola pa arma uma pindureta.
        Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.</p>
        </article>
        </section>
    </main>
</template>

<script>
export default {
  name: 'PoliticaPrivacidade'
}
</script>

<style lang="sass" scoped>
main
    padding-top: 150px
    display: flex
    flex-direction: column
    align-content: center
    justify-content: center
    background: #F6F6F6

section
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding: 0 20px
h1
    font-family: Roboto
    font-size: 40px
    font-weight: 900
    line-height: 47px
    letter-spacing: 0em
    color: #000000
    margin-bottom: 100px
    max-width: 900px
    text-align: left !important
h2
    font-family: Roboto
    font-size: 20px
    font-weight: 900
    line-height: 23px
    letter-spacing: 0em
    color: #000000
p
    font-family: Roboto
    font-size: 16px
    font-weight: 400
    line-height: 27px
    letter-spacing: 0em
    color: #8E8E8E
.privacidade
    max-width: 900px
    display: flex
    flex-direction: column
    margin-bottom: 100px
.cookies
    max-width: 900px
    display: flex
    flex-direction: column
    margin-bottom: 100px

@media (max-width: 630px)
    h1
        font-size: 30px

@media (max-width: 480px)
    h1
        font-size: 20px
</style>
