export const $lookups = [
  {
    $lookup: {
      from: "fielderrors",
      localField: "_id",
      foreignField: "fieldId",
      as: "error_messages",
    },
  },
  {
    $lookup: {
      from: "fieldoptions",
      localField: "_id",
      foreignField: "fieldId",
      as: "options",
    },
  },
];

export const $full_project = {
  $project: {
    _id: 0,
    id: { $toString: "$_id" },
    status: 1,
    formId: 1,
    label: 1,
    type: 1,
    required: 1,
    placeholder: 1,
    description: 1,
    max_length: 1,
    selectable_date: 1,
    error_messages: {
      $map: {
        input: "$error_messages",
        as: "error",
        in: {
          _id: 0,
          id: { $toString: "$$error._id" },
          type: "$$error.type",
          fieldId: "$$error.fieldId",
          message: "$$error.message",
        },
      },
    },
    options: {
      $map: {
        input: "$options",
        as: "option",
        in: {
          _id: 0,
          id: { $toString: "$$option._id" },
          value: "$$option.value",
          label: "$$option.label",
          fieldId: "$$option.fieldId",
        },
      },
    },
  },
};

export const $partial_project = {
  $project: {
    _id: 0,
    id: { $toString: "$_id" },
    status: 1,
    formId: 1,
    label: 1,
    type: 1,
    required: 1,
    placeholder: 1,
    description: 1,
    max_length: 1,
    selectable_date: 1,
  },
};
