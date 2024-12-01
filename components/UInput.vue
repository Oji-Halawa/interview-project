<template>
  <div class="flex flex-col w-full">
    <input
      v-bind="$attrs"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />

    <div class="min-h-[44px] mt-2">
      <p v-if="errorMessage" class="text-sm text-red-500">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define Props
interface UInputProps {
  modelValue: string | number;
  type?: "text" | "number";
  placeholder?: string;
}

// Set default props using withDefaults
const props = withDefaults(defineProps<UInputProps>(), {
  type: "text",
  placeholder: "",
});

const emit = defineEmits(["update:modelValue"]);

const errorMessage = ref<string | null>(null);

const { validateInput } = useInputValidator();

const handleInput = (event: Event) => {
  let input = (event.target as HTMLInputElement).value;
  errorMessage.value = validateInput(input, props.type as "text" | "number");

  // if (!errorMessage.value) {
  emit("update:modelValue", input);
  // }
};
</script>
