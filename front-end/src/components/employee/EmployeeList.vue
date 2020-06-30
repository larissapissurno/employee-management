<template>
  <div class="content">
    <div class="content-header">
      <h1>Funcionários</h1>
      <md-button class="md-icon-button md-raised md-accent" to="/employees/add">
        <md-icon>add</md-icon>
      </md-button>
    </div>
    <div class="container md-elevation-24">
      <md-table>
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

            <md-button class="md-fab md-mini md-transparent">
              <md-icon>delete</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import EmployeesService from '../../services/employees.service';
import Employee from './employee.interface';

@Component
export default class EmployeeCreation extends Vue {
  employees: Employee[] = [];

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
</style>
