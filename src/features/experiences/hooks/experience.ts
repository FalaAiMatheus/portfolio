export function useExperience() {
  const calcDifferenceOfDates = (
    initDate: string,
    currentDate: string
  ): string => {
    const years =
      new Date(currentDate).getFullYear() - new Date(initDate).getFullYear()
    const months =
      new Date(currentDate).getUTCMonth() +
      1 -
      new Date(initDate).getUTCMonth() +
      1

    return `${years}a ${months}m`
  }

  return {
    calcDifferenceOfDates,
  }
}
