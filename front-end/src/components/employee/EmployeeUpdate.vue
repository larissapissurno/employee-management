<template>
  <div class="content">
    <div class="content-header">
      <h1>Edição de funcionário</h1>
      <md-button class="md-raised md-transparent" to="/employees">
        <md-icon>chevron_left</md-icon>Voltar
      </md-button>
    </div>
    <div class="container md-elevation-24">
      <EmployeeForm v-if="employee" @handleFormSubmit="handleFormSubmit" :employeeData="employee" />
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
export default class EmployeeUpdate extends Vue {
  employee: Employee | null = null;

  handleFormSubmit(employee: Employee) {
    this.employee = employee;

    EmployeeService.update(employee.id, employee).then((response) => {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Funcionário editado com sucesso!',
        icon: 'success',
      }).then(() => router.push('/employees'));
    });
  }

  loadEmployee(id: string) {
    EmployeeService.getById(id).then((result) => {
      this.employee = result.data;
      const [birthDate] = this.employee.birth_date.split('T');
      const [admissionDate] = this.employee.admission_date.split('T');
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.employee.birth_date = birthDate;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.employee.admission_date = admissionDate;
    });
  }

  mounted() {
    const { id } = this.$router.currentRoute.params;

    this.loadEmployee(id);
  }
}
</script>
