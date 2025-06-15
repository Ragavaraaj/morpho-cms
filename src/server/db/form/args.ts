export const $full_project = {
  $project: {
    _id: 0,
    id: { $toString: "$_id" },
    title: 1,
    description: 1,
    slug: 1,
    status: 1,
    footer: 1,
    notes: 1,
    lead_source: 1,
    fields: {
      $map: {
        input: "$fields",
        as: "field",
        in: {
          _id: 0,
          id: { $toString: "$$field._id" },
          label: "$$field.label",
          type: "$$field.type",
          required: "$$field.required",
          placeholder: "$$field.placeholder",
          description: "$$field.description",
          max_length: "$$field.max_length",
          selectable_date: "$$field.selectable_date",
          status: "$$field.status",
        },
      },
    },
    history: {
      $map: {
        input: "$history",
        as: "history",
        in: {
          _id: 0,
          id: { $toString: "$$history._id" },
          action: "$$history.action",
          formId: { $toString: "$$history.formId" },
          data: "$$history.data",
          user: "$$history.user",
        },
      },
    },
  },
};

export const $partial_project = {
  $project: {
    _id: 0,
    id: { $toString: "$_id" },
    title: 1,
    description: 1,
    slug: 1,
    status: 1,
    footer: 1,
    notes: 1,
    lead_source: 1,
  },
};

export const $lookups = [
  {
    $lookup: {
      from: "formfields",
      localField: "_id",
      foreignField: "formId",
      as: "fields",
    },
  },
];
