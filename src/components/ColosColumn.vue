<template>
  <el-dropdown :hide-on-click="false" trigger="click" placement="bottom-start" v-if="props.tableInstance">
    <el-button type="default">
      <i class="bi bi-sliders2-vertical bi-L me-3"></i>
      Columns
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="seeAllColumn()">
          <el-text type="primary" tag="b">
            See All
            <i class="bi bi-eye bi-L ms-5 text-primary"></i>
          </el-text>
        </el-dropdown-item>
        <template v-for="(col, index) in columnsState" :key="index">
          <el-dropdown-item @click="toggleOneColumnVisibility(col)" :divided="index == 0 ? true : false">
            <el-text :type="col.visible ? 'primary' : 'info'">
              {{ col.label }}
            </el-text>
            <i v-if="col.visible" class="bi bi-check bi-L ms-auto ps-20 text-primary"></i>
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { watch, ref, nextTick, computed } from "vue";
import { ElNotification } from "element-plus";
import type { TableInstance } from "element-plus";

interface ColumnState {
  prop: string;
  label: string;
  visible: boolean;
  // stored for reference, typed loosely to avoid deep type instantiation from Element Plus internals
  columnInstance?: Record<string, unknown>;
}

const props = defineProps<{
  tableInstance?: TableInstance;
}>();

const columnsState = ref<ColumnState[]>([]);
const isInitialized = ref(false);
const tableHTML = ref<HTMLElement | null>(null);
const tableSignature = ref<string>("");

// Generate a unique string key to store with all the col concat of the current table
const STORAGE_KEY = computed(() => {
  return `table_${tableSignature.value}`;
});

// watch columns for auto layout compatibility (important)
watch(
  () => props.tableInstance?.store.states.columns.value,
  async (columns) => {
    if (columns && columns.length > 0 && !isInitialized.value && props.tableInstance) {
      await nextTick();
      initializeColumns();
    }
  },
  { immediate: true }
);

// watch for data change
watch(
  () => props.tableInstance?.store.states.data.value,
  async (data) => {
    // if already init, just apply the visibility
    if (data && data.length > 0 && isInitialized.value) {
      await nextTick();
      applyAllColumnsVisibility();
    }
  },
  { immediate: true }
);

const initializeColumns = () => {
  if (!props.tableInstance || isInitialized.value) {
    return;
  }

  try {
    const columns = props.tableInstance.store.states.columns.value;

    if (!columns || columns.length === 0) {
      ElNotification({
        type: "warning",
        title: "TableColSelector",
        message: "No columns found :/"
      });
      return;
    }

    const newColumns: ColumnState[] = [];

    for (const column of columns) {
      // Ignore the select column
      if (column.type === "selection") continue;

      if (column.property || column.label) {
        const prop = column.property || column.label;

        newColumns.push({
          prop,
          label: column.label || column.property,
          visible: true,
          columnInstance: column as Record<string, unknown>
        });
      }
    }

    columnsState.value = newColumns;

    // Generate the unique key for this table (all his column concat)
    tableSignature.value = newColumns.map((c) => c.prop).join("_");

    // catch the HTML of the table
    tableHTML.value = props.tableInstance.$el as HTMLElement;

    isInitialized.value = true;

    // restore the saved state (if exist) after the init
    nextTick(() => {
      restoreSavedState();
    });
  } catch (error) {
    ElNotification({
      type: "error",
      title: "TableColSelector",
      message: "Error during initialization : " + error
    });
  }
};

// Apply the visibility setup for all columns
const applyAllColumnsVisibility = () => {
  for (const col of columnsState.value) {
    applyOneColumnVisibility(col);
  }
};

// Toggle visibility for one column
const toggleOneColumnVisibility = (colState: ColumnState) => {
  colState.visible = !colState.visible;
  applyOneColumnVisibility(colState);
  saveToLocalStorage();
};

// apply visibility for one column with DOM manipulation
type Cell = {
  property: string;
  label: string;
};
const applyOneColumnVisibility = (colState: ColumnState) => {
  if (!props.tableInstance || !tableHTML.value) return;

  // find index of the column
  const columns = props.tableInstance.store.states.columns.value;

  const colIndex = columns.findIndex((c: Cell) => c.property === colState.prop || c.label === colState.prop);

  if (colIndex === -1) return;

  // select all the cells of this column (header and body)
  const headerCells = tableHTML.value.querySelectorAll(`thead th:nth-child(${colIndex + 1})`);
  const bodyCells = tableHTML.value.querySelectorAll(`tbody td:nth-child(${colIndex + 1})`);

  const display = colState.visible ? "" : "none";

  headerCells.forEach((cell: Element) => {
    (cell as HTMLElement).style.display = display;
  });

  bodyCells.forEach((cell: Element) => {
    (cell as HTMLElement).style.display = display;
  });
};

// Set all column visible
const seeAllColumn = () => {
  for (const col of columnsState.value) {
    col.visible = true;
  }

  applyAllColumnsVisibility();
  saveToLocalStorage();
};

// save the columns state in localStorage
const saveToLocalStorage = () => {
  const savedState = columnsState.value.map((c) => ({
    prop: c.prop,
    visible: c.visible
  }));
  localStorage.setItem(STORAGE_KEY.value, JSON.stringify(savedState));
};

// Load from localStorage
const restoreSavedState = async () => {
  const savedState = localStorage.getItem(STORAGE_KEY.value);
  if (!savedState) return;

  try {
    const state = JSON.parse(savedState);

    for (const saved of state) {
      const col = columnsState.value.find((c) => c.prop === saved.prop);
      if (col && col.visible !== saved.visible) {
        col.visible = saved.visible;
      }
    }

    // wait the DOM is maj
    await nextTick();
    applyAllColumnsVisibility();
  } catch (e) {
    ElNotification({
      type: "error",
      title: "TableColSelector",
      message: "Error restoring column state : " + e
    });
  }
};
</script>
