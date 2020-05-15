<template>
  <div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Pesquisar"  aria-describedby="btn-pesquisar">
      <div class="input-group-append">
        <button class="input-group-text btn-blue" id="btn-pesquisar">
          <i class="fas fa-search btn-pesquisar"></i>
          <b class="btn-pesquisar" style="padding-left: 5px">Pesquisar</b>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <fieldset style="margin-top: -0.5% !important">
          <legend>Categorias</legend>
          <div class="row" style="padding-left: 1%">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-12">
                  <label class="" id="content-check">
                    <p class="p-check">Categoria 1</p>
                    <input type="checkbox"> <!--  checked="checked" -->
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-sm-12">
                  <label class="" id="content-check">
                    <p class="p-check">Categoria 2</p>
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-sm-12">
                  <label class="" id="content-check">
                    <p class="p-check">Categoria 3</p>
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-sm-12">
                  <label class="" id="content-check">
                    <p class="p-check">Categoria 4</p>
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-sm-9" style="margin-top: 1% !important">
        <div class="row">
          <div v-for="item in listagem" class="col-sm-4 cards" v-bind:key="item.id">
            <div class="card" style="max-width: 18rem;">
              <div class="card-head zoom" style="border: 1px solid rgba(0,0,0,.125);">
                <img src="https://a1.vnda.com.br/cutterman/2019/01/17/cm516-camisetas-basic-3-pack-2492.jpg?1547754220" class="card-img-top" alt="" height="260">
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">{{ item.titulo }}</h5>
                <p class="card-text">{{ item.descricao }}</p>
                <div class="buttons">
                    <a onclick="carrinho()" class="button add">Comprar</a>
                    <span class="button buttonValue" id="price" style="margin-left: 10px">R$ {{ item.preco }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      listagem: null
    }
  },
  methods: {
    listar() {
      const response = [
        { id: '1', titulo: '1° Camiseta', descricao: '1° Descrição...', preco: '3105,10'},
        { id: '2', titulo: '2° Camiseta', descricao: '2° Descrição...', preco: '9230,90'}
      ];

      this.listagem = response.map(response => {
        return {
          titulo: response.titulo,
          descricao: response.descricao,
          preco: response.preco
        }
      })
    }
    // listar() {

    //   this.listagem = response.dados.map(function(objeto) {
    //     return {
    //       id_galeria_video: objeto.id_galeria_video,
    //       titulo: objeto.titulo,
    //       caminho: this + (objeto.caminho ? objeto.caminho.substring(1) : objeto.caminho)
    //     }
    //   }
    // },
  }, mounted() {
    this.listar();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn-link {
  color: rgba(36, 36, 36, 0.815) !important;
  font-weight: bold;
  border-color: rgba(36, 36, 36, 0.815) !important;
  text-decoration:none;
  text-align: center;
}
.btn-link:hover {
  text-decoration:none;
}
.cards {
  margin-top: 1%;
  margin-bottom: 2%;
}
.btn-blue {
  background: #5995b6 !important;
}

.btn-pesquisar {
  color: #fff !important;
  font-weight: 500;
}
// .icon-search {
//   color: #fff !important;
//   font-weight: 500;
// }
.buttons {
  margin-left: -20px;
  margin-right: -20px;
}
.button {
  text-decoration: none;
  color: #5e5e5e;
  font-weight: bold;
  padding: .2em .3em;
  border-radius: 5.3px;
  transition: all .1s ease-in-out;
  cursor: pointer;
  border: 1px #5e5e5e solid;
}
.buttonValue {
  border: 1px solid rgba(137, 137, 137, 0.2) !important;
}
.zoom {
	overflow: hidden;
}
.zoom img {
	max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
}
.zoom:hover img {
	-moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

@media (max-width: 412px) {
  .cards {
    padding-left: 10% !important;
  }
}

legend {
  text-align: center !important;
}

</style>
