<template>
  <form v-on:submit.prevent="handleSubmit(employee)">
    <div class="row">
      <md-field
        class="md-layout-item md-size-45"
        :class="submitted && !employee.name ? 'md-invalid' : ''"
      >
        <label>Nome</label>
        <md-input v-model="employee.name" required></md-input>
        <span class="md-error">Campo obrigatório</span>
      </md-field>

      <md-field
        class="md-layout-item md-size-45"
        :class="submitted && !employee.email ? 'md-invalid' : ''"
      >
        <label>E-mail</label>
        <md-input type="email" v-model="employee.email" required></md-input>
        <span class="md-error">Campo obrigatório</span>
      </md-field>
    </div>

    <div class="row">
      <md-field
        class="md-layout-item md-size-45 md-has-value"
        :class="submitted && !employee.birth_date ? 'md-invalid' : ''"
      >
        <label>Data de nascimento</label>
        <md-input type="date" v-model="employee.birth_date" required></md-input>
        <span class="md-error">Campo obrigatório</span>
      </md-field>

      <md-field
        class="md-layout-item md-size-45 md-has-value"
        :class="submitted && !employee.admission_date ? 'md-invalid' : ''"
      >
        <label>Data de admissão</label>
        <md-input type="date" v-model="employee.admission_date" required></md-input>
        <span class="md-error">Campo obrigatório</span>
      </md-field>
    </div>

    <div class="row">
      <md-field
        class="md-layout-item md-size-25"
        :class="submitted && !employee.cellphone ? 'md-invalid' : ''"
      >
        <label>Celular</label>
        <md-input v-model="employee.cellphone" required></md-input>
        <span class="md-error">Campo obrigatório</span>
      </md-field>

      <md-field
        class="md-layout-item md-size-30"
        :class="submitted && !employee.cpf ? 'md-invalid' : ''"
      >
        <label>CPF</label>
        <md-input v-model="employee.cpf" required></md-input>
        <span class="md-error">Campo obrigatório</span>
      </md-field>

      <md-field
        class="md-layout-item md-size-30"
        :class="submitted && !employee.role ? 'md-invalid' : ''"
      >
        <label>Cargo</label>
        <md-input v-model="employee.role" required></md-input>
        <span class="md-error">Campo obrigatório</span>
      </md-field>
    </div>

    <md-button class="md-raised md-accent save-button" type="submit">Salvar</md-button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';

import Employee from './employee.interface';

@Component
export default class EmployeeForm extends Vue {
  @Prop()
  employeeData!: Employee;

  employee: Employee = {
    id: '',
    name: '',
    email: '',
    cellphone: '',
    cpf: '',
    role: '',
    birth_date: '', // eslint-disable-line @typescript-eslint/camelcase
    admission_date: '', // eslint-disable-line @typescript-eslint/camelcase
  };

  submitted = false;

  @Emit('handleFormSubmit')
  handleSubmit(employee: Employee): void {
    this.submitted = true;
    console.log('handleSubmit');
  }

  mounted() {
    console.log(this.employeeData);
    if (this.employeeData) {
      this.employee = this.employeeData;
    }
  }
}
</script>

<style lang="scss" scoped>
div.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

button.save-button {
  float: right;
}
</style>
