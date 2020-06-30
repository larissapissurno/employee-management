<template>
  <div class="content">
    <div class="content-header">
      <h1>Funcionários</h1>
      <md-button class="md-icon-button md-raised md-accent">
        <md-icon>add</md-icon>
      </md-button>
    </div>
    <div class="container md-elevation-24">
      <md-table>
        <md-table-row>
          <md-table-head>Nome</md-table-head>
          <md-table-head>Email</md-table-head>
          <md-table-head>Cargo</md-table-head>
        </md-table-row>

        <md-table-row v-for="employee in employees" :key="employee.id">
          <md-table-cell>{{employee.name}}</md-table-cell>
          <md-table-cell>{{employee.email}}</md-table-cell>
          <md-table-cell>{{employee.role}}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import EmployeesService from '../../services/employees.service';

interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
}

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
div.content {
  padding: 20px;
  text-align: justify;
  h1 {
    font-weight: 500;
    color: #7743d9;
    margin: 50px 0;

    i {
      color: #7743d9 !important;
    }
  }

  div.content-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

div.container {
  border-radius: 50px;
  background: #fff;
  min-height: calc(100vh - 100px);
  width: calc(100vw - 100px);
  padding: 20px;
  text-align: justify;
}
</style>
