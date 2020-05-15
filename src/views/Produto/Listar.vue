<template>
  <div>
    <!-- Modal -->
    <modal id="modal1">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Título</span>
        </div>
        <input type="text" class="form-control" placeholder="Título">
      </div>
      <div class="input-group" style="margin-top: 1%">
        <textarea class="form-control" placeholder="Descrição"></textarea>
      </div>
      <div class="input-group" style="margin-top: 1%">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Preço</span>
        </div>
        <input type="number" class="form-control" placeholder="R$ 0,00">
      </div>
      <div class="custom-file" style="margin-top: 1%">
        <input type="file" class="custom-file-input" id="customFileLang" lang="es">
        <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
      </div>
    </modal>
    <!-- Fim da Modal -->

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb btn-sm">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Produtos</li>
      </ol>
    </nav>

    <button type="button" class="btn btn-primary" @click="$root.$emit('open-modal', 'modal1', 'teste')">
      Adicionar
    </button>

    <fieldset style="margin-top: 1% !important">
      <legend>Produtos</legend>
       <table class="table table-bordered" style="margin-top: 0.5%">
        <thead class="thead-light">
          <tr class="line">
            <th scope="col" class="mobile" style="width: 25px">Código</th>
            <th scope="col" style="width: 285px">Título</th>
            <th scope="col" class="mobile">Descrição</th>
            <th scope="col">Preço</th>
            <th scope="col" style="width: 175px">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr class="line" v-for="item in listagem" v-bind:key="item.id">
            <td class="mobile">{{ item.id }}</td>
            <td>{{ item.titulo }}</td>
            <td class="mobile">{{ item.descricao }}</td>
            <td>{{ item.preco }}</td>
            <td>
              <div class="col-sm-12" style="text-align: center !important;">
                <div class="row">
                  <button type="button" class="btn btn-dark btn-xs" >
                    <i class="fas fa-plus"></i> Editar
                  </button>
                  <button type="button" class="btn btn-danger btn-xs" style="margin-left: 4px">
                    <i class="fas fa-plus"></i> Deletar
                    </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue';

export default {
  name: 'Listar',
  components: {
    Modal
  },
  data() {
    return {
      listagem: null
    }
  },
  methods: {
    listar() {
      const response = [
        { id: '1', titulo: '1° Camiseta', descricao: '1º Descrição...', preco: '3105,10'},
        { id: '2', titulo: '2° Camiseta', descricao: '2º Descrição...', preco: '9230,90'}
      ];

      this.listagem = response.map(response => {
        return {
          titulo: response.titulo,
          descricao: response.descricao,
          preco: response.preco
        }
      })
    }
  }, mounted() {
    this.listar();
  }
}
</script>

<style scoped lang="scss">
legend {
  text-align: left !important;
}
.line {
  line-height: 1;
}
@media (max-width: 412px) {
  .mobile{
    display: none;
  }
}
</style>
