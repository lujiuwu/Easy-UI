import { aw as ref, ay as dayjs, az as computed, ap as defineComponent, ax as useVModel, aq as createVNode, aA as Transition, aB as createTextVNode, ar as resolveComponent, as as createBlock, au as withCtx, at as openBlock } from "./vendor-CeH8jYmj.js";
import { E as EyInput } from "./index-CZja7cYz.js";
/* empty css              */
import { E as EyButton } from "./index-Uf2H_EdP.js";
/* empty css              */
/* empty css              */
import { E as EyIcon } from "./index-CMuMAujO.js";
/* empty css              */
/* empty css              */
/* empty css              */
/* empty css              */
/* empty css              */
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css              */
/* empty css              */
function useBaseInfo(year, month) {
  const defaultYear = ref(year ?? dayjs().year());
  const defaultMonth = ref(month ?? dayjs().month() + 1);
  const lastYear = (callback) => {
    defaultYear.value = defaultYear.value - 1;
    callback();
  };
  const nextYear = (callback) => {
    defaultYear.value = defaultYear.value + 1;
    callback();
  };
  const lastMonth = (callback) => {
    if (defaultMonth.value === 1) {
      defaultYear.value = defaultYear.value - 1;
      defaultMonth.value = 12;
      return;
    }
    defaultMonth.value = defaultMonth.value - 1;
    callback();
  };
  const nextMonth = (callback) => {
    if (defaultMonth.value === 12) {
      defaultYear.value = defaultYear.value + 1;
      defaultMonth.value = 1;
      return;
    }
    defaultMonth.value = defaultMonth.value + 1;
    callback();
  };
  return {
    defaultMonth,
    lastMonth,
    nextMonth,
    defaultYear,
    lastYear,
    nextYear
  };
}
function useCalendarArray(year, month) {
  const array = computed(() => {
    const result = new Array(6).fill(0).map(() => new Array(7).fill(0).map(() => ({ day: 0, type: "current" })));
    const firstDay = dayjs(`${year.value}-${month.value}-01`).day();
    const days = dayjs(`${year.value}-${month.value}-01`).endOf("month").date();
    for (let i = 0; i < days; i++) {
      const row = Math.floor((firstDay + i) / 7);
      const col = (firstDay + i) % 7;
      result[row][col] = { day: i + 1, type: "current" };
    }
    for (let i = 0; i < firstDay; i++) {
      const prevMonthDays = dayjs(`${year.value}-${month.value}-01`).subtract(1, "month").endOf("month").date();
      result[0][firstDay - i - 1] = {
        day: prevMonthDays - i,
        type: "prev"
      };
    }
    for (let i = firstDay + days; i < 42; i++) {
      result[Math.floor(i / 7)][i % 7] = {
        day: i - firstDay - days + 1,
        type: "next"
      };
    }
    return result;
  });
  return {
    array
  };
}
const EyDatePicker = /* @__PURE__ */ defineComponent({
  name: "EyDateTimePicker",
  props: {
    modelValue: {
      type: String,
      default: dayjs().format("YYYY-MM-DD")
    },
    formatter: {
      type: String,
      default: "YYYY-MM-DD"
    }
  },
  emits: {
    "update:modelValue": (_value) => true
  },
  setup(props, {
    emit
  }) {
    const modelValue = useVModel(props, "modelValue", emit);
    const visible = ref(false);
    const {
      defaultYear,
      lastYear,
      nextYear,
      defaultMonth,
      lastMonth,
      nextMonth
    } = useBaseInfo(dayjs(modelValue.value).year(), dayjs(modelValue.value).month() + 1);
    const {
      array
    } = useCalendarArray(defaultYear, defaultMonth);
    const currentDay = ref(dayjs(modelValue.value).date());
    const currentWeek = computed(() => dayjs(modelValue.value).day());
    const update = () => {
      modelValue.value = dayjs(`${defaultYear.value}-${defaultMonth.value}-${currentDay.value}`).format("YYYY-MM-DD");
    };
    const toToday = () => {
      defaultYear.value = dayjs().year();
      defaultMonth.value = dayjs().month() + 1;
      currentDay.value = dayjs().date();
      update();
    };
    const close = () => {
      visible.value = false;
    };
    const disabled = computed(() => {
      return dayjs(`${defaultYear.value}-${defaultMonth.value}-${currentDay.value}`).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD");
    });
    const weeks = ["日", "一", "二", "三", "四", "五", "六"];
    return () => {
      return createVNode("div", {
        "class": "ey-date-picker-wrapper"
      }, [createVNode(EyInput, {
        "value": modelValue.value,
        "disabled": true
      }, {
        suffix: () => createVNode(EyIcon, {
          "name": "mdi:calendar",
          "size": "1.5em",
          "class": "mr-5px cursor-pointer",
          "onClick": () => visible.value = !visible.value
        }, null)
      }), createVNode(Transition, {
        "name": "calendar"
      }, {
        default: () => [visible.value && createVNode("div", {
          "class": "calendar"
        }, [createVNode("div", {
          "class": "calendar__header"
        }, [createVNode(EyIcon, {
          "name": "mdi:chevron-double-left",
          "size": 20,
          "onClick": () => lastYear(update)
        }, null), createVNode(EyIcon, {
          "name": "mdi:chevron-left",
          "size": 20,
          "onClick": () => lastMonth(update)
        }, null), createVNode("span", null, [defaultYear.value, createTextVNode(" - "), defaultMonth.value]), createVNode(EyIcon, {
          "name": "mdi:chevron-right",
          "size": 20,
          "onClick": () => nextMonth(update)
        }, null), createVNode(EyIcon, {
          "name": "mdi:chevron-double-right",
          "size": 20,
          "onClick": () => nextYear(update)
        }, null)]), createVNode("div", {
          "class": "calendar__body"
        }, [createVNode("div", {
          "class": "calendar__body__week"
        }, [weeks.map((item, index) => createVNode("span", {
          "class": ["calendar__body__week__item", currentWeek.value === index ? "calendar__body__week__item--active" : ""],
          "key": item
        }, [item]))]), createVNode("div", {
          "class": "calendar__body__days"
        }, [array.value.map((item, index) => createVNode("div", {
          "key": index,
          "class": "week-items-wrapper"
        }, [item.map((item2) => createVNode("span", {
          "key": item2.day,
          "onClick": () => {
            if (item2.type === "current") {
              currentDay.value = Number(item2.day);
              update();
            }
          },
          "class": ["calendar__item", currentDay.value === item2.day && item2.type === "current" ? "calendar__item--active" : "", item2.type !== "current" ? "calendar__item--disabled" : ""]
        }, [item2.day]))]))])]), createVNode("div", {
          "class": "calendar__footer"
        }, [createVNode(EyButton, {
          "text": "今天",
          "onClick": toToday,
          "type": "primary",
          "disabled": disabled.value
        }, null), createVNode(EyButton, {
          "text": "关闭",
          "onClick": close,
          "type": "primary"
        }, null)])])]
      })]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "datepicker.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref(dayjs("2026-05-13").format("YYYY-MM-DD"));
    const __returned__ = { modelValue, get EyDatePicker() {
      return EyDatePicker;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "DatePicker",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyDatePicker"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/DatePicker/datepicker.story.vue";
const datepicker_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/DatePicker/datepicker.story.vue"]]);
export {
  datepicker_story as default
};
