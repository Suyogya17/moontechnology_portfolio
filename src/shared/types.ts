import z from "zod";

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  technologies: z.string(),
  image_url: z.string().nullable(),
  project_url: z.string().nullable(),
  github_url: z.string().nullable(),
  is_featured: z.boolean(),
  display_order: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type ProjectType = z.infer<typeof ProjectSchema>;

export const ContactSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type ContactSubmissionType = z.infer<typeof ContactSubmissionSchema>;

export const CreateProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  technologies: z.string().min(1, "Technologies is required"),
  image_url: z.string().nullable(),
  project_url: z.string().nullable(),
  github_url: z.string().nullable(),
  is_featured: z.boolean().default(false),
  display_order: z.number().default(0),
});

export type CreateProjectType = z.infer<typeof CreateProjectSchema>;
