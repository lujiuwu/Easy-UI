import dayjs from "dayjs";
import { ComputedRef, Ref, computed, ref } from "vue";

export function useBaseInfo(year?:number, month?: number){
  const defaultYear = ref(year ?? dayjs().year());
  const defaultMonth = ref(month ?? dayjs().month() + 1);

  const lastYear = () => {
    defaultYear.value = defaultYear.value - 1;
  }
  const nextYear = () => {
    defaultYear.value = defaultYear.value + 1;
  }

  const lastMonth = () => {
    if(defaultMonth.value === 1) {
      defaultYear.value = defaultYear.value - 1;
      defaultMonth.value = 12;
      return
    }
    defaultMonth.value = defaultMonth.value - 1;
  }
  const nextMonth = () => {
    if(defaultMonth.value === 12) {
      defaultYear.value = defaultYear.value + 1;
      defaultMonth.value = 1;
      return
    }
    defaultMonth.value = defaultMonth.value + 1;
  }
  return {
    defaultMonth,
    lastMonth,
    nextMonth,
    defaultYear,
    lastYear,
    nextYear,
  }
}

export function useCalendarArray(
  year: Ref<number>,
  month: Ref<number>,
) {
  const array = computed(() => {
    const result = new Array(5).fill(0).map(() => new Array(7).fill(0))
    // 本月第一日是星期几
    const firstDay = dayjs(`${year.value}-${month.value}-01`).day()
    // 本月天数
    const days = dayjs(`${year.value}-${month.value}-01`).endOf('month').date()
    // 填充数组 从array[0][firstDay]开始填充
    for(let i = 0; i < days; i++) {
      result[Math.floor((firstDay + i) / 7)][(firstDay + i) % 7] = i + 1
    }
    return result
  })
  return {
    array
  }
}