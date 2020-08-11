new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaClick() {
            alert('clicou no botão!')
        },
        escutaKeyup(event){
            this.valor = event.target.value
        }
    }
})