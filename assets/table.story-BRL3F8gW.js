import { ap as defineComponent, aq as createVNode, ax as useVModel, ay as Fragment, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock } from "./vendor-DftBMx7u.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyTable = /* @__PURE__ */ defineComponent({
  name: "EyTable",
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    selectable: {
      type: Boolean,
      default: false
    },
    selectedKeys: {
      type: Array
    }
  },
  emits: {
    "update:selectedRows": (_value) => true
  },
  setup(props, {
    emit
  }) {
    const selectedKeys = useVModel(props, "selectedKeys", emit, {
      defaultValue: []
    });
    const renderTableRow = (item, index) => {
      const arr = Object.entries(item);
      return createVNode(Fragment, null, [props.selectable && createVNode("td", {
        "class": "ey-table__body-row__cell",
        "key": "select"
      }, [createVNode("input", {
        "type": "checkbox",
        "checked": selectedKeys.value?.includes(index.toString())
      }, null)]), arr.map(([key, value]) => {
        return createVNode("td", {
          "class": "ey-table__body-row__cell",
          "key": key
        }, [value]);
      })]);
    };
    function selectRoot() {
      if (!selectedKeys.value || selectedKeys.value.length === 0) {
        selectedKeys.value = [...props.data.map((item, index) => index.toString())];
      } else {
        selectedKeys.value = [];
      }
    }
    return () => {
      return createVNode("div", {
        "class": "ey-table-wrapper"
      }, [createVNode("table", {
        "class": "ey-table"
      }, [createVNode("thead", {
        "class": "ey-table__header"
      }, [createVNode("tr", {
        "class": "ey-table__header-row"
      }, [props.selectable && createVNode("th", {
        "scope": "col",
        "class": "ey-table__header-row__cell",
        "key": "select"
      }, [createVNode("input", {
        "type": "checkbox",
        "onChange": selectRoot
      }, null)]), props.columns.map((column) => createVNode("th", {
        "scope": "col",
        "class": "ey-table__header-row__cell",
        "key": column.key,
        "style": {
          width: column.width
        }
      }, [column.title]))])]), createVNode("tbody", {
        "class": "ey-table__body"
      }, [props.data.map((item, index) => createVNode("tr", {
        "class": "ey-table__body-row",
        "key": item.key
      }, [renderTableRow(item, index)]))])])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "table.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns = [
      {
        title: "Name",
        key: "name",
        width: "100px"
      },
      {
        title: "Age",
        key: "age",
        width: "100px"
      },
      {
        title: "Address",
        key: "address",
        width: "100px"
      }
    ];
    const data = [
      {
        name: "John",
        age: 20,
        address: "New York"
      },
      {
        name: "Jane",
        age: 21,
        address: "Los Angeles"
      },
      {
        name: "Jim",
        age: 22,
        address: "Chicago"
      }
    ];
    const selectedKeys = ref([]);
    const __returned__ = { columns, data, selectedKeys, get EyTable() {
      return EyTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Table",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyTable"], {
            columns: $setup.columns,
            data: $setup.data,
            selectable: true,
            "selected-keys": $setup.selectedKeys,
            "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => $setup.selectedKeys = $event)
          }, null, 8, ["selected-keys"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Table/table.story.vue";
const table_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Table/table.story.vue"]]);
export {
  table_story as default
};
