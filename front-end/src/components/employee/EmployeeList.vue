<template>
  <div class="content">
    <div class="content-header">
      <h1>Funcionários</h1>
      <md-button class="md-icon-button md-raised md-accent" to="/employees/add">
        <md-icon>add</md-icon>
      </md-button>
    </div>
    <div class="container md-elevation-24">
      <md-table v-if="employees.length">
        <md-table-row>
          <md-table-head>Nome</md-table-head>
          <md-table-head>Email</md-table-head>
          <md-table-head>Cargo</md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>

        <md-table-row v-for="employee in employees" :key="employee.id">
          <md-table-cell>{{employee.name}}</md-table-cell>
          <md-table-cell>{{employee.email}}</md-table-cell>
          <md-table-cell>{{employee.role}}</md-table-cell>
          <md-table-cell class="action-col">
            <md-button
              class="md-fab md-mini md-transparent"
              :to="{ path: '/employees/' + employee.id}"
            >
              <md-icon>edit</md-icon>
            </md-button>

            <md-button class="md-fab md-mini md-transparent" @click="handleDelete(employee.id)">
              <md-icon>delete</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>

      <div class="no-results" v-if="!employees.length">
        <img src="../../assets/no-results.gif" alt />
        <p>Nenhum funcionário(a) foi encontrado 😶</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Swal from 'sweetalert2';

import EmployeesService from '../../services/employees.service';
import Employee from './employee.interface';

@Component
export default class EmployeeCreation extends Vue {
  employees: Employee[] = [];

  // eslint-disable-next-line class-methods-use-this
  handleDelete(id: string) {
    Swal.fire({
      title: 'Você tem certeza que deseja remover?',
      text: 'Esta ação não poderá ser revertida!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        EmployeesService.delete(id).then(() => {
          Swal.fire(
            'Removido!',
            'Funcionário removido com sucesso.',
            'success',
          );

          const index = this.employees.findIndex(
            (employee) => employee.id === id,
          );
          this.employees.splice(index, 1);
        });
      }
    });
  }

  mounted() {
    this.listEmployees();
  }

  private listEmployees(): void {
    EmployeesService.get().then((result) => {
      this.employees = result.data;
    });
  }
}
</script>

<style lang="scss" scoped>
.md-mini {
  width: 30px;
  height: 30px;
}

.md-transparent {
  background-color: #fff !important;
}

.action-col {
  text-align: right;
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
