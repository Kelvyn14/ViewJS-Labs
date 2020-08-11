new Vue({
    el:'#desafio',
    data: {
        nome: 'Kelvyn Rosa de Araújo',
        idade: 28,
        linkImg: 'https://www.publicdomainpictures.net/pictures/30000/velka/evening-landscape-13530956185Aw.jpg'
        
    },
    methods: {
        idadeVezes3(){            
            return this.idade * 3
        },
        random(){            
            return Math.random()
        }
    }
})