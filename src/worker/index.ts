// import { Hono } from "hono";
// import { cors } from "hono/cors";
// import { ContactSubmissionSchema, CreateProjectSchema } from "../shared/types.ts";

// // ✅ Define your environment bindings (for D1 or any DB)
// interface Env {
//   DB: D1Database;
// }

// // ✅ Type-safe Hono instance
// const app = new Hono<{ Bindings: Env }>();


// // Enable CORS for all routes
// app.use("/*", cors());

// // Get all projects
// app.get("/api/projects", async (c) => {
//   try {
//     const db = c.env.DB;
//     const result = await db.prepare(`
//       SELECT * FROM projects 
//       ORDER BY is_featured DESC, display_order ASC, created_at DESC
//     `).all();
    
//     return c.json(result.results || []);
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     return c.json({ error: "Failed to fetch projects" }, 500);
//   }
// });

// // Get a single project
// app.get("/api/projects/:id", async (c) => {
//   try {
//     const db = c.env.DB;
//     const id = c.req.param("id");
    
//     const result = await db.prepare("SELECT * FROM projects WHERE id = ?").bind(id).first();
    
//     if (!result) {
//       return c.json({ error: "Project not found" }, 404);
//     }
    
//     return c.json(result);
//   } catch (error) {
//     console.error("Error fetching project:", error);
//     return c.json({ error: "Failed to fetch project" }, 500);
//   }
// });

// // Create a new project
// app.post("/api/projects", async (c) => {
//   try {
//     const db = c.env.DB;
//     const body = await c.req.json();
    
//     // Validate the input
//     const validatedData = CreateProjectSchema.parse(body);
    
//     const result = await db.prepare(`
//       INSERT INTO projects (
//         title, description, technologies, image_url, project_url, 
//         github_url, is_featured, display_order
//       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//     `).bind(
//       validatedData.title,
//       validatedData.description,
//       validatedData.technologies,
//       validatedData.image_url,
//       validatedData.project_url,
//       validatedData.github_url,
//       validatedData.is_featured,
//       validatedData.display_order
//     ).run();
    
//     if (result.success) {
//       return c.json({ id: result.meta.last_row_id, ...validatedData }, 201);
//     } else {
//       throw new Error("Failed to create project");
//     }
//   } catch (error) {
//     console.error("Error creating project:", error);
//     if (error instanceof Error && error.name === "ZodError") {
//       return c.json({ error: "Invalid input data", details: error.message }, 400);
//     }
//     return c.json({ error: "Failed to create project" }, 500);
//   }
// });

// // Update a project
// app.put("/api/projects/:id", async (c) => {
//   try {
//     const db = c.env.DB;
//     const id = c.req.param("id");
//     const body = await c.req.json();
    
//     // Validate the input
//     const validatedData = CreateProjectSchema.parse(body);
    
//     const result = await db.prepare(`
//       UPDATE projects SET 
//         title = ?, description = ?, technologies = ?, image_url = ?, 
//         project_url = ?, github_url = ?, is_featured = ?, display_order = ?,
//         updated_at = CURRENT_TIMESTAMP
//       WHERE id = ?
//     `).bind(
//       validatedData.title,
//       validatedData.description,
//       validatedData.technologies,
//       validatedData.image_url,
//       validatedData.project_url,
//       validatedData.github_url,
//       validatedData.is_featured,
//       validatedData.display_order,
//       id
//     ).run();
    
//     if (result.meta.changes && result.meta.changes > 0) {
//       return c.json({ id, ...validatedData });
//     } else {
//       return c.json({ error: "Project not found" }, 404);
//     }
//   } catch (error) {
//     console.error("Error updating project:", error);
//     if (error instanceof Error && error.name === "ZodError") {
//       return c.json({ error: "Invalid input data", details: error.message }, 400);
//     }
//     return c.json({ error: "Failed to update project" }, 500);
//   }
// });

// // Delete a project
// app.delete("/api/projects/:id", async (c) => {
//   try {
//     const db = c.env.DB;
//     const id = c.req.param("id");
    
//     const result = await db.prepare("DELETE FROM projects WHERE id = ?").bind(id).run();
    
//     if (result.meta.changes && result.meta.changes > 0) {
//       return c.json({ message: "Project deleted successfully" });
//     } else {
//       return c.json({ error: "Project not found" }, 404);
//     }
//   } catch (error) {
//     console.error("Error deleting project:", error);
//     return c.json({ error: "Failed to delete project" }, 500);
//   }
// });

// // Submit contact form
// app.post("/api/contact", async (c) => {
//   try {
//     const db = c.env.DB;
//     const body = await c.req.json();
    
//     // Validate the input
//     const validatedData = ContactSubmissionSchema.parse(body);
    
//     const result = await db.prepare(`
//       INSERT INTO contact_submissions (name, email, message)
//       VALUES (?, ?, ?)
//     `).bind(
//       validatedData.name,
//       validatedData.email,
//       validatedData.message
//     ).run();
    
//     if (result.success) {
//       return c.json({ 
//         message: "Contact form submitted successfully",
//         id: result.meta.last_row_id 
//       }, 201);
//     } else {
//       throw new Error("Failed to submit contact form");
//     }
//   } catch (error) {
//     console.error("Error submitting contact form:", error);
//     if (error instanceof Error && error.name === "ZodError") {
//       return c.json({ error: "Invalid input data", details: error.message }, 400);
//     }
//     return c.json({ error: "Failed to submit contact form" }, 500);
//   }
// });

// // Get contact submissions (admin endpoint)
// app.get("/api/contact", async (c) => {
//   try {
//     const db = c.env.DB;
//     const result = await db.prepare(`
//       SELECT * FROM contact_submissions 
//       ORDER BY created_at DESC
//     `).all();
    
//     return c.json(result.results || []);
//   } catch (error) {
//     console.error("Error fetching contact submissions:", error);
//     return c.json({ error: "Failed to fetch contact submissions" }, 500);
//   }
// });

// // Mark contact submission as read
// app.patch("/api/contact/:id/read", async (c) => {
//   try {
//     const db = c.env.DB;
//     const id = c.req.param("id");
    
//     const result = await db.prepare(`
//       UPDATE contact_submissions 
//       SET is_read = true, updated_at = CURRENT_TIMESTAMP
//       WHERE id = ?
//     `).bind(id).run();
    
//     if (result.meta.changes && result.meta.changes > 0) {
//       return c.json({ message: "Contact submission marked as read" });
//     } else {
//       return c.json({ error: "Contact submission not found" }, 404);
//     }
//   } catch (error) {
//     console.error("Error marking contact submission as read:", error);
//     return c.json({ error: "Failed to update contact submission" }, 500);
//   }
// });

// export default app;
