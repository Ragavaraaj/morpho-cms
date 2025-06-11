import mongoose from "mongoose";
import { FormModel } from "../db/form/model";

export async function seedForms() {
  await mongoose.connect(process.env.MONGODB_URI || "");
  const count = await FormModel.countDocuments();
  if (count === 0) {
    await FormModel.insertMany([
      {
        title: "First Form",
        description: "This is the first form.",
        slug: "first-form",
        status: "published",
        publish_status: "PUBLISHED",
        footer: "First form footer.",
        notes: "First form notes.",
        lead_source: "Website",
        fields: [
          {
            status: true,
            label: "Name",
            type: "TEXT",
            required: true,
            placeholder: "Enter your name",
            description: "User's full name",
            max_length: 100,
            selectable_date: null,
            error_messages: [
              {
                type: "REQUIRED",
                fieldId: "1",
                message: "Name is required.",
                created_at_db: new Date(),
                updated_at_db: new Date(),
              },
            ],
            options: [],
            created_at_db: new Date(),
            updated_at_db: new Date(),
          },
          {
            status: true,
            label: "Email",
            type: "EMAIL",
            required: true,
            placeholder: "Enter your email",
            description: "User's email address",
            max_length: 100,
            selectable_date: null,
            error_messages: [
              {
                type: "REQUIRED",
                fieldId: "2",
                message: "Email is required.",
                created_at_db: new Date(),
                updated_at_db: new Date(),
              },
              {
                type: "INVALID_EMAIL",
                fieldId: "2",
                message: "Invalid email address.",
                created_at_db: new Date(),
                updated_at_db: new Date(),
              },
            ],
            options: [],
            created_at_db: new Date(),
            updated_at_db: new Date(),
          },
          {
            status: true,
            label: "Country",
            type: "SELECT",
            required: false,
            placeholder: "Select your country",
            description: "User's country",
            max_length: 100,
            selectable_date: null,
            error_messages: [],
            options: [
              {
                value: "us",
                label: "United States",
                fieldId: "3",
                created_at_db: new Date(),
                updated_at_db: new Date(),
              },
              {
                value: "ca",
                label: "Canada",
                fieldId: "3",
                created_at_db: new Date(),
                updated_at_db: new Date(),
              },
            ],
            created_at_db: new Date(),
            updated_at_db: new Date(),
          },
        ],
      },
      {
        title: "Second Form",
        description: "This is the second form.",
        slug: "second-form",
        status: "draft",
        publish_status: "DRAFT",
        footer: "Second form footer.",
        notes: "Second form notes.",
        lead_source: "Referral",
        fields: [
          {
            status: true,
            label: "Feedback",
            type: "TEXTAREA",
            required: false,
            placeholder: "Your feedback",
            description: "Feedback field",
            max_length: 500,
            selectable_date: null,
            error_messages: [
              {
                type: "MAX_LENGTH_EXCEEDED",
                fieldId: "4",
                message: "Feedback is too long.",
                created_at_db: new Date(),
                updated_at_db: new Date(),
              },
            ],
            options: [],
            created_at_db: new Date(),
            updated_at_db: new Date(),
          },
          {
            status: true,
            label: "Contact Reason",
            type: "RADIO",
            required: true,
            placeholder: "",
            description: "Reason for contacting",
            max_length: 100,
            selectable_date: null,
            error_messages: [
              {
                type: "REQUIRED",
                fieldId: "5",
                message: "Please select a reason.",
                created_at_db: new Date(),
                updated_at_db: new Date(),
              },
            ],
            options: [
              {
                value: "support",
                label: "Support",
                fieldId: "5",
                created_at_db: new Date(),
                updated_at_db: new Date(),
              },
              {
                value: "sales",
                label: "Sales",
                fieldId: "5",
                created_at_db: new Date(),
                updated_at_db: new Date(),
              },
            ],
            created_at_db: new Date(),
            updated_at_db: new Date(),
          },
        ],
      },
      {
        title: "Contact Us",
        description: "Contact form for users.",
        slug: "contact-us",
        status: "published",
        publish_status: "PUBLISHED",
        footer: "Contact us footer.",
        notes: "Contact us notes.",
        lead_source: "Landing Page",
        fields: [],
      },
    ]);
  }
}

if (require.main === module) {
  seedForms().then(() => {
    console.log("Seeded forms collection");
    process.exit(0);
  });
}
