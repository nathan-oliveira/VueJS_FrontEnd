<template>
    <div>
      <!-- Modal -->
      <div v-if="visible" class="modal show fade" :id="id" tabindex="-1" role="dialog" style="display: block;">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Produto</h5>
              <button type="button" class="close" @click="visible = false" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="visible = false">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show" v-if="visible"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  props: {
    id: '',
    titulo: ''
  },
  created (){
    this.$root.$on('open-modal', id => {
      if(this.id == id) {
        this.visible = true
      }
    });
  }
}
</script>