export const dates = {
  CURRENT_DATE: new Date().toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  }),
  INIT_JOB: '2022-11-05',
  INIT_FUNCTION_FRONT_END: '2023-11-05',
  INIT_FUNCTION_APPRENTICE: '2022-11-05',
  END_FUNCTION_APPRENTICE: '2023-11-05',
} as const;
