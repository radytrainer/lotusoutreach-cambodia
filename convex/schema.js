// convex/schema.js
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  activities: defineTable({
    title: v.string(),
    content: v.string(),
    date: v.string(),
    author: v.string(),
    category: v.string(),
    image: v.string(),
    image1: v.array(v.string()),
    location: v.string(),
  }),
});