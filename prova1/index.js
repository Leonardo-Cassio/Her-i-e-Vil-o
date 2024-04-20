const { createApp } = Vue;

createApp({
    data() {
        return {
            heroi: { vida: 100 },
            vilao: { vida: 100 },
            ataque: true,
            cura: true,
            defesa: true,
            corrida: true,
            historico: [],
            usospocao: 5
        }
    },
    methods: {
        barraVidaClasse(vida) {
            if (vida >= 60) {
                return 'verde';
            } else if (vida >= 30) {
                return 'amarela';
            } else {
                return 'vermelha';
            }
        },
        atacar(isheroi) {
            if (this.heroi.vida <= 0 || this.vilao.vida <= 0) {
                return;
            }
            if (this.ataque == true)
                this.historico.push("Helldiver atirou!");
            if (isheroi) {
                this.vilao.vida = Math.min(100, Math.max(0, this.vilao.vida - 10));
                console.log("Herói atacou");
                this.acaoVilao();
            } else {
                if (this.heroi.vida > 0) {
                    this.heroi.vida = Math.min(100, Math.max(0, this.heroi.vida - 10));
                    console.log("Vilão atacou");
                    (this.ataque == true)
                    this.historico.push("Terminídeo atacou!");
                }
            }
        },
        defender(isheroi) {
            if (this.heroi.vida <= 0 || this.vilao.vida <= 0) {
                return;
            }
            if (this.defesa == true)
                this.historico.push("Helldiver defendeu!");
            if (isheroi) {
                if (this.heroi.vida > 0) {
                    this.heroi.vida = Math.min(100, Math.max(0, this.heroi.vida - 4));
                    this.acaoVilao();
                }
            } else {
                (this.defesa == true)
                this.historico.push("Terminídeo atacou!");
            }
        },
        usarpocao(isheroi) {
            if (this.heroi.vida <= 0 || this.vilao.vida <= 0 || this.usosPocao <= 0) {
                return;
            }
            if (this.cura) {
                this.historico.push("Helldiver curou!");
                if (isheroi) {
                    this.heroi.vida = Math.min(100, this.heroi.vida + 10);
                    this.acaoVilao();
                } else {
                    console.log("Vilão curou");
                }
                this.usospocao--; 
            } else {
                console.log("Você não pode usar mais a poção!");
                this.historico.push("Poções esgotadas!")
            }
        },
    correr(isheroi) {
        if (this.heroi.vida <= 0 || this.vilao.vida <= 0) {
            return;
        }
        if (this.corrida == true)
            this.historico.push("Helldiver correu!");
        if (!isheroi) {
            console.log("Herói correu");
        } else {
            this.acaoVilao();
        }
    },
    acaoVilao() {
        if (this.heroi.vida <= 0 || this.vilao.vida <= 0) {
            return;
        }
        const acoes = ['atacar', 'correr', 'atacar', 'correr'];
        const acaoaleatoria = acoes[Math.floor(Math.random() * acoes.length)];
        this[acaoaleatoria](false);
    },
},
}).mount("#app");

document.getElementById("reloadButton").addEventListener("click", function () {
    location.reload();
});
