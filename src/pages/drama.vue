<template>
  <data-table-view :config-key="GameDataKey.DramaDialogue" :data-source="dataSource"></data-table-view>
</template>


<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useProjectData } from '@/data/customized-game-data'
import { GameDataKey } from '@/common/ggbh-meta';
import DataTableView from '@/components/data-table-view.vue'

const projectData = useProjectData();

if (!projectData.json.DramaDialogue) {
  projectData.load(GameDataKey.DramaDialogue)
} else {
  console.log(projectData.json.DramaDialogue)

}

const dataSource = computed(() => projectData.json.DramaDialogue || [])

onMounted(() => {
})
</script>
