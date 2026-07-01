<template>
  <main class="app">
    <h1 class="title">ColosColumn</h1>
    <p class="subtitle">Column visibility selector for Element Plus tables</p>
<<<<<<< Updated upstream
    <p class="hint">Pass a <code>tableInstance</code> ref to <code>&lt;ColosColumn&gt;</code> to get started.</p>
=======

    <div class="demo-toolbar">
      <ColosColumn :table-instance="tableRef" />
    </div>

    <el-table ref="tableRef" :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="50" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="role" label="Role" />
      <el-table-column prop="department" label="Department" />
      <el-table-column prop="location" label="Location" />
      <el-table-column prop="status" label="Status" />
    </el-table>
>>>>>>> Stashed changes
  </main>
</template>

<script setup>
<<<<<<< Updated upstream
=======
import { ref } from 'vue'
import ColosColumn from './components/ColosColumn.vue'

const tableRef = ref(null)

const tableData = [
  { name: 'Alice Martin',  role: 'Engineer',   department: 'R&D',     location: 'Paris',    status: 'Active'   },
  { name: 'Bob Dupont',    role: 'Designer',    department: 'Product', location: 'Lyon',     status: 'Active'   },
  { name: 'Clara Leroy',   role: 'Manager',     department: 'Sales',   location: 'Nantes',   status: 'On leave' },
  { name: 'David Chen',    role: 'DevOps',      department: 'Infra',   location: 'Remote',   status: 'Active'   },
  { name: 'Emma Bernard',  role: 'Analyst',     department: 'Finance', location: 'Bordeaux', status: 'Inactive' },
]
>>>>>>> Stashed changes
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f1a;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #e0e0ff;
}

.app {
  display: flex;
  flex-direction: column;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  align-items: center;
=======
  align-items: flex-start;
>>>>>>> Stashed changes
=======
  align-items: flex-start;
>>>>>>> Stashed changes
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 900px;
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1rem;
  color: #94a3b8;
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
.hint {
  font-size: 0.9rem;
  color: #64748b;
}

.hint code {
  color: #a78bfa;
  background: #1e1b2e;
  padding: 0.1rem 0.4rem;
  border-radius: 0.3rem;
}
</style>


=======
=======
>>>>>>> Stashed changes
.demo-toolbar {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
