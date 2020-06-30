<template>
  <div class="content">
    <div class="content-header">
      <h1>Novo funcionário</h1>
      <md-button class="md-raised md-transparent" to="/employees">
        <md-icon>chevron_left</md-icon>Voltar
      </md-button>
    </div>
    <div class="container md-elevation-24">
      <EmployeeForm @handleFormSubmit="handleFormSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Swal from 'sweetalert2';
import router from '@/router';

import EmployeeForm from '@/components/employee/EmployeeForm.vue';
import EmployeeService from '@/services/employees.service';
import Employee from './employee.interface';

@Component({
  components: {
    EmployeeForm,
  },
})
export default class EmployeeCreation extends Vue {
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

  handleFormSubmit(employee: Employee) {
    this.employee = employee;

    EmployeeService.create(employee).then(() => {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Funcionário adicionado com sucesso!',
        icon: 'success',
      }).then(() => router.push('/employees'));
    });
  }
}
</script>
