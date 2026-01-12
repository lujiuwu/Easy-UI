import { defineComponent, ref } from "vue"
import './style.scss'
import { useBaseInfo, useCalendarArray } from "./utils";
import { EyIcon } from "../../..";
import { watch } from "vue";
import dayjs from "dayjs";
import { useVModel } from "@vueuse/core";

export const Calendar = defineComponent({
  name: 'Calendar',
  props: {
    modelValue: {
      type: String,
      default: dayjs().format('YYYY-MM-DD')
    },
  },
  emits: {
    'update:modelValue': (_value: string) => true
  },
  setup(props, {emit}) {
    const modelValue = useVModel(props, 'modelValue', emit)
    const {
      defaultYear,
      lastYear,
      nextYear,
      defaultMonth,
      lastMonth,
      nextMonth,
    } = useBaseInfo();

    const { array } = useCalendarArray(defaultYear, defaultMonth);

    const currentDay = ref(dayjs(modelValue.value).date())

    const update = (value: string) => {
      currentDay.value = Number(value)
      modelValue.value = `${defaultYear.value}-${defaultMonth.value}-${currentDay.value}`
    }

    const weeks = ['日', '一', '二', '三', '四', '五', '六']
    return () => {
      return (
        <div class="calendar">
          <div class="calendar__header">
            <EyIcon name="mdi:chevron-left" size={18} onClick={lastYear} />
            <span>{defaultYear.value}</span>
            <EyIcon name="mdi:chevron-right" size={18} onClick={nextYear} />
          </div>
          <div class="calendar__body__month">
            <span>{defaultMonth.value}月</span>
            <div class="calendar__body__month__btns">
            <EyIcon name="mdi:arrow-left" size={16} onClick={lastMonth} />
            <EyIcon name="mdi:arrow-right" size={16} onClick={nextMonth} />
            </div>
          </div>
          <div class="calendar__body__week">
            {
              weeks.map(item => (<span class="calendar__body__week__item" key={item}>{item}</span>))
            }
          </div>
          <div class="calendar__body__days">
            {
              array.value.map((item, index) => 
                (
                  <div key={index} class="week-items-wrapper">
                    {item.map(item => (
                      <span 
                        key={item} 
                        onClick={() => update(item)}
                        class={[
                          'calendar__item',
                          currentDay.value === item ? 'calendar__item--active' : ''
                        ]}
                      >
                        {item!==0 ? item : ''}
                      </span>
                    ))}
                  </div>
                )
              )
            }
          </div>
        </div>
      )
    }
  }
})