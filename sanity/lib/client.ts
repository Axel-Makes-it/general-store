import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skPzcvcwP003osH2XrsykR3WYfTueoDC78SPGKwQBCOW8eYtaWyX7N7HCqzgzFWK5QmLZIuJxXLqBHuQ4WDX62MJRjDG80jNaui2Dy3dJtwvJfRhJGO5BHSYaoMf4ZLHRQsLpSM7JwSEteqjeDWjdLhCFkZ8UciSImYgwdsLy7KsxTdS06D3",
})
